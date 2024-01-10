import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADDTOCART,
  REMOTEFROMCART,
  selectCart,
} from "../../redux/features/cartSlice";

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
  const cart = useSelector(selectCart);
  const totalCheckoutCart = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );
  console.log(totalCheckoutCart);
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gray-10/[.3] z-40">
      <div className="fixed top-0 right-0 min-h-full w-1/4 bg-white flex flex-col z-50 overflow-y-auto">
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
            <h5 className="p-2 medium-20">
              {cart && cart.length} item{cart.length > 1 ? "s" : null}
            </h5>
          </div>
          {/* Cart Single Items */}
          <div className="w-full border-t">
            {cart.length === 0 ? (
              <div>NO ITEM in Cart</div>
            ) : (
              cart.map((item) => <CartSingle data={item} key={item._id} />)
            )}
          </div>
        </div>
        {/* checkout button */}
        <div className=" py-5 mb-3 mx-12">
          <Link
            to="/checkout"
            className="h-[45px] flex items-center justify-center w-full bg-fuchsia-200 rounded"
          >
            <h1 className="medium-18">CheckOut ${totalCheckoutCart}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(data.qty);
  console.log(value);
  const totalPrice = value * data.currentPrice;
  const handleDecreaseValue = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    dispatch(ADDTOCART(updateCartData));
  };
  const handleIncreaseValue = (data) => {
    setValue(value + 1);
    const updateCartData = { ...data, qty: value + 1 };
    dispatch(ADDTOCART(updateCartData));
  };
  const handleDeleteProduct = (id) => {
    dispatch(REMOTEFROMCART(id));
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
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleDecreaseValue(data)}
              className="text-[20px]"
            >
              -
            </button>
            <span className="py-1 px-2 border-[0.5px] rounded">{data.qty}</span>
            <button
              onClick={() => handleIncreaseValue(data)}
              className="text-[20px]"
            >
              +
            </button>
          </div>
          <p className="medium-16">${totalPrice}</p>
          <RxCross1
            size={18}
            className="cursor-pointer"
            onClick={() => handleDeleteProduct(data._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
