const {
  registerController,
  loginController,
  updateUserController,
  selfController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get self data
router.get("/self", authMiddleware, selfController);

// registration route
router.post("/register", registerController);

// // login route
router.post("/login", loginController);

// update user by google access token
router.put("/update-user", authMiddleware, updateUserController);

// // get user by email
// router.post("/forgot-password", fortgotPasswordController);

// // reset account password
// router.put("/reset-password/:token", resetPasswordController);

// // update password
// router.put("/update-password", authMiddleware, changePasswordController);

module.exports = router;
