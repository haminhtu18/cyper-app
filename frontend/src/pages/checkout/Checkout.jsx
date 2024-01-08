import React from "react";
import ShoppingCart from "../../components/CheckoutProcess/ShoppingCart";
import OrderSummary from "../../components/CheckoutProcess/OrderSummary";
import Footer from "../../components/UI/Footer";
import HeaderTop from "../../components/Header/HeaderTop";
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
const Checkout = () => {
  return (
    <>
      <HeaderTop />
      <div className="flexCenter w-full mt-[88px]">
        <div className="max-container w-full py-[72px] px-40">
          <div className="flex items-start justify-between">
            <ShoppingCart cartItems={cartItems} />
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
