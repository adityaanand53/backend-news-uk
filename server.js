const express = require("express");
const app = express();

var port = process.env.PORT || 8080;
var router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "App works!" });
});

app.use("/api", router);

app.listen(port);
console.log("Server running on port " + port);
