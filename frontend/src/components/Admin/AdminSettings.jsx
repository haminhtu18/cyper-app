import { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { productData } from "../../../data";
import ProductItem from "../Products/ProductItem";

const AdminSettings = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full h-full">
      {/* Navbar Settings */}
      <div className="flex items-center">
        <div
          className="flex items-center cursor-pointer w-full mb-8 justify-center"
          onClick={() => setActive(1)}
        >
          <span
            className={`pl-2 ${
              active === 1 ? "text-[red]" : null
            } text-[20px]  lg:block font-medium`}
          >
            Shop Products
          </span>
        </div>
        <div
          className="flex items-center cursor-pointer w-full mb-8 justify-center"
          onClick={() => setActive(2)}
        >
          <span
            className={`pl-2 ${
              active === 2 ? "text-[red]" : null
            } text-[20px]  lg:block font-medium`}
          >
            Running Events
          </span>
        </div>
        <div
          className="flex items-center cursor-pointer w-full mb-8 justify-center"
          onClick={() => setActive(3)}
        >
          <span
            className={`pl-2 ${
              active === 3 ? "text-[red]" : null
            } text-[20px]  lg:block font-medium`}
          >
            Product Reviews
          </span>
        </div>
      </div>
      <div className="mx-5">
        {active === 1 && (
          <div className="xl:grid-cols-4 lg:grid-cols-3  grid gap-10">
            {productData &&
              productData.map((i, index) => <ProductItem {...i} key={index} />)}
          </div>
        )}
        {active === 2 && "2"}
        {active === 3 && "3"}
      </div>
    </div>
  );
};

export default AdminSettings;
