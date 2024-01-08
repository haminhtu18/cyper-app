const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createCoupon,
  getCoupons,
  getCoupon,
  deleteCoupon,
} = require("../controllers/couponController");

router.post("/create-coupon", protect, createCoupon);
router.get("/all-coupons", protect, getCoupons);
router.get("/coupon/:id", protect, getCoupon);
router.delete("/delete-coupon/:id", protect, deleteCoupon);
module.exports = router;
