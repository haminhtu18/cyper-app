import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOTEFROMWISHLIST,
  selectWishlist,
} from "../../redux/features/wishlistSlice";
import { ADDTOCART } from "../../redux/features/cartSlice";

const WishList = ({ setOpenWishList }) => {
  const wishlist = useSelector(selectWishlist);
  console.log(wishlist);
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
            <h5 className="p-2 medium-20">
              {wishlist.length} item{wishlist.length > 0 && "s"}
            </h5>
          </div>
          {/* WishList Single Item */}
          <div className="w-full border-t">
            {wishlist.length === 0 ? (
              <div className="text-center mt-12">NO ITEM IN WISHLIST</div>
            ) : (
              wishlist.map((item) => (
                <WithListSingle data={item} key={item._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const WithListSingle = ({ data }) => {
  const dispatch = useDispatch();
  const removeWishListItem = (data) => {
    dispatch(REMOTEFROMWISHLIST(data));
  };
  const addCartItem = (data) => {
    const cartItem = { ...data, qty: 1 };
    dispatch(ADDTOCART(cartItem));
  };

  return (
    <div className="border-b p-3">
      <div className="flex items-center justify-between text-[14px] py-4">
        <div className="flex items-center justify-center">
          <div className="max-w-[60px] h-auto">
            <img src={data.images[0].url} alt="Image2" width={60} height={40} />
          </div>
          <div className="text-start medium-14 flex-1">
            <h3>
              {data.name.length > 30
                ? data.name.slice(0, 30) + "..."
                : data.name}
            </h3>
            <p>#{data._id.length > 18 && data._id.slice(0, 18) + "..."}</p>
            <p>${data.currentPrice}</p>
          </div>
        </div>
        <div className="inline-block">
          <BsCartPlus
            size={20}
            className="cursor-pointer mb-4"
            onClick={() => addCartItem(data)}
          />
          <RxCross1
            size={18}
            className="cursor-pointer"
            onClick={() => removeWishListItem(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default WishList;
