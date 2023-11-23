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

const WishList = ({ setOpenWishList }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gray-10/[.3] z-20">
      <div className="fixed top-0 right-0 min-h-full w-1/4 bg-white flex flex-col z-30 overflow-y-auto">
        <div>
          <div className="flex w-full items-center justify-between pt-5 px-5">
            <h2 className="medium-24">WishList</h2>
            <RxCross1
              size={24}
              onClick={() => setOpenWishList(false)}
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
              cartItems.map((item) => (
                <WithListSingle data={item} key={item.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const WithListSingle = ({ data }) => {
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
          <RxCross1 size={18} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WishList;
