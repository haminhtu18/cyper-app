import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { CgMenu } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <nav className="flexCenter w-full h-[64px]">
      <div className="max-container flexBetween w-full h-full padding-container">
        <Link to="/">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="78px"
            height="78px"
            fill="none"
          >
            <path
              fill="currentColor"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
            ></path>
          </svg>
        </Link>
        <ul className="md:flex hidden items-center gap-8">
          <NavLinks />
        </ul>
        <div className="flex items-center gap-1 justify-center">
          <Link to="/cart">
            <div className="  p-2 rounded-full hover:bg-gray-10  text-[24px]">
              <IoBagOutline width={24} height={24} />
            </div>
          </Link>
          <Link to="/login">
            <div className="  p-2 rounded-full hover:bg-gray-10  text-[24px]">
              <FiUser width={24} height={24} />
            </div>
          </Link>
          <div
            className="text-[24px] p-2 md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <CgMenu />
          </div>
        </div>

        {/* Mobile Navbar */}

        <div
          className={`md:hidden pt-[40px] bg-white pl-[36px] pr-[30px] pb-[150px] w-[300px] absolute top-0 duration-500 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <div className="w-full h-full bg-transparent relative">
            <div
              className="absolute text-3xl top-[-24px] right-0 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <ion-icon name="close"></ion-icon>
            </div>
            <ul
              className={`md:hidden bg-white w-full h-full pb-24 flex flex-col gap-5 justify-center`}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
