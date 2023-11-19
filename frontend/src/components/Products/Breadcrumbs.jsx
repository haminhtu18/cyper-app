import { useState } from "react";
import arrowRight from "../../assets/icon/ArrowRight.svg";
const Breadcrumbs = ({ category }) => {
  const [testActive, setTestActive] = useState(true);

  return (
    <section className="flexCenter w-full">
      <div className="max-container w-full ">
        <div className="px-40 py-10 w-full flexStart medium-16 text-[#A4A4A4] gap-4">
          <span>Home</span>
          <img src={arrowRight} alt="arrowRight" width={24} height={24} />
          <span>Catalog</span>
          <img src={arrowRight} alt="arrowRight" width={24} height={24} />

          <span className={`${testActive && "text-[#000]"} capitalize`}>
            {category}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
