import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import Admin from "./pages/admin/Admin.jsx";
import ProductDetail from "./components/Products/ProductDetail.jsx";
axios.defaults.withCredentials = true;
function App() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/getuser")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/test" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
