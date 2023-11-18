import { useState } from "react";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../Button";
import { Link } from "react-router-dom";

const ProductItem = ({ imgUrl, name, price, category }) => {
  const [heartOpen, setHeartOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="min-w-[200px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center py-6 px-4 gap-4">
      <div className="w-full flex justify-end">
        {heartOpen ? (
          <img
            src={heartRed}
            alt="heartRed"
            width={32}
            height={32}
            onClick={() => setHeartOpen(!heartOpen)}
          />
        ) : (
          <img
            src={heart}
            alt="heart"
            width={32}
            height={32}
            onClick={() => setHeartOpen(!heartOpen)}
          />
        )}
      </div>
      <div>
        <img src={imgUrl} alt="imgURL" width={160} height={160} />
      </div>
      <div className="flexCenter flex-col gap-6">
        <div className="flexCenter flex-col text-center gap-4">
          <h3 className="medium-16  h-12">{name}</h3>
          <span className="text-[24px] font-[600] leading-6">{price}</span>
        </div>
        <Link to={`/product/${category}/${name}`}>
          <Button title="Buy Now" variant="btn_black" />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
