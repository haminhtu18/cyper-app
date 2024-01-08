const mongoose = require("mongoose");

const couponSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    value: {
      type: Number,
      default: 4,
    },
    selectedProducts: [],
    minAmount: {
      type: Number,
    },
    maxAmount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Coupon = mongoose.model("Coupon", couponSchema);
module.exports = Coupon;
