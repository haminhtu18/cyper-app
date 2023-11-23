import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const cartItems = [
  {
    id: 25139526913984,
    name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
    price: 1399,
  },
  {
    id: 53459358345,
    name: "AirPods Max Silver",
    price: 1399,
  },
  {
    id: 63632324,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 1399,
  },
];

const Cart = ({ setOpenCart }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gray-10/[.3] z-20">
      <div className="fixed top-0 right-0 min-h-full w-1/4 bg-white flex flex-col z-30 overflow-y-auto">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={24}
              onClick={() => setOpenCart(false)}
              className="cursor-pointer"
            />
          </div>
          {/* Item length */}
          <div className="flex items-center p-4">
            <IoBagHandleOutline size={25} />
            <h5 className="p-2 medium-20">5 items</h5>
          </div>
          {/* Cart Single Items */}
          <div className="w-full border-t">
            {cartItems.length === 0 ? (
              <div>NO ITEM in Cart</div>
            ) : (
              cartItems.map((item) => <CartSingle data={item} key={item.id} />)
            )}
          </div>
        </div>
        {/* checkout button */}
        <div className=" py-5 mb-3 mx-12">
          <Link
            to="/checkout"
            className="h-[45px] flex items-center justify-center w-full bg-fuchsia-200 rounded"
          >
            <h1 className="medium-18">CheckOut</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
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
    <div className="border-b p-3">
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
            <h3>{data.name}</h3>
            <p>#{data.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleDecreaseValue()}
              className="text-[20px]"
            >
              -
            </button>
            <span className="py-1 px-2 border-[0.5px] rounded">{value}</span>
            <button
              onClick={() => handleIncreaseValue()}
              className="text-[20px]"
            >
              +
            </button>
          </div>
          <p className="medium-16">${totalPrice}</p>
          <RxCross1 size={18} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
