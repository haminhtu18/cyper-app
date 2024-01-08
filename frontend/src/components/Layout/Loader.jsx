import Lottie from "react-lottie";
import animationData from "../../assets/animations/Animation1.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="fixed top-[-50px] left-0 w-full h-screen flex items-center justify-center ">
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};

export default Loader;
