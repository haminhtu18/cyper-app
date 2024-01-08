import { AiOutlineCreditCard, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL, getLoginStatus } from "../../services/authService";
import { toast } from "react-toastify";
import { SET_LOGIN } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const ProfileSidebar = ({ active, setActive, userName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(userName);

  const handleLogOutUser = () => {
    axios
      .get(`${BACKEND_URL}/api/users/logout`)
      .then((response) => {
        navigate("/login");
        window.location.reload(true);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : null} />
        <span
          className={`pl-2 ${
            active === 1 ? "text-[red]" : null
          } text-[16px] hidden lg:block`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(2)}
      >
        {userName === "admin" ? (
          <>
            <HiOutlineShoppingBag
              size={30}
              color={active === 2 ? "red" : null}
            />
            <span
              className={`pl-2 ${
                active === 2 ? "text-[red]" : null
              } text-[20px] hidden lg:block`}
            >
              Shop Products
            </span>
          </>
        ) : (
          <>
            <HiOutlineShoppingBag
              size={20}
              color={active === 2 ? "red" : null}
            />
            <span
              className={`pl-2 ${
                active === 2 ? "text-[red]" : null
              } text-[16px] hidden lg:block`}
            >
              Orders
            </span>
          </>
        )}
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(3)}
      >
        {userName === "admin" ? (
          <>
            <HiOutlineReceiptRefund
              size={30}
              color={active === 3 ? "red" : null}
            />
            <span
              className={`pl-2 ${
                active === 3 ? "text-[red]" : null
              } text-[20px] hidden lg:block`}
            >
              Running Events
            </span>
          </>
        ) : (
          <>
            <HiOutlineReceiptRefund
              size={20}
              color={active === 3 ? "red" : null}
            />
            <span
              className={`pl-2 ${
                active === 3 ? "text-[red]" : null
              } text-[16px] hidden lg:block`}
            >
              Refunds
            </span>
          </>
        )}
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(4)}
      >
        <MdOutlineTrackChanges size={20} color={active === 4 ? "red" : null} />
        <span
          className={`pl-2 ${
            active === 4 ? "text-[red]" : null
          } text-[16px] hidden lg:block`}
        >
          Trask Order
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(5)}
      >
        <AiOutlineCreditCard size={20} color={active === 5 ? "red" : null} />
        <span
          className={`pl-2 ${
            active === 5 ? "text-[red]" : null
          } text-[16px] hidden lg:block`}
        >
          Payment Methods
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => setActive(6)}
      >
        <TbAddressBook size={20} color={active === 6 ? "red" : null} />
        <span
          className={`pl-2 ${
            active === 6 ? "text-[red]" : null
          } text-[16px] hidden lg:block`}
        >
          Address
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8 justify-center lg:justify-start"
        onClick={() => handleLogOutUser()}
      >
        <AiOutlineLogout size={20} color={active === 7 ? "red" : null} />
        <span
          className={`pl-2 ${
            active === 7 ? "text-[red]" : null
          } text-[16px] hidden lg:block`}
        >
          Log Out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
