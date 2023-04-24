const express = require("express");

const router = express.Router();

//* routes
router.route("/").get((req, res) => {
  res.render("Home.ejs", { pageTitle: "Home Page", user: null });
});
router.route("/profile").get((req, res) => {
  res.render("Profile.ejs", { pageTitle: "Profile Page", user: null });
});

module.exports = router;
