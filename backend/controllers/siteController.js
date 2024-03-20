const axios = require("axios");
const supabase = require("../supabase");
const { google } = require("googleapis");
const servicePrivateKey = require("../service-private-key.json");
const { parseString } = require("xml2js");
const indexURL = require("../utils/indexURL");

const serviceAccountCredentials = {
  // Your service account credentials here
  client_email: servicePrivateKey.client_email,
  private_key: servicePrivateKey.private_key,
};

const auth = new google.auth.JWT(
  serviceAccountCredentials.client_email,
  null,
  serviceAccountCredentials.private_key,
  [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/webmasters",
  ]
);

// get all sites controller
const getAllSitesController = async (req, res) => {
  try {
    const { id } = req.user || {};
    console.log("user id", id);

    // Find the user by ID
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    if (!user) {
      throw new Error("User not found");
    }

    // get all sites
    const options = {
      method: "GET",
      url: "https://www.googleapis.com/webmasters/v3/sites",
      headers: {
        Authorization: `Bearer ${user?.googleAccessToken}`,
      },
    };

    const response = await axios(options);

    for (const site of response?.data?.siteEntry) {
      // get site maps
      const searchConsole = google.webmasters({ version: "v3", auth });
      const response = await searchConsole.sitemaps.list({
        siteUrl: site?.siteUrl,
      });

      const sitemap = response?.data?.sitemap;
      let siteMapPath;

      for (const sitemapItem of sitemap) {
        if (sitemapItem?.type === "sitemap") {
          siteMapPath = sitemapItem?.path;
          break;
        }
      }

      // get site
      const { data: singleSite, error } = await supabase
        .from("sites")
        .select("*")
        .eq("siteUrl", site?.siteUrl)
        // .eq("user", id)
        .single();

      console.log("single site", singleSite);

      if (!singleSite) {
        // create new site in db
        const { error } = await supabase.from("sites").upsert([
          {
            siteUrl: site?.siteUrl,
            enabled: false,
            autoIndex: false,
            limit: 0,
            user: id,
            siteMap: siteMapPath,
            siteMaps: sitemap?.length,
          },
        ]);
      }
    }

    // get all sites from db
    const { data: sites } = await supabase
      .from("sites")
      .select("*")
      .eq("user", id);
    // .eq("user", id)

    console.log("sites", sites);

    res.status(200).json(sites);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

// get single site controller
const getSingleSiteController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { id: userId } = req.user || {};

    // get site
    const { data: site, error } = await supabase
      .from("sites")
      .select("*")
      .eq("id", id)
      .eq("user", userId)
      .single();

    if (!site) {
      return res.status(400).json("Site not found!");
    }

    async function getSitemapUrls(sitemapUrl) {
      try {
        // Make an HTTP request to the sitemap URL
        const response = await axios.get(sitemapUrl);

        // Parse the XML content
        const xmlContent = response.data;
        const parsedData = await parseXml(xmlContent);

        // Extract URLs from the parsed XML
        const urls = extractUrls(parsedData);

        return urls;
      } catch (error) {
        console.error("Error fetching or parsing sitemap:", error.message);
        throw error;
      }
    }

    function parseXml(xmlContent) {
      return new Promise((resolve, reject) => {
        parseString(xmlContent, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }

    function extractUrls(parsedData) {
      const urlElements = parsedData.urlset.url || [];

      // Extract URLs from the <loc> elements
      const urls = urlElements.map(
        (urlElement) => urlElement.loc && urlElement.loc[0]
      );

      return urls;
    }

    const response = await getSitemapUrls(site?.siteMap);

    res.status(200).json({
      ...site,
      urls: response,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// index site url controller
const indexSiteUrlController = async (req, res) => {
  try {
    const { url } = req.body || {};
    const { id } = req.user || {};

    // get user
    const { data: user } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    indexURL(url, user?.googleAccessToken, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!",
    });
  }
};

// update site information controller
const updateSiteInformationController = async (req, res) => {
  try {
    const { enabled, autoIndex, limit } = req.body || {};
    const { id } = req.params || {};
    const { subscriptionPlan, id: userId } = req.user || {};

    // get all enabled sites
    const { data: sites } = await supabase
      .from("sites")
      .select("*")
      .eq("enabled", true)
      .eq("user", userId);

    if (enabled) {
      // get subscription plan
      const { data: subscription, error } = await supabase
        .from("subscription_plans")
        .select("*")
        .eq("name", subscriptionPlan)
        .single();

      if (error) {
        throw error;
      }

      if (!subscription) {
        throw new Error("subscription Plan not found!!");
      }

      const { websitesLimit } = subscription || {};

      if (sites?.length === websitesLimit) {
        return res.status(400).json({
          error:
            "Your subscription limit is full. Please update your subscription plan.",
        });
      }
    }

    // update site info
    const { data: updatedSite, updateError } = await supabase
      .from("sites")
      .update({
        enabled,
        autoIndex,
        limit,
      })
      .eq("id", id)
      .single();

    if (updateError) {
      throw error;
    }

    const { data: site } = await supabase
      .from("sites")
      .select("*")
      .eq("id", id)
      .single();

    res.status(201).json(site);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server error occurred!!",
    });
  }
};

module.exports = {
  getAllSitesController,
  updateSiteInformationController,
  indexSiteUrlController,
  getSingleSiteController,
};
