const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    name: String,
    lastName: String,
    age: Number,
    phoneNumber: Number,
    gender: String,
    admin: Boolean
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel
};
