const Order = require("./../models/orderModel");
const mongoose = require("mongoose");

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        order,
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

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.query.customerId;

    if (userId) {
      const orders = await Order.find({
        customerId: mongoose.Types.ObjectId(userId),
      }).select("-__v");

      return res.status(200).json({
        status: "success",
        data: {
          orders,
        },
      });
    }

    const orders = await Order.find().select("-__v");

    res.status(200).json({
      status: "success",
      data: {
        orders,
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
