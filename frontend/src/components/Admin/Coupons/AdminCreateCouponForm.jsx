import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../redux/features/productSlice";
import { createCoupon, getCoupons } from "../../../redux/features/couponSlice";
import { useNavigate } from "react-router-dom";

const AdminCreateCouponForm = ({ setOpenCreateCoupon }) => {
  const [name, setName] = useState(null);
  const [valueCoupon, setValueCoupon] = useState(0);
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);
  const [checkedState, setCheckedState] = useState(
    new Array(products?.length).fill(false)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, valueCoupon, selectedProducts, minAmount, maxAmount);
    await dispatch(
      createCoupon({
        name,
        value: valueCoupon,
        selectedProducts,
        minAmount,
        maxAmount,
      })
    );
    await dispatch(getCoupons());
    setOpenCreateCoupon(false);
  };

  const handleChangeProduct = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    const handleSelectedProducts = updatedCheckedState
      .map((currentState, index) => {
        if (currentState === true) {
          return products[index]?.name;
        }
        return null;
      })
      .filter((product) => product !== null);

    setSelectedProducts(handleSelectedProducts);
  };

  return (
    <div className="w-full bg-black/[.4] fixed h-screen top-0">
      <div className="relative w-full h-full">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] h-4/5 absolute bg-white top-[55%] left-[40%] translate-x-[-50%] translate-y-[-50%] rounded-md"
        >
          <div className="flex mx-2 justify-between items-center pt-3 text-black">
            <span className="text-black medium-24">Create Coupon</span>
            <div
              className="cursor-pointer"
              onClick={() => setOpenCreateCoupon(false)}
            >
              <AiOutlineClose size={24} color="black" />
            </div>
          </div>
          <div className="px-2 py-2">
            <div>
              <label>Name:</label>
              <input
                type="text"
                className="block outline-none border pl-2 h-8 w-full appearance-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name Coupon ..."
              />
            </div>
            <br />
            <div>
              <label>Value Coupon:</label>
              <input
                type="number"
                className="block outline-none border pl-2 h-8 w-full appearance-none"
                value={valueCoupon}
                onChange={(e) => setValueCoupon(e.target.value)}
                placeholder="Enter Name Coupon ..."
              />
            </div>
            <br />
            <div>
              <label>Min Amount:</label>
              <input
                type="number"
                className="block outline-none border pl-2 h-8 w-full appearance-none"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                placeholder="Enter Min Amount Coupon ..."
              />
            </div>
            <br />
            <div>
              <label>Max Amount:</label>
              <input
                type="number"
                className="block outline-none border pl-2 h-8 w-full appearance-none"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                placeholder="Enter Min Amount Coupon ..."
              />
            </div>
            <br />
            <div>
              <label>Selected Products</label>
              <div className="overflow-y-scroll h-[100px]">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-start"
                  >
                    <input
                      type="checkbox"
                      value={product?.name}
                      onChange={() => handleChangeProduct(index)}
                      checked={checkedState[index]}
                      className="block outline-none border w-4 h-4"
                    />
                    <p>{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <input
                type="submit"
                value="Create Coupon!"
                className="cursor-pointer hover:shadow-xl active:shadow mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded focus:outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateCouponForm;
