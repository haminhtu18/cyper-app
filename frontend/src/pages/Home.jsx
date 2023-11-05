import Banner from "../components/Home/Banner";
import Banner2 from "../components/Home/Banner2";
import CategoryHome from "../components/Home/CategoryHome";
import DiscountProducts from "../components/Home/DiscountProducts";
import Hero from "../components/Home/Hero";
import ProductsHome from "../components/Home/ProductsHome";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryHome />
      <ProductsHome />
      <Banner />
      <DiscountProducts />
      <Banner2 />
    </>
  );
};

export default Home;
