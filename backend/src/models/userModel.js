const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a name"],
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "Please Provide a Email"],
    minLength: 5,
    unique: true,
  },
  subject: {
    type: String,
    required: [true, "Please Provide a Valid Subject"],
    minLength: 5,
  },
  message: {
    type: String,
    required: [true, "Please Provide a details Message"],
    minLength: 5,
  },
});

module.exports = mongoose.model("User", userSchema);
