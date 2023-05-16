const mongoose = require("mongoose");
//const bcrypt=
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  displayName: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength:8,
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
  },
  profilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
