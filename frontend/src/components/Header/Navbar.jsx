import { Link } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { AiOutlineCamera } from "react-icons/ai";
import { RiHeadphoneLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flexCenter w-full h-[64px] ">
      <div className="max-container flexCenter bg-[#2E2E2E] w-full h-full">
        <div className="py-2 px-40 flex items-center justify-between text-white opacity-50 w-full h-full">
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <IoPhonePortraitOutline />
            </div>
            <span className="medium-16">Phones</span>
          </Link>
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <HiOutlineComputerDesktop />
            </div>
            <span className="medium-16">Computers</span>
          </Link>
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <LuGamepad />
            </div>
            <span className="medium-16">Smart Watches</span>
          </Link>
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <AiOutlineCamera />
            </div>
            <span className="medium-16">Cameras</span>
          </Link>
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <RiHeadphoneLine />
            </div>
            <span className="medium-16">Headphones</span>
          </Link>
          <Link to="/" className="flex gap-2 items-center">
            <div className="text-[20px]">
              <LuGamepad />
            </div>
            <span className="medium-16">Gaming</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
