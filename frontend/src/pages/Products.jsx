import React from "react";
import Breadcrumbs from "../components/Products/Breadcrumbs";
import ProductList from "../components/Products/ProductList";
import ProductFilter from "../components/Products/ProductFilter";

const Products = () => {
  return (
    <>
      <Breadcrumbs />
      <section className="max-container w-full">
        <div className="flex gap-8 px-40 pt-6 pb-24">
          <aside className="w-1/5">
            <ProductFilter />
          </aside>
          <div className="w-4/5">
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
