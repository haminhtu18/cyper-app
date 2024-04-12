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
      // localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
      if (isItemExist) {
        return {
          ...state,
          wishlist: state.wishlist.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        const uploadState = {
          ...state,
          wishlist: [...state.wishlist, item],
        };
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(uploadState.wishlist)
        );
        return uploadState;
      }
    },
    REMOTEFROMWISHLIST: (state, action) => {
      const removeWishlist = {
        ...state,
        wishlist: state.wishlist.filter((i) => i._id !== action.payload._id),
      };

      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(removeWishlist.wishlist)
      );
      return removeWishlist;
    },
  },
});

export const { ADDTOWISHLIST, REMOTEFROMWISHLIST } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.wishlist;

export default wishlistSlice.reducer;
