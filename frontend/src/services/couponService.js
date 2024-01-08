import axios from "axios";

export const BACKEND_URL = "http://localhost:5000";
const API_URL = `${BACKEND_URL}/api/coupons`;

//Create a new Coupon
const createCoupon = async (formData) => {
  console.log(formData);
  const response = await axios.post(`${API_URL}/create-coupon`, formData);
  return response.data;
};

//Get All Coupons
const getCoupons = async () => {
  const response = await axios.get(`${API_URL}/all-coupons`);
  return response.data;
};

//get coupon
const getCoupon = async (id) => {
  const response = await axios.get(`${API_URL}/coupon/${id}`);
  return response.data;
};
//delete coupon
const deleteCoupon = async (id) => {
  const response = await axios.delete(`${API_URL}/delete-coupon/${id}`);
  return response.data;
};

const couponService = {
  createCoupon,
  getCoupons,
  getCoupon,
  deleteCoupon,
};

export default couponService;
