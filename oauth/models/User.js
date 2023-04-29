const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
