import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    ADDTOWISHLIST: (state, action) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i._id === item._id);
      if (isItemExist) {
        return {
          ...state,
          wishlist: state.wishlist.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, item],
        };
      }
    },
    REMOTEFROMCART: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter((i) => i._id !== action.payload),
      };
    },
  },
});

export const { ADDTOWISHLIST, REMOTEFROMCART } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer;
