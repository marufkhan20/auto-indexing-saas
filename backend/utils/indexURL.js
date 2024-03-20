const fs = require("fs");
const { google } = require("googleapis");
const axios = require("axios");

async function indexURL(url, accessToken, res) {
  // Load the JSON key file content
  const JSON_KEY_FILE = "./service-private-key.json";
  const keyFileContent = JSON.parse(fs.readFileSync(JSON_KEY_FILE));

  const SCOPES = ["https://www.googleapis.com/auth/indexing"];

  // Create a JWT token for authentication
  const jwtClient = new google.auth.JWT(
    keyFileContent.client_email,
    null,
    keyFileContent.private_key,
    SCOPES
  );

  const ENDPOINT =
    "https://indexing.googleapis.com/v3/urlNotifications:publish";

  const content = {
    url: url.trim(),
    type: "URL_UPDATED",
  };

  try {
    const response = await axios.post(ENDPOINT, content, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const result = response.data;

    // console.log(
    //   `urlNotificationMetadata.url: ${result.urlNotificationMetadata.url}`
    // );
    // console.log(
    //   `urlNotificationMetadata.latestUpdate.url: ${result.urlNotificationMetadata.latestUpdate.url}`
    // );
    // console.log(
    //   `urlNotificationMetadata.latestUpdate.type: ${result.urlNotificationMetadata.latestUpdate.type}`
    // );
    // console.log(
    //   `urlNotificationMetadata.latestUpdate.notifyTime: ${result.urlNotificationMetadata.latestUpdate.notifyTime}`
    // );

    res.status(200).json(result);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({
      error:
        "Something went wrong. Make sure you have add sitemap and add our email address in your site settings.",
    });
  }
}

module.exports = indexURL;
