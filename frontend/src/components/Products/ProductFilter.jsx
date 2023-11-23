import { useState } from "react";
import arrow_down from "../../assets/icon/arrow_down.svg";
import arrow_up from "../../assets/icon/arrow_upsvg.svg";
import { FiSearch } from "react-icons/fi";
import { Products } from "../../../data";

const ProductFilter = () => {
  const [priceActive, setPriceActive] = useState(false);
  const [brandActive, setBrandActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBrand, setSearchBrand] = useState([]);

  const allBrands = [...new Set(Products.map((product) => product.brand))];
  console.log(allBrands);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    console.log(term);
  };
  return (
    <div className="w-full">
      {/* Price */}
      <div>
        <div
          className="w-full pb-3 border-b-[0.5px] border-solid flex justify-between items-center"
          onClick={() => setPriceActive(!priceActive)}
        >
          <h4 className="medium-16">Price</h4>
          {priceActive ? (
            <img src={arrow_down} alt="arrow_down" />
          ) : (
            <img src={arrow_up} alt="arrow_up" />
          )}
        </div>
        {priceActive ? (
          <>
            <div className="flex justify-between items-center w-full pt-6 pb-4 regular-14 text-[#A7A7A7]">
              <div>
                <p className=" pb-2">From</p>
                <div className="rounded-[3px] border-[0.5px] border-solid border-black py-2 pl-2 pr-12">
                  <p className="text-black">1299</p>
                </div>
              </div>
              <div>
                <p className="text-end pb-2">To</p>
                <div className="rounded-[3px] border-[0.5px] border-solid border-black py-2 pl-12 pr-2">
                  <p className="text-black">1299</p>
                </div>
              </div>
            </div>
            <input type="range" className="w-full bg-black" />
          </>
        ) : null}
      </div>
      {/* Brand */}
      <div className="pt-6">
        <div
          className="w-full pb-3 border-b-[0.5px] border-solid flex justify-between items-center"
          onClick={() => setBrandActive(!brandActive)}
        >
          <h4 className="medium-16">Brand</h4>
          {brandActive ? (
            <img src={arrow_down} alt="arrow_down" />
          ) : (
            <img src={arrow_up} alt="arrow_up" />
          )}
        </div>
        {brandActive ? (
          <div className="pt-6 max-h-[336px] overflow-auto">
            <div className="flex ml-2 relative items-center w-[90%] text-gray-400 focus-within:text-gray-600">
              <div className="absolute top-3 left-4 z-20 text-[20px]">
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
                className="py-3 pr-4 pl-12 w-full border-none focus:ring-gray-300 medium-14 bg-[#F5F5F5] rounded-lg"
              />
            </div>

            {allBrands && allBrands.length !== 0 ? (
              <div
                className={`min-h-[30vh] max-h-full flex-col gap-2 items-center justify-center overflow-hidden shadow-sm z-20 p-4 top-0 rounded-2xl`}
              >
                {allBrands &&
                  allBrands.map((i, index) => {
                    return (
                      <>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            key={index}
                            placeholder={i}
                            className="w-[24px]"
                          />
                          <span className="regular-15">{i}</span>
                        </div>
                      </>
                    );
                  })}
              </div>
            ) : (
              allBrands.map((brand, index) => (
                <button type="checkbox" key={index}>
                  <div className="w-full flex items-start py-3">
                    <h1>{brand}</h1>
                  </div>
                </button>
              ))
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductFilter;
