const express = require("express");
const {
  addItemToCart,
  getUserCart,
  deleteFromCart,
} = require("./../controllers/cartController");

const router = express.Router();

router.route("/").post(addItemToCart).get(getUserCart);
router.route("/:id").delete(deleteFromCart);

module.exports = router;
