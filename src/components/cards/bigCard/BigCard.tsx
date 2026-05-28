import "./BigCard.css";
import polenImage from "/src/assets/images/countries/Polen/polen-main-image.png";
import categoryIcon from "/src/assets/icons/kategori/category-icon.svg";
import locationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";

export function BigCard() {
  return (
    <section className="big-card">
      <img id="big-card-image" src={polenImage} alt="Polen Image" />
      <div id="card-content">
        <div id="card-header">
        <h2>Overskrift</h2>
        <img src={pinIcon} alt="Pin Icon" />
        </div>
        <div id="card-info">
            <div id="category">
                <img src={categoryIcon} alt="Category Icon" />
                <span>Kategori</span>
            </div>
            <div id="location">
                <img src={locationIcon} alt="Location Icon" />
                <span id="location">Lokation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigCard;