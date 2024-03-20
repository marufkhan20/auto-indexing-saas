const {
  getAllSitesController,
  updateSiteInformationController,
  getSingleSiteController,
  indexSiteUrlController,
} = require("../controllers/siteController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get all sites
router.get("/", authMiddleware, getAllSitesController);

// get single site
router.get("/:id", authMiddleware, getSingleSiteController);

// index site urls
router.post("/index-site-url", authMiddleware, indexSiteUrlController);

// update site permissions
router.put("/:id", authMiddleware, updateSiteInformationController);

module.exports = router;
