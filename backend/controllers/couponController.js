const asyncHandler = require("express-async-handler");
const Coupon = require("../models/couponModel");

//Create a new Coupon

const createCoupon = asyncHandler(async (req, res) => {
  const coupon = await Coupon.find({ name: req.body.name });
  console.log(coupon);
  const couponModel = req.body;
  console.log(couponModel);
  const { name, value, minAmount, maxAmount, selectedProducts } = req.body;

  const newCoupon = await Coupon.create({
    name,
    value,
    minAmount,
    maxAmount,
    selectedProducts,
  });

  res.status(200).json(newCoupon);
});

//Get All coupons
const getCoupons = asyncHandler(async (req, res) => {
  const coupons = await Coupon.find().sort("-createdAt");
  if (!coupons) {
    res.status(404);
    throw new Error("Coupons not found");
  }
  res.status(200).json(coupons);
});

//get single coupon
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const coupon = await Coupon.findOne({ _id: id });
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon not found");
  }
  res.status(200).json(coupon);
});

// delete coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const coupon = await Coupon.findOne({ _id: id });
  if (!coupon) {
    res.status(404);
    throw new Error("Coupon not found");
  }
  await Coupon.findByIdAndDelete(id);
  res.status(200).json({ message: "Coupon deleted." });
});

module.exports = {
  createCoupon,
  getCoupons,
  getCoupon,
  deleteCoupon,
};
