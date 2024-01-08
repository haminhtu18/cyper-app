import HeaderTop from "../../components/Header/HeaderTop";
import Footer from "../../components/UI/Footer";
import ProfileContent from "../../components/Profile/ProfileContent";
import ProfileSideBar from "../../components/Profile/ProfileSidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/authSlice";

const Profile = () => {
  const [active, setActive] = useState(1);
  const user = useSelector(selectUser);
  const userName = user.name;
  return (
    <div>
      {user.name === "admin" ? null : <HeaderTop />}
      <div
        className={`max-container flex py-10 ${
          user.name === "admin" ? null : "mt-20"
        }`}
      >
        <div className="lg:w-1/4 w-[50px] sticky mt-[15%] lg:mt-0">
          <ProfileSideBar
            active={active}
            setActive={setActive}
            userName={userName}
          />
        </div>
        <ProfileContent active={active} />
      </div>
      {user.name === "admin" ? null : <Footer />}
    </div>
  );
};

export default Profile;
