import { BsSmartwatch } from "react-icons/bs";
import phones from "../../assets/icon/Phones.svg";
import cameras from "../../assets/icon/Cameras.svg";
import computers from "../../assets/icon/Computers.svg";
import gaming from "../../assets/icon/Gaming.svg";
import headphones from "../../assets/icon/Headphones.svg";
import { Link } from "react-router-dom";

const CategoryHome = () => {
  return (
    <section className="flexCenter w-full">
      <div className="max-container flexCenter bg-[#FAFAFA] w-full">
        <div className="px-40 py-20 flex flex-col gap-8 justify-start w-full">
          <h3 className="medium-24 leading-8">Browse By Category</h3>
          <div className="flex gap-8">
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <img src={phones} alt="phones" width={48} height={48} />
              <p className="medium-16 leading-6">Phones</p>
            </Link>
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <BsSmartwatch className="text-[36px]" />
              <p className="medium-16 leading-6 whitespace-nowrap">
                Smart Watches
              </p>
            </Link>
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <img src={cameras} alt="phones" width={48} height={48} />
              <p className="medium-16 leading-6">Cameras</p>
            </Link>
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <img src={headphones} alt="phones" width={48} height={48} />
              <p className="medium-16 leading-6">Headphones</p>
            </Link>
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <img src={computers} alt="phones" width={48} height={48} />
              <p className="medium-16 leading-6">Computers</p>
            </Link>
            <Link
              to="/"
              className="flexCenter flex-col gap-2 w-[160px] h-[128px] rounded-[15px] bg-[#EDEDED]"
            >
              <img src={gaming} alt="phones" width={48} height={48} />
              <p className="medium-16 leading-6">Gaming</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHome;
