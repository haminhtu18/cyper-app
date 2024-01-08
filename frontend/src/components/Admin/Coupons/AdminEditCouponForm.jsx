import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../redux/features/productSlice";
import { useNavigate } from "react-router-dom";

const AdminEditCouponForm = ({ setOpenEditCoupon, coupon }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-black/[.4] fixed h-screen top-0">
      <div className="relative w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] h-4/5 absolute bg-white top-[55%] left-[40%] translate-x-[-50%] translate-y-[-50%] rounded-md"
        >
          <div className="flex mx-2 justify-between items-center pt-3 text-black">
            <span className="text-black medium-24">Info Coupon</span>
            <div
              className="cursor-pointer"
              onClick={() => setOpenEditCoupon(false)}
            >
              <AiOutlineClose size={24} color="black" />
            </div>
          </div>
          <div className="px-2 py-2">
            <div>
              <label>Name:</label>
              <span className="block outline-none border pl-2 h-8 w-full appearance-none">
                {coupon?.name}
              </span>
            </div>
            <br />
            <div>
              <label>Discount % Coupon:</label>
              <span className="block outline-none border pl-2 h-8 w-full appearance-none">
                {coupon?.value} %
              </span>
            </div>
            <br />
            <div>
              <label>Min Amount:</label>
              <span className="block outline-none border pl-2 h-8 w-full appearance-none">
                {coupon?.minAmount}
              </span>
            </div>
            <br />
            <div>
              <label>Max Amount:</label>
              <span className="block outline-none border pl-2 h-8 w-full appearance-none items-center">
                {coupon?.maxAmount}
              </span>
            </div>
            <br />
            <div>
              <label>Selected Products:</label>
              <div className="overflow-y-scroll h-[100px]">
                {coupon?.selectedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-start"
                  >
                    <p>{product}</p>
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditCouponForm;
