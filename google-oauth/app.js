const express = require("express");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/User");
const NotFound = require("./middlewares/not-found");
const app = express();

// GOOGLE_CLIENT_ID = "676203263085-6jglegmkpti3eqp3qjr1dp11acag5lqf.apps.googleusercontent.com";
// GOOGLE_CLIENT_SECRET = "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";
// GOOGLE_CLIENT_REDIRECT_URL = "http://localhost:5000/auth/google/redirect";


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", userRoutes);
app.use("/auth", authRoutes);

//? middlewares
app.use(NotFound);

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      return console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
