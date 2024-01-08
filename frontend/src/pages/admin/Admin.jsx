import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import AdminDashboard from "../../components/Admin/AdminDashboard";
import AdminAllOrders from "../../components/Admin/AdminAllOrders";
import AdminAllProducts from "../../components/Admin/AdminAllProducts";
import AdminCreateProduct from "../../components/Admin/AdminCreateProduct";
import AdminSettings from "../../components/Admin/AdminSettings";
import AdminHeader from "../../components/Admin/Layout/AdminHeader";
import AdminNavbar from "../../components/Admin/Layout/AdminNavbar";
import AdminEditProduct from "../../components/Admin/AdminEditProduct";
import AdminAllEvents from "../../components/Admin/AdminAllEvents";
import AdminCreateEvent from "../../components/Admin/AdminCreateEvent";
import AdminEditEvent from "../../components/Admin/AdminEditEvent";
import AdminAllCoupons from "../../components/Admin/Coupons/AdminAllCoupons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let cc = useParams();
  console.log(cc);
  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <AdminHeader />
      <div className="bg-[#FAFAFA] flex items-start">
        <div className="h-screen w-[80px] lg:w-1/5 bg-[#ffffff] z-20 overflow-y-auto sticky top-0 left-0">
          <AdminNavbar />
        </div>
        <div className="lg:w-4/5 w-full h-full">
          <div className="w-full max-h-screen pt-2">
            <Routes>
              {/* Admin Dashboard */}

              <Route path="dashboard" element={<AdminDashboard />} />

              {/* Admin All Orders */}

              <Route path="all-orders" element={<AdminAllOrders />} />

              {/* Admin All Products */}

              <Route path="all-products" element={<AdminAllProducts />} />

              {/* Admin Create Product */}

              <Route path="create-product" element={<AdminCreateProduct />} />

              {/* Admin Edit Product */}

              <Route path="edit-product/:id" element={<AdminEditProduct />} />

              {/* Admin All Events */}
              <Route path="all-events" element={<AdminAllEvents />} />

              {/* Admin Create Event */}
              <Route path="create-event" element={<AdminCreateEvent />} />

              {/* Admin Edit Event */}
              <Route path="edit-event/:id" element={<AdminEditEvent />} />

              {/* Admin All Coupons */}
              <Route path="all-coupons" element={<AdminAllCoupons />} />

              {/* Admin Settings */}
              <Route path="settings" element={<AdminSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
