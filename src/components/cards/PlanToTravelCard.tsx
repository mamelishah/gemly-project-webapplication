import "./PlanToTravelCard.css";

function PlanToTravelCard({image, title, description}) {
  return (
    <section id="plan-to-travel-card">
      <img src={image} alt="Plan Your Trip" />
      <div id="plan-to-travel-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PlanToTravelCard;
