import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/ui/layout/TopBar";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import SmallCard from "../components/cards/SmallCard";
import CategoryIcon from "../assets/icons/kategori/category-icon.svg";
import BrasilienImage from "../assets/images/countries/Brasilien/Brazil-main-image.png";

function AccountPosted() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TopBar
        title="Dine opslag"
        showLeftIcon={true}
        showRightIcon={false}
        onLeftIconClick={handleBack}
        onRightIconClick={() => {}}
      />
      <div>AccountPosted</div>
      <div className="account-posted-content">
        <SmallCard image={BrasilienImage} title="Dit opslag" pinIcon={CategoryIcon} location="Aarhus" />
      </div>
      <BottomNavigationBar />
    </>
  );
}

export default AccountPosted;
