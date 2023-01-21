const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.ObjectId,
    required: [true, "An order must have an ID"],
  },
  customerId: {
    type: mongoose.ObjectId,
    required: [true, "An order must have a Customer ID"],
  },
  customerName: {
    type: String,
    required: [true, "An order must have a customer name"],
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
