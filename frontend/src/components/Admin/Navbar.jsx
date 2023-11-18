import logo from "../../assets/logo/LogoVector(Black).svg";
import { NAVBAR_ADMIN_LINKS } from "../../../data";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-2/5 max-h-screen">
      <div className="text-[96px] px-4 py-5">
        <img src={logo} alt="logo" width={96} height={24} />
      </div>
      <div>
        <div>
          {NAVBAR_ADMIN_LINKS.map((link, index) => (
            <div key={index}>
              <span className="py-4 px-8 font-normal text-[#8B909A] text-[11px]">
                {link.title}
              </span>
              <ul className="px-[14px]">
                {link.subTitle.map((navlink, index) => (
                  <li key={index} className="w-2/3 px-4 py-[9px]">
                    <NavLink
                      to={navlink.navlink}
                      className="flex items-center text-[15px] font-normal justify-start text-[#8B909A]"
                    >
                      <div className="pr-2">
                        <img src={navlink.imgLink} alt={navlink.name} />
                      </div>
                      {navlink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
