const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { authRoutes, subscriptionRoutes, siteRoutes } = require("./routes");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env",
  });
}

require("./supabase");

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// Use cookie-parser middleware
app.use(cookieParser());

// set public folder
app.use(express.static("public"));

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/sites", siteRoutes);
app.use("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
