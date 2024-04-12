import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADDTOCART: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        return {
          ...state,
          cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
        };
      } else {
        const updateState = { ...state, cart: [...state.cart, item] };
        localStorage.setItem("cartItems", JSON.stringify(updateState.cart));
        return updateState;
      }
    },
    REMOTEFROMCART: (state, action) => {
      const updateState = {
        ...state,
        cart: state.cart.filter((i) => i._id !== action.payload),
      };
      localStorage.setItem("cartItems", JSON.stringify(updateState.cart));
      return updateState;
    },
  },
});

export const { ADDTOCART, REMOTEFROMCART } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
