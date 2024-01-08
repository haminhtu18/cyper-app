import { useState } from "react";
import { DiscountProductss } from "../../../data/index.js";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../UI/Button.jsx";
import ProductItem from "../Products/ProductItem.jsx";

const DiscountProducts = () => {
  return (
    <section className="flexCenter w-full">
      <div className="max-container flexCenter w-full">
        <div className="px-40 py-14 w-full h-full flex flex-col gap-8">
          <div className="flex items-center justify-start gap-8">
            <span className="text-[#000] medium-24">Discounts up to -50%</span>
          </div>
          <ul className="w-full h-full grid grid-cols-4 gap-4">
            {DiscountProductss.map((product, index) => (
              <ProductItem {...product} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
