import "./BottomNavigationBar.css";
import NavigationsElement from "./NavigationsElement";
import { useNavigate, useLocation } from "react-router";

import udforskIcon from "../../../../assets/icons/navbar/search-icon.svg";
import plusIcon from "../../../../assets/icons/navbar/addPost-icon.svg";
import kortIcon from "../../../../assets/icons/navbar/map-icon.svg";
import favoritterIcon from "../../../../assets/icons/navbar/pin-icon.svg";
import profilIcon from "../../../../assets/icons/navbar/profile-icon.svg";

function BottomNavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav id="bottom-navigation-bar-container">
      <ul id="bottom-navigation-bar">
        <li className={location.pathname === "/explore" ? "active" : ""}>
          <NavigationsElement
            label="Udforsk"
            iconUrl={udforskIcon}
            to="/explore"
          />
        </li>
        <li className={location.pathname === "/map" ? "active" : ""}>
          <NavigationsElement label="Kort" iconUrl={kortIcon} to="/map" />
        </li>
        <li className="add-button-container">
          <button className="add-button" onClick={() => navigate("/post")}>
            <img src={plusIcon} alt="plus icon" className="plus-icon" />
          </button>
        </li>
        <li className={location.pathname === "/saved" ? "active" : ""}>
          <NavigationsElement
            label="Favoritter"
            iconUrl={favoritterIcon}
            to="/saved"
          />
        </li>
        <li className={location.pathname === "/account" ? "active" : ""}>
          <NavigationsElement
            label="Profil"
            iconUrl={profilIcon}
            to="/account"
          />
        </li>
      </ul>
    </nav>
  );
}

export default BottomNavigationBar;
