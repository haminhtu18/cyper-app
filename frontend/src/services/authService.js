import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = "http://localhost:5000";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User registered successfully");
    }
    return response.data;
  } catch (err) {
    const message =
      (err.response && err.response.data & err.response.data.message) ||
      err.message ||
      err.toString();
    toast.error(message);
  }
};

export { registerUser };
