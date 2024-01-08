import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FiSearch, FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { headertopLinks, productData } from "../../../data";

const MobileHeaderSiteBar = ({
  setOpenMenuMobile,
  setOpenWishList,
  setOpenCart,
  isLoggedIn,
  user,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSearch, setDataSearch] = useState(null);

  const handleSearchInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });

    setDataSearch(filteredProducts);
  };
  const handleSearchCompleted = () => {
    setSearchTerm("");
    setDataSearch(null);
  };

  const handSearchDie = () => {
    setDataSearch(null);
  };
  return (
    <div
      className="fixed top-0 left-0 h-screen w-full bg-gray-10/[.3] z-20"
      onClick={() => handSearchDie()}
    >
      <div
        className="fixed top-0 right-0 min-h-full w-2/4  bg-white flex flex-col z-30 overflow-y-auto"
        onClick={() => handSearchDie()}
      >
        <div className="flex items-center w-full pt-5 px-5">
          <div className="flex w-full items-center">
            <RxCross1
              size={28}
              onClick={() => setOpenMenuMobile(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[28px]" onClick={() => setOpenWishList(true)}>
              <AiOutlineHeart className="cursor-pointer" />
            </div>
            <div className="text-[28px]" onClick={() => setOpenCart(true)}>
              <BsCart3 className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="my-8 w-[92%] m-auto h-10 relative regular-20">
          <input
            type="text"
            placeholder="Search Product..."
            className="h-[40px] w-full border-purple-200 border-2 rounded-md pl-2"
            value={searchTerm}
            onChange={(e) => handleSearchInputChange(e)}
          />
          {dataSearch && dataSearch.length !== 0 ? (
            <div
              onBlur={() => setDataSearch(null)}
              className={`absolute min-h-[30vh] max-h-[50vh] overflow-auto bg-white shadow-sm z-20 p-4 top-14 rounded-2xl`}
            >
              {dataSearch &&
                dataSearch.map((i, index) => {
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
                        <h1>{d.length > 40 ? d.slice(0, 40) + "..." : d}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
        <ul className="medium-20 px-5">
          {headertopLinks.map((htlink, index) => (
            <li key={index} className="opacity-30 hover:opacity-100 mt-2">
              <Link to={htlink.link}>{htlink.name}</Link>
            </li>
          ))}
        </ul>
        <div className="text-[24px] flex items-center w-full justify-start py-4 px-5">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link to="/profile" className="flex items-center gap-2">
                <img
                  src={user?.photo.url}
                  alt="photo"
                  width={28}
                  className="object-cover rounded-full border border-pink-500 "
                />
                <p className="medium-18">{user?.name}</p>
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 opacity-30 hover:opacity-100"
            >
              <FiUser width={30} className="cursor-pointer" />
              <span className="medium-18">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderSiteBar;
