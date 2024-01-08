import axios from "axios";

export const BACKEND_URL = "http://localhost:5000";
const API_URL = `${BACKEND_URL}/api/products`;

// create a new Product
const createProduct = async (formData) => {
  const response = await axios.post(`${API_URL}/create-product`, formData, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

//get All products
const getProducts = async () => {
  const response = await axios.get(`${API_URL}/all-products`);
  return response.data;
};

// get single product
const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/product/${id}`);
  return response.data;
};

// delete a product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/delete-product/${id}`);
  return response.data;
};

// update a product
const updateProduct = async (id, formData) => {
  console.log(id);
  console.log(formData);
  const response = await axios.patch(
    `${API_URL}/update-product/${id}`,
    formData
  );
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};

export default productService;
