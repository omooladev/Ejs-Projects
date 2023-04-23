const express = require("express");

const router = express.Router();

//* routes
router.route("/").get((req, res) => {
  res.render("Home.ejs");
});
