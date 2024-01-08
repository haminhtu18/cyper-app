import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/authSlice";
import { Navigate } from "react-router-dom";

const AdminProtectdRoute = ({ children, name, isLoggedIn }) => {
  console.log(name);
  if (name === "admin") {
    return children;
  } else return null;
};

export default AdminProtectdRoute;
