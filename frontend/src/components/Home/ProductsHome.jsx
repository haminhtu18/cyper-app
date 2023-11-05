import { useState } from "react";
import { Products } from "../../../data/index.js";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../Button";

const ProductsHome = () => {
  const [heartOpen, setHeartOpen] = useState(false);

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
              <li
                key={index}
                className="min-w-[200px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center py-6 px-4 gap-4"
              >
                <div className="w-full flex justify-end">
                  {heartOpen ? (
                    <img
                      src={heartRed}
                      alt="heartRed"
                      width={32}
                      height={32}
                      onClick={() => setHeartOpen(false)}
                    />
                  ) : (
                    <img
                      src={heart}
                      alt="heart"
                      width={32}
                      height={32}
                      onClick={() => setHeartOpen(true)}
                    />
                  )}
                </div>
                <div>
                  <img
                    src={product.imgUrl}
                    alt="imgURL"
                    width={160}
                    height={160}
                  />
                </div>
                <div className="flexCenter flex-col gap-6">
                  <div className="flexCenter flex-col text-center gap-4">
                    <h3 className="medium-16  h-12">{product.name}</h3>
                    <span className="text-[24px] font-[600] leading-6">
                      {product.price}
                    </span>
                  </div>
                  <div>
                    <Button title="Buy Now" variant="btn_black" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsHome;
