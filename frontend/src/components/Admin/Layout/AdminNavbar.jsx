import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import {
  AiOutlineFolderAdd,
  AiOutlineGift,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";

const AdminNavbar = () => {
  return (
    <nav className="w-full pt-10">
      <ul className="w-full px-4 lg:px-5">
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/dashboard"
            className={`flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50`}
          >
            <RxDashboard size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block `}>
              Dashboard
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/all-orders"
            className={`flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50`}
          >
            <FiShoppingBag size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block $`}>
              All Orders
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/all-products"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <FiPackage size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              All Products
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/create-product"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <AiOutlineFolderAdd size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              Create Product
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/all-events"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <MdOutlineLocalOffer size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              All Events
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/create-event"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <VscNewFile size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              Create Event
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/withdraw-money"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <AiOutlineMoneyCollect size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              Withdraw Money
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/all-coupons"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <AiOutlineGift size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              Coupon Codes
            </span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/refunds"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <HiOutlineReceiptRefund size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>Refunds</span>
          </NavLink>
        </li>
        <li className="w-full flex items-center p-2">
          <NavLink
            to="/admin/settings"
            className="flex items-center cursor-pointer w-full justify-center lg:justify-start opacity-50"
          >
            <IoSettingsOutline size={30} />
            <span className={`pl-2  text-[16px] hidden lg:block`}>
              Settings
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
