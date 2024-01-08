import React from "react";
import { productDetail } from "../../../data";

const Detail = () => {
  return (
    <>
      <div className="w-full py-10">
        <div className="bg-[#FFF] px-10 py-12 flex flex-col gap-8">
          <h4 className="text-[24px] font-medium">Details</h4>
          <div>
            <p>
              Just as a book is judged by its cover, the first thing you notice
              when you pick up a modern smartphone is the display. Nothing
              surprising, because advanced technologies allow you to practically
              level the display frames and cutouts for the front camera and
              speaker, leaving no room for bold design solutions. And how good
              that in such realities Apple everything is fine with displays.
              Both critics and mass consumers always praise the quality of the
              picture provided by the products of the Californian brand. And
              last year's 6.7-inch Retina panels, which had ProMotion, caused
              real admiration for many.
            </p>
          </div>
          <div className="w-full">
            <div>
              <h2 className="pb-2 medium-20">Screen</h2>
              <div className="w-full flex flex-col gap-6">
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">Screen diagonal</h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.screen.screen_diagonal}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">
                    The screen resolution
                  </h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.screen.screen_resolution}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">
                    The screen refresh rate
                  </h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.screen.screen_refresh_rate}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">The pixel density</h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.screen.pixel_density}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">Screen type</h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.screen.screen_type}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">Additionally</h5>
                  <div className="text-end">
                    {productDetail.screen.additionally.map((add, i) => (
                      <p className="text-[15px] font-normal" key={i}>
                        {add}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pb-2 pt-10 medium-20">CPU</h2>
              <div className="w-full flex flex-col gap-6">
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">CPU</h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.cpu.name}
                  </p>
                </div>
                <div className="flex justify-between border-b-[0.5px] border-solid border-[#CDCDCD] pb-2">
                  <h5 className="text-[16px] font-normal">Number of cores</h5>
                  <p className="text-[15px] font-normal">
                    {productDetail.cpu.cores}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
