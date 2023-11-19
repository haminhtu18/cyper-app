import { useEffect, useState } from "react";
import { productDetail } from "../../../data";
import { FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Button";
import truck from "../../assets/icon/delivery/delivery-truck-svgrepo-com (1) 1.svg";
import home from "../../assets/icon/delivery/shop-2-svgrepo-com 2.svg";
import verify from "../../assets/icon/delivery/verify.svg";
import Detail from "./Detail";

const ProductDetail = () => {
  const [Img, setImg] = useState(0);
  const [sizeMemory, setSizeMemory] = useState(0);

  useEffect(() => {
    console.log(sizeMemory);
  }, [sizeMemory]);

  return (
    <section className="flexCenter w-full bg-[#FAFAFA]">
      <div className="max-container w-full px-40">
        {/* Main info */}
        <div className="w-full flex-col justify-between px-10 flex lg:flex-row py-28 bg-[#FFF]">
          <div className="w-full flex gap-10 items-center">
            <div className="flex flex-col gap-4">
              {productDetail.images.map((image, i) => (
                <img
                  src={image}
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
              src={productDetail.images[Img]}
              alt={productDetail.images[Img]}
              className="max-h-[400px] max-w-[400px]"
            />
          </div>
          <div className="w-full flex-col flex justify-center">
            <div className="pb-4">
              <h4 className="text-[40px] font-semibold pb-6">
                {productDetail.brand + " " + productDetail.name}
              </h4>
              <p className="text-3xl font-medium">${productDetail.price}</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-center">
                <p className="text-[15px] font-normal">Select color :</p>
                <div className="flex gap-2">
                  {productDetail.colors.map((color, i) => (
                    <Link
                      className={`w-8 h-8 ${color.fill} bg-slate-500 rounded-full`}
                      to="/test"
                      key={i}
                    ></Link>
                  ))}
                </div>
              </div>
              <div className="flex gap-4  w-full">
                {productDetail.sizes.map((size, i) => (
                  <Link
                    to={size.quantity === 0 ? null : "/test"}
                    key={i}
                    className={`w-full py-4 px-6 rounded-lg border-2 ${
                      sizeMemory === i ? "border-[#000]" : "border-[#D5D5D5]"
                    } text-center ${
                      size.quantity === 0 ? "cursor-default" : null
                    }`}
                    onClick={() => setSizeMemory(i)}
                  >
                    <p
                      className={`text-sm font-medium${
                        size.quantity === 0
                          ? "text-[#D5D5D5] cursor-default"
                          : null
                      }
                      ${sizeMemory === i ? "text-[#000]" : "text-[#6F6F6F]"}`}
                    >
                      {size.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex w-full gap-4 flex-wrap">
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 py-4 px-4 bg-[#F4F4F4] rounded-[7px]">
                  <FaMobileScreenButton className="text-[24px]" />
                  <div className="text-[16px] text-start">
                    <h5 className="text-[#A7A7A7] font-normal">Screen size </h5>
                    <p className="text-[#4E4E4E] font-medium">
                      {productDetail.screen.screen_diagonal}&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full text-[#6C6C6C] font-normal text-[14px]">
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras more...
              </div>
            </div>
            <div className="flex-col py-8 gap-4 justify-between lg:w-full flex lg:flex-row">
              <Button
                type="button"
                title="Add to Wishlist"
                variant="btn_black_text"
              />
              <Button type="button" title="Add to Card" variant="btn_black" />
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
      </div>
    </section>
  );
};

export default ProductDetail;
