import { useState } from "react";
import arrowRight from "../../assets/icon/ArrowRight.svg";
import { Link, useNavigate } from "react-router-dom";
const Breadcrumbs = ({ category, name }) => {
  const [testActive, setTestActive] = useState(true);
  console.log("category", category);
  console.log("name", name);
  const navigator = useNavigate();
  return (
    <section className="flexCenter w-full">
      <div className="max-container w-full ">
        <div className="px-40 py-10 w-full flexStart medium-16 text-[#A4A4A4] gap-4">
          <span onClick={() => navigator("/")} className="cursor-pointer">
            Home
          </span>
          <img src={arrowRight} alt="arrowRight" width={24} height={24} />
          <Link to="/products">
            <span className={`${category === null && "text-[#000]"}`}>
              Catalog
            </span>
          </Link>
          {category === null ? null : (
            <>
              <img src={arrowRight} alt="arrowRight" width={24} height={24} />
              <span className={`${category && "text-[#000]"} capitalize`}>
                {category}
              </span>
            </>
          )}
          {name === undefined ? null : (
            <>
              <img src={arrowRight} alt="arrowRight" width={24} height={24} />
              <span className={`${name && "text-[#000]"} capitalize`}>
                {name}
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
