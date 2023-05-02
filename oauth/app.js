require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const connectDB = require("./db/connect");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/User");
const passport = require("./config/passport-setup");
const NotFound = require("./middlewares/not-found");
const app = express();

app.set("view engine", "ejs");
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

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    //await connectDB(process.env.MONGO_URI);
    console.log("connected to database");
    app.listen(PORT, () => {
      return console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
