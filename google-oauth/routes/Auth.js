const express = require("express");

const router = express.Router();

//* routes
router.route("/login").get((req, res) => {
  res.render("Login.ejs", { pageTitle: "Login", user: null });
});
router.route("/google").get((req, res) => {});
module.exports = router;
