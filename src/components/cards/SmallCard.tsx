import "./SmallCard.css";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";

function SmallCard({ image, title, pinIcon, location } : { image: string; title: string; pinIcon: string; location: string }) {
  return (
    <section id="small-card">
      <img
        src={image}
        alt="Small Card"
      />
      <div id="small-card-content">
        <div id="small-card-title-row">
          <div id="small-card-title">
            <h2>{title}</h2>
          </div>
          <button id="small-card-pin-button">
            <img src={pinIcon} alt={title} />
          </button>
        </div>

        <div id="small-card-location">
          <button id="small-card-map-button">
            <img src={nearYou} alt={title} />
          </button>
          <h5> {location}</h5>
        </div>
      </div>
    </section>
  );
}

export default SmallCard;
