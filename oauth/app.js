const express = require("express");
const app = express();
const path = require("path");
const cookieSession = require("cookie-session");
const NotFound = require("./middlewares/not-found");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/User");
const passport = require("./config/passport-setup");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static("public"));
app.use(
  cookieSession({
    maxAge: process.env.cookieMaxAge,
    keys: [process.env.cookieKeys],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRoutes);
app.use("/auth", authRoutes);

//? middlewares
app.use(NotFound);

module.exports = app;
