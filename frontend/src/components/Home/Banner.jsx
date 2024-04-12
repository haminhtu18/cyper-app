import huawei from "../../assets/image/huaweiphone.png";
import applewatch from "../../assets/image/image 12.png";
import ipadpro from "../../assets/image/image 64.png";
import galaxyphone from "../../assets/image/image 41.png";
import macbookpro from "../../assets/image/Macbook 1.png";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flexCenter w-full max-h-[640px]">
      <div className="max-container w-full h-full flex">
        <div className="w-1/4 h-full relative overflow-hidden">
          <img
            src={huawei}
            alt="huawei"
            width={240}
            height={263.052}
            className="rotate-[30deg] absolute left-[12px] top-[1px]"
          />
          <img
            src={applewatch}
            alt="applewatch"
            width={240.937}
            height={243.855}
            className="absolute right-[-1px] top-[14px]"
          />
          <div className="flex flex-col gap-4 pt-[376px] px-8 pb-[56px]">
            <h3 className="font-[300] leading-[48px] text-[33px]">
              Popular Products
            </h3>
            <p className="font-[500] leading-[24px] text-[14px] text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <Link to="/products">
              <Button title="Shop Now" variant="btn_black_text" />
            </Link>
          </div>
        </div>
        <div className="w-1/4 h-full relative overflow-hidden bg-[#F9F9F9]">
          <img
            src={ipadpro}
            alt="ipadpro"
            width={330}
            height={263.855}
            className="absolute right-0 top-0"
          />
          <div className="flex flex-col gap-4 pt-[376px] px-8 pb-[56px]">
            <h3 className="font-[300] leading-[48px] text-[33px]">Ipad Pro</h3>
            <p className="font-[500] leading-[24px] text-[14px] text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div>
              <Button title="Shop Now" variant="btn_black_text" />
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full relative overflow-hidden bg-[#EAEAEA]">
          <img
            src={galaxyphone}
            alt="galaxyphone"
            width={560}
            height={260}
            className="absolute right-40px] top-[0px]"
          />
          <div className="flex flex-col gap-4 pt-[376px] px-8 pb-[56px]">
            <h3 className="font-[300] leading-[48px] text-[33px]">
              Samsung Galaxy
            </h3>
            <p className="font-[500] leading-[24px] text-[14px] text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div>
              <Button title="Shop Now" variant="btn_black_text" />
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full relative overflow-hidden bg-[#2C2C2C]">
          <img
            src={macbookpro}
            alt="macbookpro"
            width={260}
            height={390}
            className="absolute right-0 top-2"
          />
          <div className="flex flex-col gap-4 pt-[376px] px-8 pb-[56px]">
            <h3 className="font-[300] leading-[48px] text-[33px] text-white">
              Macbook Pro
            </h3>
            <p className="font-[500] leading-[24px] text-[14px] text-[#909090]">
              iPad combines a magnificent 10.2-inch Retina display, incredible
              performance, multitasking and ease of use.
            </p>
            <div>
              <Button title="Shop Now" variant="btn_white_text" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
