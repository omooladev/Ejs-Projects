const mongoose = require("mongoose");

const visitsSchema = new Schema({
  //note-----> impressions mean number of visits to our website
  impressions: {
    type: Number,
    default: 0,
  },
  //note-----> Means the number of sign ups on our website
  numOfSignUps: {
    type: Number,
    default: 0,
  },
  //note-----> Means the number of people who logins to our website
  numOfLogins: {
    type: Number,
    default: 0,
  },
  //note-----> Means the number of people who logout from our website
  numOfLogouts: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("visits", visitsSchema);
