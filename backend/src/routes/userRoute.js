const express = require("express");
const {
  createUser,
  getAllUser,
  loginUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/add").post(createUser);
router.route("/list").get(getAllUser);
router.route("/login").post(loginUser);

module.exports = router;
