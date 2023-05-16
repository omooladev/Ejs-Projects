const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const { BadRequestError } = require("../errors");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (user) {
    done(null, user);
  }
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_REDIRECT_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        const {
          id: googleId,
          displayName,
          _json: { email, picture: profilePicture },
        } = profile;
        user = await User.create({
          googleId,
          displayName,
          email,
          profilePicture,
        });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

//important--------> Passport Local strategy setup for Login
passport.use(
  "login",
  new localStrategy(async (username, password, done) => {
    //important-----> verify fields value
    console.log(username, password);
    if (username === "null" || password === "null") {
      throw new BadRequestError("Please provide username or password");
    }
    //const user=
  })
);

//important--------> Passport Local strategy setup for SignUp
passport.use(
  "signup",
  new localStrategy({ usernameField: "emailAddress" }, async (emailAddress, password, done) => {
    if (emailAddress === "null" || password === "null") {
      throw new BadRequestError("Please provide Email Address or Password");
    }
    try {
      const userDetails = new User({ email: emailAddress, password });
      await userDetails.save();
    } catch (error) {
      done(error, null);
    }
  })
);

module.exports = passport;
