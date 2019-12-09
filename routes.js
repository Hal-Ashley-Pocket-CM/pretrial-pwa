const path = require("path");
const router = require("express").Router();
require("dotenv").config();
// API Routes

router.post("/save-location", function(req, res) {
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  let user = req.body.user;

  // save this info to the db
});

module.exports = router;
