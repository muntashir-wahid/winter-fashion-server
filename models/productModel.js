const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
  },
  brandName: {
    type: String,
    default: "Winter Fashion",
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  ratings: {
    type: Number,
    default: 4.5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  picture: {
    type: String,
    required: [true, "A recipe must have a picture"],
    validate: {
      validator: function (url) {
        return /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/g.test(url);
      },
      message: (props) => `${props.value} is not a valid picture!`,
    },
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
    min: [50, "A product must have a price more then 50"],
  },
  deliveryCost: {
    type: Number,
    default: 40,
  },
  color: {
    type: String,
    required: [true, "A product must have a color"],
  },
  size: {
    type: [String],
    default: ["sm", "md", "lg", "xl", "xxl"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
