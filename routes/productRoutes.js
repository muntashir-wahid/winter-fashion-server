const express = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
} = require("./../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;
