
import NavigationIcon from "/src/assets/icons/card funktioner/navigation-icon.svg";
import CommentIcon from "/src/assets/icons/card funktioner/comment-icon.png";
import PinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import "./DetailCard.css"
import BottomNavigationElement from "../ui/layout/bottom-navigation-bar/NavigationsElement"
import KunstIcon from "/src/assets/icons/kategori/art-clean-icon.svg";
import CafeIcon from "/src/assets/icons/kategori/cafe-clean-icon.svg";
import OutdoorIcon from "/src/assets/icons/kategori/outdoor-clean-icon.svg";
import ShoppingIcon from "/src/assets/icons/kategori/shop-clean-icon.svg";
import UnderholdningIcon from "/src/assets/icons/kategori/entertainment-clean-icon.svg";

import MaplocationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";

interface DetailCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  location: string;
}

function checkCategory(category: string): string | undefined {
  switch (category) {
    case "Kunst":
      return KunstIcon;

    case "Outdoor":
      return OutdoorIcon;

    case "Caféer og Restauranter":
      return CafeIcon;

    case "Underholdning":
      return UnderholdningIcon;

    case "Shopping":
      return ShoppingIcon;

    default:
      return undefined;
  }
}

function DetailCard({ image, title, description, category, location }: DetailCardProps) {

  const categoryIcon = checkCategory(category)

  return (
    <article className="detail-card">
      <img className="detail-card-image" src={image} alt={`Billede af ${title}`} />
      <div className="detail-card-functions">
        <BottomNavigationElement label="Navigation" iconUrl={NavigationIcon} to=""/>
        <BottomNavigationElement label="Kommentarer" iconUrl={CommentIcon} to=""/>
        <BottomNavigationElement label="Gem" iconUrl={PinIcon} to=""/>
      </div>
      <div className="detail-info-container">
        <div className="detail-card-category">
          <img src={categoryIcon} alt="" />
          <p>{category}</p> 
        </div>
        <div className="detail-card-location">
          <img className="detail-location-icon" src={MaplocationIcon} alt="" />
          <p>{location}</p>  
        </div>
        <div className="detail-card-open">
          <p><span id="open-text">Åben</span> ● Lukker kl. 18:00</p>
        </div>
        <section className="detail-card-text">
          <h2>Beskrivelse:</h2>
          <p>{description}</p>
        </section>
      </div>
    </article>
  );
}

export default DetailCard;
