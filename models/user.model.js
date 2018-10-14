var mongoose = require("mongoose");

var UserModel = mongoose.model("User", {
  username: { type: String, unique: true },
  password: { type: String },
  active: { type: Boolean, default: true },
  locked: { type: Boolean, default: false },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = UserModel;