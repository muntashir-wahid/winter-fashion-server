const express = require("express");
const {
  addItemToCart,
  getUserCart,
} = require("./../controllers/cartController");

const router = express.Router();

router.route("/").post(addItemToCart).get(getUserCart);

module.exports = router;
