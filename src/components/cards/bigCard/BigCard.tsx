import "./BigCard.css";
import polenImage from "/src/assets/images/countries/Polen/polen-main-image.png";
import locationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";

export function BigCard({category, location, title, categoryIcon}) {
  return (
    <section className="big-card">
      <img id="big-card-image" src={polenImage} alt="Polen Image" />
      <div id="card-content">
        <div id="card-header">
        <h2>{title}</h2>
        <img src={pinIcon} alt="Pin Icon" />
        </div>
        <div id="card-info">
            <div id="category">
                <img src={categoryIcon} alt="Category Icon" />
                <span>{category}</span>
            </div>
            <div id="location">
                <img src={locationIcon} alt="Location Icon" />
                <span id="location">{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigCard;