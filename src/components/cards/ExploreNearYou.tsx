import { NavLink } from "react-router-dom";
import "./ExploreNearYou.css";
import ArrowRightSmall from "/src/assets/icons/navigation/ArrowRightSmall-icon.svg";
import ExploreNearYouImage from "/src/assets/images/explorenearyou/explore-near-you.png";

function ExploreNearYou() {
  return (
    <NavLink to="/map" style={{ textDecoration: "none" }}>
      <div className="explore-near-you-content-container">
        <div className="explore-near-you-image-container">
          <img src={ExploreNearYouImage} alt="Udforsk i nærheden" />
        </div>

        <div className="explore-near-you-text-container">
          <h3>Udforsk i nærheden</h3>
          <h5>Vis steder tæt på dig</h5>
        </div>

        <div className="explore-near-you-button-container">
          <button className="explore-near-you-button">
            <img src={ArrowRightSmall} alt="Pil mod højre" />
          </button>
        </div>
      </div>
    </NavLink>
  );
}
export default ExploreNearYou;
