import IphoneImage from "../../assets/image/iphone14.png";
import Playstation5 from "../../assets/image/playstaytion.png";
import headphones from "../../assets/image/headphone.png";
import vision from "../../assets/image/vision.png";
import macbookpro14 from "../../assets/image/macbookpro.webp";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <section className="flexCenter w-full h-[632px]">
        <div className="max-container flexCenter h-full w-full bg-hero-bg">
          <div className="px-40 flex relative h-full items-start justify-between w-full overflow-y-hidden">
            <div className="w-3/5 h-full flex items-start flex-col justify-center gap-6">
              <h5 className="text-[25px] font-[600] text-white opacity-40">
                Pro.Beyond.
              </h5>
              <h1 className="text-[96px] text-white font-[200] leading-[80%]">
                IPhone 14 <strong className="font-[600]">Pro</strong>
              </h1>
              <p className="medium-18 text-[#909090]">
                Created to change everything for the better. For everyone
              </p>
              <Button type="button" title="Show Now" variant="btn_white_text" />
            </div>
            <img
              src={IphoneImage}
              alt="iphone14"
              width={406}
              height={998}
              className="absolute right-40 top-[72px]"
            />
          </div>
        </div>
      </section>
      <section className="flexCenter w-full h-[600px]">
        <div className="max-container flexStart h-full w-full">
          <div className="h-full w-[50%]">
            <div className="overflow-hidden relative bg-white h-[328px] flex items-center justify-between w-full">
              <img
                src={Playstation5}
                alt="playstation5"
                width={531}
                height={343}
                className="absolute left-[-153px] top-[-34px]"
              />
              <div className="pl-[334px] pr-[48px] flex flex-col gap-4">
                <h3 className="text-[49px] font-[500] leading-[80%] text-black">
                  Playstation 5
                </h3>
                <p className="medium-14 text-[#909090]">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>
            <div className="flex w-full h-2/4 max-h-[272px]">
              <div className="w-2/4 relative h-full flex items-center justify-between overflow-hidden bg-[#EDEDED]">
                <img
                  src={headphones}
                  alt="headphones"
                  width={245}
                  height={272}
                  className="absolute  left-[-141px] top-0"
                />

                <div className="pl-[156px] pr-[48px] flex flex-col gap-2">
                  <span className="font-[300] text-[29px] leading-10">
                    Apple <br /> AirPods{" "}
                    <strong className="font-[500]">Max</strong>{" "}
                  </span>
                  <span className="medium-14 text-[#909090] leading-6">
                    Computational audio. Listen, it's powerful
                  </span>
                </div>
              </div>
              <div className="w-2/4 relative h-full flex items-center justify-between overflow-hidden bg-[#353535]">
                <img
                  src={vision}
                  alt="vision"
                  width={312}
                  height={190}
                  className="absolute  left-[-176px] top-[41px] rotate-img"
                />

                <div className="pl-[156px] pr-[48px] flex flex-col gap-2">
                  <span className="font-[300] text-[29px] leading-10 text-white">
                    Apple <br /> Vision{" "}
                    <strong className="font-[500]">Pro</strong>{" "}
                  </span>
                  <span className="medium-14 text-[#909090] leading-6">
                    An immersive way to experience entertainment
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-2/4 bg-[#EDEDED] relative flex items-center overflow-hidden">
            <div className="pl-[56px] pr-[264px] py-11 flex flex-col gap-4">
              <span className="font-[200] text-[64px] leading-[56px]">
                Macbook <strong className="font-[500]">Air</strong>{" "}
              </span>
              <span className="medium-14 text-[#909090] leading-6">
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </span>
              <div className="inline-block">
                <Button
                  type="button"
                  title="Shop Now"
                  variant="btn_black_text"
                />
              </div>
            </div>
            <img
              src={macbookpro14}
              alt="macbookpro14"
              width={829}
              height={602}
              className="absolute top-[98px] right-[-450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
