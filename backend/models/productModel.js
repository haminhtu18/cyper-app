const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
      trim: true,
    },
    tags: {
      type: String,
      required: [true, "Please add a tags"],
      trim: true,
    },
    currentPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please add a price"],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "Please add a stock"],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sold_out: {
      type: Number,
      default: 0,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
