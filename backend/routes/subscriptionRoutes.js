const {
  getAllSubscriptionsPlanController,
  subscribePackageController,
  updateUserSubscriptionPlanController,
} = require("../controllers/subscriptionController");

const router = require("express").Router();

// get all subscription plans
router.get("/", getAllSubscriptionsPlanController);

// subscribe to package
router.post("/subscribe-package", subscribePackageController);

// update user subscription plan
router.post("/update-subscription-plan", updateUserSubscriptionPlanController);

module.exports = router;
