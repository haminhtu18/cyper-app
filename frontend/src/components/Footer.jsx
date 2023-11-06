import logo from "../assets/logo/LogoVector(white).svg";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/index.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flexCenter w-full">
      <div className="max-container flexCenter bg-black w-full">
        <div className="py-[104px] px-40 w-full flex flex-col gap-6">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-6 w-[384px]">
              <img src={logo} alt="logo" width={96} height={28} />
              <p className="medium-14 text-[#CFCFCF]">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="flex w-full justify-around">
              {FOOTER_LINKS.map((ft, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-white text-[16px] font-semibold">
                    {ft.title}
                  </h3>
                  <ul className="text-[#CFCFCF] flex flex-col gap-1">
                    {ft.subtitle.map((sub, index) => (
                      <li className="" key={index}>
                        <Link to={sub.link} className="text-[14px] font-light">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <Link key={index}>
                <img src={link} alt="link" width={16} height={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
