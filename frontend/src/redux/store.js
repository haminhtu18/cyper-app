import { configureStore } from "@reduxjs/toolkit";
import authReduce from "./features/authSlice";
import productRuduce from "./features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReduce,
    product: productRuduce,
  },
});
