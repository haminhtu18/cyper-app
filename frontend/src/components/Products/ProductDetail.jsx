import { useEffect, useState } from "react";
import { productData, productDetail } from "../../../data";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Button from "../UI/Button";
import truck from "../../assets/icon/delivery/delivery-truck-svgrepo-com (1) 1.svg";
import home from "../../assets/icon/delivery/shop-2-svgrepo-com 2.svg";
import verify from "../../assets/icon/delivery/verify.svg";
import Detail from "./Detail";
import HeaderTop from "../Header/HeaderTop";
import Footer from "../UI/Footer";
import Navbar from "../Header/Navbar";
import SuggestedProduct from "./SuggestedProduct";
import { useDispatch, useSelector } from "react-redux";
import { ADDTOCART, selectCart } from "../../redux/features/cartSlice";
import { getProduct, selectProduct } from "../../redux/features/productSlice";
import Breadcrumbs from "./Breadcrumbs";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  console.log(product);
  const { id } = useParams();
  const [Img, setImg] = useState(0);

  const cart = useSelector(selectCart);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const handleAddToCart = (id) => {
    const isItemExists = cart && cart.find((item) => item._id === id);
    if (isItemExists) {
      toast.error("Item already exists");
    } else {
      if (product.stock === 0) {
        toast.error("Product stock limited");
      } else {
        const cartData = { ...product, sty: 1 };
        dispatch(ADDTOCART(cartData));
        toast.success("Item added to cart successfully");
      }
    }
  };

  return (
    <>
      <HeaderTop />
      <Navbar />
      <Breadcrumbs category={product?.category} name={product?.name} />
      {product ? (
        <section className="flexCenter w-full bg-[#FAFAFA]">
          <div className="max-container w-full px-40">
            {/* Main info */}
            <div className="w-full flex-col justify-between px-10 flex lg:flex-row py-10 bg-[#FFF]">
              <div className="w-full flex gap-10 items-start pt-10">
                <div className="flex flex-col gap-4">
                  {product.images?.map((image, i) => (
                    <img
                      src={image.url}
                      alt={image}
                      key={i}
                      height={80}
                      width={74}
                      onClick={() => setImg(i)}
                      className={`${
                        Img === i ? null : "opacity-40"
                      } cursor-pointer`}
                    />
                  ))}
                </div>
                <img
                  src={product.images[Img].url}
                  alt={product.images[Img]}
                  className="max-h-[400px] max-w-[400px]"
                />
              </div>
              <div className="w-full flex-col flex justify-center">
                <div className="pb-4">
                  <h4 className="text-[40px] font-semibold pb-3">
                    {product.name}
                  </h4>
                  <p className="text-3xl font-medium">
                    ${product.currentPrice}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full text-[#6C6C6C] font-normal text-[14px]">
                    {product.desc}
                  </div>
                </div>
                <div className="flex-col py-8 gap-4 justify-between lg:w-full flex lg:flex-row">
                  <div className="w-full h-full flex items-center justify-center">
                    <Button
                      type="button"
                      title="Add to Wishlist"
                      variant="btn_black_text"
                    />
                  </div>
                  <div
                    onClick={() => handleAddToCart(product._id)}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Button
                      type="button"
                      title="Add to Card"
                      variant="btn_black"
                    />
                  </div>
                </div>
                <div className="flex gap-8 justify-between w-4/5">
                  <div className="flex gap-4">
                    <img src={truck} alt="truck" />
                    <div className="text-[14px] font-medium">
                      <h4 className="text-[#717171]">Free Delivery</h4>
                      <p className="text-[#000]">1-2 day</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src={home} alt="home" />
                    <div className="text-[14px] font-medium">
                      <h4 className="text-[#717171]">In Stock</h4>
                      <p className="text-[#000]">Today</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <img src={verify} alt="verify" />
                    <div className="text-[14px] font-medium">
                      <h4 className="text-[#717171]">Guaranteed</h4>
                      <p className="text-[#000]">1 year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Details */}
            <Detail />
            <SuggestedProduct data={product} />
          </div>
        </section>
      ) : null}
      <Footer />
    </>
  );
};

export default ProductDetail;
