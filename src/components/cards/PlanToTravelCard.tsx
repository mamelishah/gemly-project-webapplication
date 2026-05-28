import image from "/src/assets/images/countries/Brasilien/brazil-main-image.png";
import "./PlanToTravelCard.css";

function PlanToTravelCard() {
  return (
    <section id="plan-to-travel-card">
      <img src={image} alt="Plan Your Trip" />
      <div id="plan-to-travel-content">
        <h1>Cusco</h1>
        <p>Peru</p>
      </div>
    </section>
  );
}

export default PlanToTravelCard;
