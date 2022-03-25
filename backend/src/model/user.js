const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  phone: { type: String, unique: true },
  address: { type: String, default: null },
  balance: { type: String, default: null },
  password: { type: String },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);