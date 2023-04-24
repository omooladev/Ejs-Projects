require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/Auth");
const userRoutes = require("./routes/User");
const NotFound = require("./middlewares/not-found");
const app = express();

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
