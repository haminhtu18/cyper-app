import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  const [Sort, setSort] = useState(null);
  console.log(products);
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flexBetween w-full">
        <p className="medium-16">
          Selected Products: <b>{products.length}</b>
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
        {products?.map((product) => (
          <ProductItem {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
