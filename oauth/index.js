require("dotenv").config();
require("express-async-errors");
const app = require("./app");
const connectDB = require("./db/connect");
const { saveVisits } = require("./saveVisits");
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await saveVisits({ type: "impressions" });
    console.log("connected to database");
    console.log("update impression number");
    app.listen(PORT, () => {
      return console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
