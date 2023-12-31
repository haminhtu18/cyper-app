import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { headertopLinks, productData } from "../../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import WishList from "../WishList/WishList";
import { useSelector } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { selectIsLoggedIn, selectUser } from "../../redux/features/authSlice";
import MobileHeaderSiteBar from "./MobileHeaderSiteBar";

const HeaderTop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const user = useSelector(selectUser);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });

    setSearchData(filteredProducts);
  };

  const handleSearchCompleted = () => {
    setSearchTerm("");
    setSearchData(null);
  };

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 70) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // });

  return (
    <>
      <header
        className={`hidden lg:fixed z-20 top-0 shadow-md lg:flexCenter bg-white max-h-[88px] w-full transition-all`}
      >
        <div className="max-container flexCenter h-full w-full">
          <div className="py-4 px-40 w-full h-full flex items-center justify-between gap-8">
            <div className="flexCenter">
              <Link to="/">
                <svg
                  width="96"
                  height="29"
                  viewBox="0 0 96 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Logo Vector">
                    <path
                      d="M5.42812 9.39935L8.91177 7.39026L6.96725 4.02409H25.2549L16.114 19.862L14.1695 16.49L10.6859 18.505L16.114 27.9044L32.2221 0H0L5.42812 9.39935Z"
                      fill="black"
                    />
                    <path
                      d="M44.736 21.488C43.68 22.76 42.072 23.408 40.152 23.408C36.36 23.408 34.056 20.96 34.056 17.408C34.056 13.88 36.384 11.432 40.152 11.432C41.976 11.432 43.728 12.128 44.784 13.4L42.888 15.392C42.12 14.552 41.28 14.216 40.152 14.216C38.544 14.216 37.152 15.512 37.152 17.408C37.152 19.472 38.448 20.624 40.152 20.624C41.16 20.624 42.312 20.24 42.936 19.448L44.736 21.488Z"
                      fill="black"
                    />
                    <path
                      d="M59.3568 11.72L52.3728 28.28H48.9408L51.1728 23.12L46.3488 11.72H49.7568L52.1568 17.816L52.8528 20L53.5248 17.816L55.9249 11.72H59.3568Z"
                      fill="black"
                    />
                    <path
                      d="M67.2028 14.264C65.4748 14.264 64.2268 15.584 64.2268 17.384C64.2268 19.16 65.4748 20.48 67.2028 20.48C68.8828 20.48 70.0348 19.232 70.0348 17.384C70.0348 15.512 68.8828 14.264 67.2028 14.264ZM61.2268 23V5.408H64.2748V11.672L64.2268 12.488C64.7308 11.816 66.2668 11.432 67.3228 11.432C71.0908 11.432 73.2028 14.192 73.2028 17.384C73.2028 20.984 71.0428 23.312 67.3228 23.312C66.4108 23.312 64.9468 22.88 64.3468 22.16L64.3708 22.808V23H61.2268Z"
                      fill="black"
                    />
                    <path
                      d="M85.8911 21.56C85.0031 22.712 82.9631 23.408 81.2111 23.408C77.3951 23.408 75.2591 20.792 75.2591 17.408C75.2591 13.952 77.3711 11.432 81.0911 11.432C84.7871 11.432 86.8991 13.952 86.8991 17.408C86.8991 17.792 86.8991 18.032 86.8751 18.368H78.3791C78.5471 19.784 79.6031 20.672 81.2111 20.672C82.3631 20.672 83.4431 20.288 84.1151 19.544L85.8911 21.56ZM78.4271 16.304H83.7071C83.5631 15.032 82.5071 14.168 81.0911 14.168C79.6751 14.168 78.5471 15.032 78.4271 16.304Z"
                      fill="black"
                    />
                    <path
                      d="M95.3049 14.552C94.6809 14.336 94.1289 14.264 93.4809 14.264C93.0489 14.264 92.6889 14.288 92.3529 14.432V23H89.2569V12.224C90.1929 11.744 91.8009 11.408 93.3609 11.408C94.0329 11.408 95.2329 11.48 95.9529 11.744L95.3049 14.552Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            {/* Search */}
            <div className="flex relative items-center w-[433px] text-gray-400 focus-within:text-gray-600">
              <div className="absolute left-4 z-20 text-[24px]">
                <FiSearch />
              </div>
              <input
                type="text"
                name="Search"
                placeholder="Search"
                autoComplete="off"
                aria-label="Search"
                value={searchTerm}
                // onBlur={() => setBlur(false)}
                // onClick={() => setBlur(true)}
                onChange={handleSearchChange}
                className="py-4 pr-4 pl-12 w-full border-none focus:ring-gray-300 medium-16 bg-[#F5F5F5] rounded-lg "
              />

              {searchData && searchData.length !== 0 ? (
                <div
                  onBlur={() => setSearchData(null)}
                  className={`absolute min-h-[30vh] max-h-[50vh] overflow-auto bg-slate-50 shadow-sm z-20 p-4 top-14 rounded-2xl`}
                >
                  {searchData &&
                    searchData.map((i, index) => {
                      const d = i.name;
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link
                          to={`/product/${Product_name}`}
                          key={index}
                          onClick={() => handleSearchCompleted()}
                        >
                          <div className="w-full flex items-start py-3">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-10 h-10 mr-[10px]"
                            />
                            <h1>
                              {d.length > 40 ? d.slice(0, 40) + "..." : d}
                            </h1>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              ) : null}
            </div>
            {/* Header Top Links */}
            <ul className="flex items-center gap-[52px] medium-16">
              {headertopLinks.map((htlink, index) => (
                <li key={index} className="opacity-30 hover:opacity-100">
                  <Link to={htlink.link}>{htlink.name}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <div
                className="text-[24px] hover:bg-slate-200 rounded-full p-2"
                onClick={() => setOpenWishList(true)}
              >
                <AiOutlineHeart className="cursor-pointer" />
              </div>
              <div
                className="text-[24px] hover:bg-slate-200 rounded-full p-2"
                onClick={() => setOpenCart(true)}
              >
                <BsCart3 className="cursor-pointer" />
              </div>
              <div className="text-[24px] flex items-center">
                {isLoggedIn ? (
                  <Link to="/profile">
                    <img
                      src={user?.photo.url}
                      alt="photo"
                      width={26}
                      className="object-cover rounded-full border border-pink-500 "
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <FiUser className="cursor-pointer" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Cart */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
        {/* WishList */}
        {openWishList ? <WishList setOpenWishList={setOpenWishList} /> : null}
        {/*  */}
      </header>
      {/* Mobile Header */}
      <header className="h-[50px] w-full bg-white fixed top-0 z-50 left-0 shadow-sm lg:hidden">
        <div className="py-4 px-4 w-full h-full flex items-center justify-between gap-8">
          <div className="flexCenter">
            <Link to="/">
              <svg
                width="96"
                height="29"
                viewBox="0 0 96 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Logo Vector">
                  <path
                    d="M5.42812 9.39935L8.91177 7.39026L6.96725 4.02409H25.2549L16.114 19.862L14.1695 16.49L10.6859 18.505L16.114 27.9044L32.2221 0H0L5.42812 9.39935Z"
                    fill="black"
                  />
                  <path
                    d="M44.736 21.488C43.68 22.76 42.072 23.408 40.152 23.408C36.36 23.408 34.056 20.96 34.056 17.408C34.056 13.88 36.384 11.432 40.152 11.432C41.976 11.432 43.728 12.128 44.784 13.4L42.888 15.392C42.12 14.552 41.28 14.216 40.152 14.216C38.544 14.216 37.152 15.512 37.152 17.408C37.152 19.472 38.448 20.624 40.152 20.624C41.16 20.624 42.312 20.24 42.936 19.448L44.736 21.488Z"
                    fill="black"
                  />
                  <path
                    d="M59.3568 11.72L52.3728 28.28H48.9408L51.1728 23.12L46.3488 11.72H49.7568L52.1568 17.816L52.8528 20L53.5248 17.816L55.9249 11.72H59.3568Z"
                    fill="black"
                  />
                  <path
                    d="M67.2028 14.264C65.4748 14.264 64.2268 15.584 64.2268 17.384C64.2268 19.16 65.4748 20.48 67.2028 20.48C68.8828 20.48 70.0348 19.232 70.0348 17.384C70.0348 15.512 68.8828 14.264 67.2028 14.264ZM61.2268 23V5.408H64.2748V11.672L64.2268 12.488C64.7308 11.816 66.2668 11.432 67.3228 11.432C71.0908 11.432 73.2028 14.192 73.2028 17.384C73.2028 20.984 71.0428 23.312 67.3228 23.312C66.4108 23.312 64.9468 22.88 64.3468 22.16L64.3708 22.808V23H61.2268Z"
                    fill="black"
                  />
                  <path
                    d="M85.8911 21.56C85.0031 22.712 82.9631 23.408 81.2111 23.408C77.3951 23.408 75.2591 20.792 75.2591 17.408C75.2591 13.952 77.3711 11.432 81.0911 11.432C84.7871 11.432 86.8991 13.952 86.8991 17.408C86.8991 17.792 86.8991 18.032 86.8751 18.368H78.3791C78.5471 19.784 79.6031 20.672 81.2111 20.672C82.3631 20.672 83.4431 20.288 84.1151 19.544L85.8911 21.56ZM78.4271 16.304H83.7071C83.5631 15.032 82.5071 14.168 81.0911 14.168C79.6751 14.168 78.5471 15.032 78.4271 16.304Z"
                    fill="black"
                  />
                  <path
                    d="M95.3049 14.552C94.6809 14.336 94.1289 14.264 93.4809 14.264C93.0489 14.264 92.6889 14.288 92.3529 14.432V23H89.2569V12.224C90.1929 11.744 91.8009 11.408 93.3609 11.408C94.0329 11.408 95.2329 11.48 95.9529 11.744L95.3049 14.552Z"
                    fill="black"
                  />
                </g>
              </svg>
            </Link>
          </div>

          <div className="flex items-center">
            <MdOutlineMenu
              size={32}
              className="cursor-pointer"
              onClick={() => setOpenMenuMobile(true)}
            />
          </div>
        </div>
        {/* Menu Mobile SiteBar */}
        {openMenuMobile ? (
          <MobileHeaderSiteBar
            setOpenMenuMobile={setOpenMenuMobile}
            setOpenWishList={setOpenWishList}
            setOpenCart={setOpenCart}
            isLoggedIn={isLoggedIn}
            user={user}
          />
        ) : null}
      </header>
    </>
  );
};

export default HeaderTop;
