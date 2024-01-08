import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <div>
        <h1 className="medium-24">Shopping Cart</h1>
      </div>
      <div className="w-full">
        {cartItems.length === 0 ? (
          <div>NO ITEM in Cart</div>
        ) : (
          cartItems.map((item) => <CartItem data={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

const CartItem = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = value * data.price;
  const handleDecreaseValue = () => {
    if (value === 1) {
      return setValue(1);
    } else return setValue(value - 1);
  };
  const handleIncreaseValue = () => {
    setValue(value + 1);
  };
  return (
    <div className="border-b p-3 !pl-0">
      <div className="flex items-center justify-between text-[14px] py-4">
        <div className="flex items-center justify-center">
          <div className="max-w-[60px] h-auto">
            <img
              src="https://i.ibb.co/dWnyzNv/Image2.png"
              alt="Image2"
              width={60}
              height={40}
            />
          </div>
          <div className="text-start medium-14 flex-1">
            <h3>{data?.name}</h3>
            <p>#{data.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleDecreaseValue()}
              className="text-[16px]"
            >
              -
            </button>
            <span className="py-1 px-2 border-[0.5px] rounded">{value}</span>
            <button
              onClick={() => handleIncreaseValue()}
              className="text-[16px]"
            >
              +
            </button>
          </div>
          <p className="medium-14">${totalPrice}</p>
          <RxCross1 size={16} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
