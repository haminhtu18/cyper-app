import React, { useEffect, useState } from "react";
import { productData } from "../../../data";
import ProductItem from "./ProductItem";

const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState(null);
  console.log(data);
  useEffect(() => {
    const d =
      productData &&
      productData.filter((product) => product.category === data.category);
    console.log(d);
    setProducts(d);
  }, [data.category]);

  return (
    <div className="w-full pb-10">
      {products ? (
        <div className="">
          <h2 className="font-semibold text-2xl pb-5 pl-2">Related Product</h2>
          <div className="flex gap-2">
            {products.map((product, i) => (
              <ProductItem {...product} key={i} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
