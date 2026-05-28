import "./SmallCard.css";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import mapLocation from "/src/assets/icons/card funktioner/mapLocation-icon.svg";

function SmallCard() {
  return (
    <section id="small-card">
      <img
        src="src/assets/images/countries/Brasilien/Brazil-main-image.png"
        alt="Small Card"
      />
      <div id="small-card-content">
        <div id="small-card-title-row">
          <div id="small-card-title">
            <h1>Title</h1>
          </div>
          <button id="small-card-pin-button">
            <img src={pinIcon} alt="Pin Icon" />
          </button>
        </div>

        <div id="small-card-location">
          <button id="small-card-map-button">
            <img src={mapLocation} alt="Map Icon" />
          </button>
          <p>Lokation</p>
        </div>
      </div>
    </section>
  );
}

export default SmallCard;
