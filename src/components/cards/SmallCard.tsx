import "./SmallCard.css";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";

function SmallCard() {
  return (
    <section id="small-card">
      <img
        src="src/assets/images/countries/Brasilien/Brazil-main-image.png"
        alt="Small Card"
      />
      <h1>Title</h1>
      <p>Lokation</p>
      <button>
        <img src={pinIcon} alt="Pin Icon" />
      </button>
    </section>
  );
}

export default SmallCard;