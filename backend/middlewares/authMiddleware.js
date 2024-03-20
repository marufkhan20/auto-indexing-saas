const jwt = require("jsonwebtoken");

// check authentication
const authMiddleware = (req, res, next) => {
  try {
    let { auth } = req.cookies;

    if (!auth) {
      return res.status(401).json({
        error: "Authentication Failure!!",
      });
    }

    auth = JSON.parse(auth);

    console.log("auth", auth);

    let { token } = auth;

    console.log("token", token);

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    console.log("error", err);
    res.status(401).json({
      message: "JWT Expire!!",
    });
  }
};

module.exports = authMiddleware;
