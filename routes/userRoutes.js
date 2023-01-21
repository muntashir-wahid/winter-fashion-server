const express = require("express");

const {
  registerUser,
  loginUser,
  getUser,
  getAllUser,
} = require("./../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUser);
router.route("/").get(getAllUser);

module.exports = router;
