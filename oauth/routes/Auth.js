const passport = require("../config/passport-setup");
const express = require("express");
const { BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

//* routes
router.route("/login").get((req, res) => {
  res.render("Auth.ejs", { pageTitle: "Login", user: null });
});
router.route("/signup").get((req, res) => {
  res.render("Auth.ejs", { pageTitle: "SignUp", user: null });
});
//important--------> Route to login users
router.post("/login", passport.authenticate("login"), (req, res) => {
  console.log("true");
  console.log(req.body);
});
//important--------> Route to signup users
// router.post("/signup", async (req, res, next) => {
//   passport.authenticate("signup", async (error, user, info) => {
//     if (error) {
//       throw new BadRequestError(error);
//     }
//   })(req, res, next);
// });
router.post("/signup", passport.authenticate("signup"), (req, res) => {
  //res.status(StatusCodes.CREATED).json({ message: "Account created successfully" });
});
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});
module.exports = router;
