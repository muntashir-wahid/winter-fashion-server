const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.ObjectId,
    required: [true, "A cart item must have a product ID"],
  },
  userId: {
    type: mongoose.ObjectId,
    required: [true, "A cart item must have an user ID"],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
