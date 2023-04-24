const passport = require("../config/passport-setup");
const express = require("express");

const router = express.Router();

//* routes
router.route("/login").get((req, res) => {
  res.render("Login.ejs", { pageTitle: "Login", user: null });
});
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    console.log(req.user);
    res.send();
  }
);
module.exports = router;
