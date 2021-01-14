const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

const allowlist = ["http://localhost:3000"];

const corsOptionsDelegate = (req, callback) => {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

const port = process.env.PORT || 8080;
const newsRoutes = require("./api/news");

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error: err,
  });
});

app.get("/", function (req, res, next) {
  res.json({ message: "App works!" });
});

app.use("/api", newsRoutes);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;
