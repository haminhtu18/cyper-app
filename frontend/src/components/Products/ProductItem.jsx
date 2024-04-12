import { useEffect, useState } from "react";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADDTOWISHLIST,
  REMOTEFROMWISHLIST,
  selectWishlist,
} from "../../redux/features/wishlistSlice";

const ProductItem = (product) => {
  const wishlist = useSelector(selectWishlist);
  const [heartOpen, setHeartOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === product._id)) {
      setHeartOpen(true);
    } else {
      setHeartOpen(false);
    }
  }, [product._id, wishlist]);

  const removeWishListhandler = (product) => {
    setHeartOpen(!heartOpen);
    dispatch(REMOTEFROMWISHLIST(product));
  };

  const addWishListhandler = (product) => {
    setHeartOpen(!heartOpen);
    dispatch(ADDTOWISHLIST(product));
  };
  return (
    <div className="min-w-[200px] max-w-[279px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center py-6 px-4 gap-4 shadow">
      <div className="w-full flex justify-end cursor-pointer">
        {heartOpen ? (
          <img
            src={heartRed}
            alt="heartRed"
            width={32}
            height={32}
            onClick={() => removeWishListhandler(product)}
          />
        ) : (
          <img
            src={heart}
            alt="heart"
            width={32}
            height={32}
            onClick={() => addWishListhandler(product)}
          />
        )}
      </div>
      <div>
        <img
          src={product.images[0].url}
          alt="imgURL"
          width={160}
          height={160}
        />
      </div>
      <div className="flexCenter flex-col gap-6">
        <div className="flexCenter flex-col text-center gap-4">
          <h3 className="medium-16  h-12">
            {product.name.length > 40
              ? product.name.slice(0, 40) + "..."
              : product.name}
          </h3>
          <span className="text-[24px] font-[600] leading-6">
            ${product.currentPrice}
          </span>
        </div>
        <Link to={`/product/${product._id}`}>
          <Button title="Buy Now" variant="btn_black" />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
