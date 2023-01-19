const express = require("express");
const {
  getAllProducts,
  getProduct,
} = require("./../controllers/productController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
// router.route("/tour-stats").get(getTourStats);
// router.route("/monthly-plan/:year").get(getMonthlyPlan);
// router.route("/").get(getAllTours).post(createTour);
// router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
