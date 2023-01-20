const Cart = require("./../models/cartModel");
const mongoose = require("mongoose");

exports.addItemToCart = async (req, res) => {
  try {
    const cartItem = await Cart.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        cartItem,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

exports.getUserCart = async (req, res) => {
  try {
    const userId = req.query.userId;

    if (userId) {
      const cart = await Cart.find({
        userId: mongoose.Types.ObjectId(userId),
      }).select("-__v");

      res.status(200).json({
        status: "success",
        data: {
          cart,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};
