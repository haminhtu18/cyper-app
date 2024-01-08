import React, { useState } from "react";

const OrderSummary = () => {
  const [code, setCode] = useState("");
  return (
    <div className="w-1/2 h-full">
      <div className="pb-14 px-16 w-full h-full">
        <div>
          <h1 className="medium-24">Order Summary</h1>
        </div>
        <div className="regular-14 mt-10">
          <h3 className="text-[#545454] mb-2">
            Discount code / Promo code Code
          </h3>
          <div className="relative regular-16 text-[#979797] w-full border-[0.5px] rounded-[7px] border-[#9F9F9F]">
            <input
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="py-4 pl-4 w-full rounded-[7px]"
            />
            <button className="absolute top-[50%] translate-y-[-50%] right-4 py-2 px-3 border-[2px] opacity-30 border-[#000] shadow-sm hover:opacity-100 rounded-lg flex items-center text-[12px] font-medium text-black">
              Apply
            </button>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex w-full items-center justify-between medium-16">
            <h3>Subtotal</h3>
            <p>$2347</p>
          </div>
          <div className="py-4 ">
            <div className="flex w-full items-center justify-between ">
              <h4 className="regular-16 text-[#545454] opacity-80">
                Estimated Tax
              </h4>
              <p className="medium-16">$50</p>
            </div>
            <div className="flex w-full items-center justify-between ">
              <h4 className="regular-16 text-[#545454] opacity-80">
                Estimated shipping & Handling
              </h4>
              <p className="medium-16">$29</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between medium-16">
            <h3>Total</h3>
            <p>$2426</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-black text-white rounded-md medium-16 mt-12">
          <button className="py-4 px-14 w-full rounded-md">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
