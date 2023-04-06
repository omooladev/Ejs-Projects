const express = require("express");
const groceriesRouter = require("./routes/Groceries");
const app = express();

//? middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", groceriesRouter);
const PORT = process.env.PORT || 5000;
//? listen
const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
