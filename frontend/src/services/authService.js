import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = "http://localhost:5000";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// registerUser
const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data & err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// registerUser
const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData,
      { withCredentials: true }
    );

    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data & err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

// get Login Status
const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data & err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

//add User Address
const addProfileUser = async (formData) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/add-user-address`,
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// update Profile User
const updateProfileUser = async (formData) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/api/users/updateuser`,
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// update User Address
const updateUserAddress = async (formData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/update-user-address`,
      formData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// delete User Address
const deleteUserAddress = async (id) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/delete-user-address/:${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//get Profile User
const getProfileUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/getuser`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

//LogOut User
const getLogOutUser = () => {
  try {
    const res = axios.get(`${BACKEND_URL}/api/users/logout`);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export {
  registerUser,
  loginUser,
  getLoginStatus,
  getProfileUser,
  getLogOutUser,
  updateProfileUser,
  updateUserAddress,
  deleteUserAddress,
  addProfileUser,
};
