const express = require("express");
const { createUser, getAllUser } = require("../controller/userController");
const router = express.Router();

router.route("/add").post(createUser);
router.route("/list").get(getAllUser);

module.exports = router;
