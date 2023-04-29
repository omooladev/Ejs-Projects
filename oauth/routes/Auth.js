const passport = require("../config/passport-setup");
const express = require("express");

const router = express.Router();

//* routes
router.route("/login").get((req, res) => {
  res.render("Auth.ejs", { pageTitle: "Login", user: null });
});
router.route("/signup").get((req, res) => {
  res.render("Auth.ejs", { pageTitle: "SignUp", user: null });
});
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});
module.exports = router;
