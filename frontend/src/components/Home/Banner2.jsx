import banner1 from "../../assets/image/banner2-1.png";
import banner2 from "../../assets/image/banner2-2.png";
import banner3 from "../../assets/image/banner2-3.png";
import banner4 from "../../assets/image/banner2-4.png";
import banner5 from "../../assets/image/banner2-5.png";
import Button from "../UI/Button";

const Banner2 = () => {
  return (
    <section className="flexCenter w-full h-[448px]">
      <div className="max-container w-full bg-banner2-bg FlexCenter h-full relative">
        <img
          src={banner1}
          alt="banner1"
          width={337.92}
          height={181.969}
          className="absolute top-0 left-[220px]"
        />
        <img
          src={banner2}
          alt="banner2"
          width={240}
          height={181.969}
          className="absolute left-[39px] top-0"
        />
        <img
          src={banner3}
          alt="banner3"
          width={320}
          height={181.969}
          className="absolute left-0 bottom-0"
        />
        <img
          src={banner4}
          alt="banner4"
          width={337.92}
          height={181.969}
          className="absolute right-0 bottom-0 z-20"
        />
        <img
          src={banner5}
          alt="banner5"
          width={200}
          height={181.969}
          className="absolute right-0"
        />
        <div className="flex flex-col gap-10 z-20 items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-[72px] font-[200] text-white">
              Big Summer <strong className="font-medium">Sale</strong>
            </h1>
            <p className="font-normal text-base text-[#787878]">
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
          </div>
          <div>
            <Button title="Show Now" variant="btn_white_text" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
