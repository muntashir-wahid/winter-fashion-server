const Product = require("./../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    rea.status(500).status({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    rea.status(500).status({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};
