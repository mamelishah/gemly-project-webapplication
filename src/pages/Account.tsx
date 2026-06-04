import { Link } from "react-router-dom";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import ProfileCard from "../components/cards/profileCard/ProfileCard";
import TopBar from "../components/ui/layout/TopBar";
import "./Account.css";
import editIcon from "/src/assets/icons/EditAndDelete/edit-icon.svg";

function Account() {
  return (
    <>
      <div className="account-page">
        <TopBar
          title="Din profil"
          showLeftIcon={false}
          showRightIcon={false}
          onLeftIconClick={() => {}}
          onRightIconClick={() => {}}
        />

        <div className="account-element-container">
          <div id="edit-profile-button">
            <img src={editIcon} alt="Edit Icon" />
            <h4>Administrer din profil</h4>
          </div>
          <Link to="/saved">
            <ProfileCard title="Dine gemte" showBackIcon={true} />
          </Link>
          <Link to="/account-posted" style={{ textDecoration: "none" }}>
            <ProfileCard title="Dine opslag" showBackIcon={true} />
          </Link>
          <ProfileCard title="Cookie indstillinger" showBackIcon={true} />
          <ProfileCard title="Support" showBackIcon={true} />
          <ProfileCard title="Log af" showBackIcon={false} />
        </div>

        <BottomNavigationBar />
      </div>
    </>
  );
}

export default Account;
