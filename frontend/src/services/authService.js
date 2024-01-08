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
};
