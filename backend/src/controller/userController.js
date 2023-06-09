const userModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name && !email && !subject && !message) {
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
