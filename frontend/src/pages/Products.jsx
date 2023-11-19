import Breadcrumbs from "../components/Products/Breadcrumbs";
import ProductList from "../components/Products/ProductList";
import ProductFilter from "../components/Products/ProductFilter";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../../data";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  console.log("categories", categoryData);
  useEffect(() => {
    if (categoryData === null) {
      const d = productData;
      setData(d);
    } else {
      const d = productData.filter((i) => i.category === categoryData);
      setData(d);
    }

    return () => {};
  }, []);

  return (
    <>
      <Breadcrumbs category={categoryData} />
      <section className="max-container w-full">
        <div className="flex gap-8 px-40 pt-6 pb-24">
          <aside className="w-1/5">
            <ProductFilter />
          </aside>
          <div className="w-4/5">
            <ProductList {...data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
