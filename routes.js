const express = require("express");
const router = express.Router();
const path = require("path");
const db = "../models";

router.post("/api/menu", function (req, res) {
  console.log(req.body);
  res.send("menu item received");
});

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
