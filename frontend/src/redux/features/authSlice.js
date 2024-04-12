import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteUserAddress,
  updateUserAddress,
} from "../../services/authService";
import { toast } from "react-toastify";

// const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
  isLoggedIn: false,
  isLoading: true,
  isError: false,
  name: name ? name : "",
  address: {},
  user: {
    email: "",
    name: "",
    phone: "",
    photo: {} || "",
    role: "",
    _id: "",
    addresses: [],
  },
};
// export const addUserAddressSlide = createAsyncThunk(
//   "user/addUserAddress",
//   async (formData, thunkAPI) => {
//     try {
//       return await addUserAddress(formData);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       console.log(message);
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const updateUserAddressSlide = createAsyncThunk(
  "user/updateUserAddress",
  async (formData, thunkAPI) => {
    try {
      return await updateUserAddress(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteUserAddressSlide = createAsyncThunk(
  "user/updateUserAddress",
  async (id, thunkAPI) => {
    try {
      return await deleteUserAddress(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
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
      state.user.addresses = action.payload.addresses;
    },
    SET_ADMIN_REQUEST(state) {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(addUserAddressSlide.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(addUserAddressSlide.fulfilled, (state, action) => {
      //   state.isSuccess = true;
      //   state.isError = false;
      //   toast.success("User Address added successfully");
      // })
      // .addCase(addUserAddressSlide.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.message = action.payload;
      //   toast.error(action.payload);
      // })
      .addCase(updateUserAddressSlide.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserAddressSlide.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        toast.success("User Address updated successfully");
        console.log(action.payload);
        state.address = action.payload;
      })
      .addCase(updateUserAddressSlide.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;

export default authSlice.reducer;
