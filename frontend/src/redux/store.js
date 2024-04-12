import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/authSlice";
import productReduce from "./features/productSlice";
import eventReduce from "./features/eventSlice";
import couponReduce from "./features/couponSlice";
import cartReduce from "./features/cartSlice";
import wishlistReduce from "./features/wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
    product: productReduce,
    event: eventReduce,
    coupon: couponReduce,
    cart: cartReduce,
    wishlist: wishlistReduce,
  },
});
