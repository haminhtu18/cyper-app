import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar";
import Dashboard from "../../components/Admin/Dashboard";
const Admin = () => {
  return (
    <div className="max-container max-h-screen bg-[#FAFAFA]">
      <div className="h-screen w-full bg-[#ffffff] z-20">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
