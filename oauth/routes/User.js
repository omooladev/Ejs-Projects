const express = require("express");
const Authentication = require("../middlewares/auth");
const router = express.Router();

//* routes
router.route("/").get((req, res) => {
  res.redirect("/home");
});
// router.route("/home").get((req, res) => {
//   res.render("Home.ejs", { pageTitle: "Home Page", user: req.user });
// });
router.get("/profile", Authentication, (req, res) => {
  console.log("profile");
  res.render("Profile.ejs", { pageTitle: "Profile Page", user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
