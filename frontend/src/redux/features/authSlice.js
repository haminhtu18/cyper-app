import { createSlice } from "@reduxjs/toolkit";

// const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  name: name ? name : "",
  user: {
    email: "",
    name: "",
    phone: "",
    photo: {} || "",
    role: "",
    _id: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
      console.log(action.payload);
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
      console.log(action.payload);
    },
    SET_USER(state, action) {
      console.log(action.payload);
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.phone = action.payload.phone;
      state.user.photo = action.payload.photo;
      state.user.role = action.payload.role;
      state.user._id = action.payload._id;
    },
    SET_ADMIN_REQUEST(state) {
      state.isLoading = true;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;

export default authSlice.reducer;
