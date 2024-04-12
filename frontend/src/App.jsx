import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import Admin from "./pages/admin/Admin.jsx";
import ProductDetail from "./components/Products/ProductDetail.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_LOGIN,
  SET_USER,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/authSlice.js";
import Checkout from "./pages/checkout/Checkout.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { getLoginStatus, getProfileUser } from "./services/authService.js";
import UserProtectedRoute from "./utils/UserProtectedRoute.jsx";
import AdminProtectdRoute from "./utils/AdminProtectdRoute.jsx";
import { getProducts } from "./redux/features/productSlice.js";
axios.defaults.withCredentials = true;
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const name = user.name;
  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    async function getUser() {
      const profileUser = await getProfileUser();
      dispatch(SET_USER(profileUser));
    }
    getUser();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/profile"
          element={
            <UserProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </UserProtectedRoute>
          }
        />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
