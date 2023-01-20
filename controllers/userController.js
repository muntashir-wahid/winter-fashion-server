const User = require("./../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const { _id } = await User.create(req.body);
    const user = await User.findById(_id).select("-__v -password");

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne(req.body).select("-__v -password");

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message:
          "User not found!Please try again with correct phone number and password",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-__v -password");

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found!",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};
