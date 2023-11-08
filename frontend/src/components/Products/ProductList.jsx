import { useState } from "react";
import { Products } from "../../../data";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [Sort, setSort] = useState(null);
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flexBetween w-full">
        <p className="medium-16">
          Selected Products: <b>85</b>
        </p>

        <div className="py-2 px-4 flex justify-between border-[0.5px] border-solid border-[#D4D4D4] min-w-[140px] max-w-[256px] rounded-lg">
          <div className="w-full">
            <label className="pr-4">By rating</label>
            <select value={Sort} onChange={(e) => setSort(e.target.value)}>
              <option value="latest">Latest</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
        {Products.map((product, index) => (
          <div key={index}>
            <ProductItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
