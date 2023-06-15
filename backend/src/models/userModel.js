const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide a name"],
    minLength: [3, "Please provide minimum 3 Character"],
    validate: {
      validator: function (name) {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(name);
      },
      message: "Please Provide a Valid Name ",
    },
  },
  email: {
    type: String,
    required: [true, "Please Provide a Email"],
    minLength: [5, "Please provide minimum 5 Character"],
    unique: true,
    validate: {
      validator: function (email) {
        return /^([A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6})+$/.test(
          email
        );
      },
      message: "Please Provide a Valid Email ",
    },
  },
  password: {
    type: String,
    required: [true, "Please Provide a Email"],
    minLength: [5, "Please provide minimum 5 Character"],
  },
  subject: {
    type: String,
    required: [true, "Please Provide a Valid Subject"],
    minLength: [5, "Please provide minimum 5 Character"],
  },
  message: {
    type: String,
    required: [true, "Please Provide a details Message"],
    minLength: [5, "Please provide minimum 5 Character"],
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare Password

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);

