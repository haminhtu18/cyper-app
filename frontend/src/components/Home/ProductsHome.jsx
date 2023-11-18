import { useState } from "react";
import { Products } from "../../../data/index.js";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../Button";
import ProductItem from "../Products/ProductItem.jsx";

const ProductsHome = () => {
  return (
    <section className="flexCenter w-full">
      <div className="max-container flexCenter w-full">
        <div className="px-40 py-14 w-full h-full flex flex-col gap-8">
          <div className="flex items-center justify-start gap-8">
            <span className="text-[#000] medium-18 border-b-2 border-black cursor-pointer">
              New Arrival
            </span>
            <span className="cursor-pointer text-[#8B8B8B] medium-18">
              Bestseller
            </span>
            <span className="text-[#8B8B8B] cursor-pointer medium-18">
              Featured Products
            </span>
          </div>
          <ul className="w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
            {Products.map((product, index) => (
              <ProductItem {...product} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
