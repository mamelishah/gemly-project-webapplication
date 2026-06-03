
import "./SortExploreCard.css";

interface SortExploreCard {
  icon: string;
  text: string;
}

function SortExploreCard({ icon, text }: SortExploreCard) {
  return (
    <div id="sort-explore-card">
      <img src={icon} alt={text} />
      <h4>{text}</h4>
    </div>
  );
}

export default SortExploreCard;