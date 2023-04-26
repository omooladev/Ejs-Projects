require("express-async-errors");
const express = require("express");
const groceriesRouter = require("./routes/Groceries");
const ErrorHandlerMiddleWare = require("./middlewares/error-handler");
const NotFound = require("./middlewares/not-found");
const app = express();

//? middlewares
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("", groceriesRouter);
app.use(ErrorHandlerMiddleWare);
app.use(NotFound);
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
