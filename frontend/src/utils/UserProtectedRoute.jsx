import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserProtectedRoute;
