import Breadcrumbs from "../../components/Products/Breadcrumbs";
import ProductList from "../../components/Products/ProductList";
import ProductFilter from "../../components/Products/ProductFilter";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productData } from "../../../data";
import HeaderTop from "../../components/Header/HeaderTop";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Header/Navbar";
import { getProducts, selectProducts } from "../../redux/features/productSlice";

const Products = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  console.log("categories", categoryData);

  function convertToLowerCaseWithoutSpace(str) {
    // Chuyển đổi chuỗi thành chữ thường và loại bỏ dấu cách
    return str.toLowerCase().replace(/\s/g, "");
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (categoryData === null) {
      const d = products;
      setData(d);
      console.log(data);
    } else {
      const d = products.filter(
        (i) => convertToLowerCaseWithoutSpace(i.category) === categoryData
      );
      setData(d);
      console.log(data);
    }
  }, [categoryData]);

  return (
    <>
      <HeaderTop />
      <Navbar />
      <Breadcrumbs category={categoryData} />
      <section className="max-container w-full">
        <div className="flex gap-8 px-40 pt-6 pb-24">
          <aside className="w-1/5">
            <ProductFilter />
          </aside>
          <div className="w-4/5">
            <ProductList products={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
