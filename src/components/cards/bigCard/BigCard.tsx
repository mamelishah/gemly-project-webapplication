import "./BigCard.css";
import polenImage from "/src/assets/images/countries/Polen/polen-main-image.png";
import locationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";

interface BigCardProps {
  category: string,
  location: string,
  title: string,
  categoryIcon: string
}


export function BigCard({category, location, title, categoryIcon} : BigCardProps) {
  return (
    <article className="big-card">
      <img id="big-card-image" src={polenImage} alt="Polen Image" />
      <div id="card-content">
        <div id="card-header">
        <h2>{title}</h2>
        <img src={pinIcon} alt="Pin Icon" />
        </div>
        <div id="card-info">
            <div id="category">
                <img src={categoryIcon} alt="" />
                <span>{category}</span>
            </div>
            <div id="location">
                <img src={locationIcon} alt="" />
                <span id="location">{location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BigCard;