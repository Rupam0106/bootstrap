const userModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, email, password, subject, message } = req.body;
  if (!name && !email && !subject && !message && !password) {
    return res.status(400).json({
      message: "Please Provide all valid data",
    });
  }

  const user = await userModel.create(req.body);
  res.status(201).json({ success: true, user });
};

exports.getAllUser = async (req, res) => {
  const user = await userModel.find();
  res.status(200).json({ success: true, user });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Please Provide valid Email ",
    });
  }
  if (!password) {
    return res.status(400).json({
      message: "Please Provide valid Password",
    });
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      sucess: false,
      message: "User Not found",
    });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      sucess: false,
      message: "Permission Denied",
    });
  }

  res.status(200).json({ success: true, message: "User Login sucessfully" });
};
