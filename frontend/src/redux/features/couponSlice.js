import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "../../services/couponService";
import { toast } from "react-toastify";

const initialState = {
  coupons: [],
  coupon: null,
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const createCoupon = createAsyncThunk(
  "coupons/create-coupon",
  async (formData, thunkAPI) => {
    console.log(formData);
    try {
      return await couponService.createCoupon(formData);
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

export const getCoupon = createAsyncThunk(
  "coupons/get-coupon",
  async (id, thunkAPI) => {
    try {
      return await couponService.getCoupon(id);
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

export const getCoupons = createAsyncThunk(
  "coupons/all-coupons",
  async (_, thunkAPI) => {
    try {
      return await couponService.getCoupons();
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

export const deleteCoupon = createAsyncThunk(
  "coupons/delete-coupon",
  async (id, thunkAPI) => {
    try {
      return await couponService.deleteCoupon(id);
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

// export const updateEvent = createAsyncThunk(
//   "events/update-event",
//   async ({ id, formData }, thunkAPI) => {
//     console.log(formData);
//     try {
//       return await couponService.updateEvent(id, formData);
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

const couponSlide = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        toast.success("Event added successfully");
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.coupons = action.payload;
      })
      .addCase(getCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Coupon deleted successfully");
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        console.log(action.payload);
        state.coupon = action.payload;
      })
      .addCase(getCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
    //   .addCase(updateEvent.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateEvent.fulfilled, (state, action) => {
    //     state.isSuccess = true;
    //     state.isError = false;
    //     toast.success("Event updated successfully");
    //   })
    //   .addCase(updateEvent.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isError = true;
    //     state.message = action.payload;
    //     toast.error(action.payload);
    //   });
  },
});

export const selectIsLoading = (state) => state.coupon.isLoading;
export const selectCoupons = (state) => state.coupon.coupons;
export const selectCoupon = (state) => state.coupon.coupon;

export default couponSlide.reducer;
