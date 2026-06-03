import "./PlanToTravelCard.css";

interface PlanToTravelCardProps {
  image: string;
  title: string;
  description: string;
}

function PlanToTravelCard({image, title, description}: PlanToTravelCardProps) {
  return (
    <section id="plan-to-travel-card">
      <img src={image} alt="Plan Your Trip" />
      <div id="plan-to-travel-content">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    </section>
  );
}

export default PlanToTravelCard;
