import { useState } from "react";
import heart from "../../assets/icon/heart.svg";
import heartRed from "../../assets/icon/heartRed.svg";
import Button from "../Button";

const ProductItem = ({ imgUrl, name, price }) => {
  const [heartOpen, setHeartOpen] = useState(false);
  const [test, setTest] = useState(1);
  const handleSubmit = () => {
    setTest(test + 1);
    console.log(test);
  };
  return (
    <div className="min-w-[200px] bg-[#F6F6F6] rounded-[9px] flex flex-col items-center py-6 px-4 gap-4">
      <div className="w-full flex justify-end">
        {heartOpen ? (
          <img
            src={heartRed}
            alt="heartRed"
            width={32}
            height={32}
            onClick={() => setHeartOpen(false)}
          />
        ) : (
          <img
            src={heart}
            alt="heart"
            width={32}
            height={32}
            onClick={() => setHeartOpen(true)}
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
        <div onClick={() => handleSubmit()}>
          <Button title="Buy Now" variant="btn_black" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
