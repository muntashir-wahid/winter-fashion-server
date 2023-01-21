const express = require("express");
const {
  createOrder,
  getUserOrders,
} = require("./../controllers/orderController");

const router = express.Router();

router.route("/").post(createOrder).get(getUserOrders);

module.exports = router;
