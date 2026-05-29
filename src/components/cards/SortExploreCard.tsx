
import "./SortExploreCard.css";

function SortExploreCard({ icon, text }) {
  return (
    <div id="sort-explore-card">
      <img src={icon} alt={text} />
      <h4>{text}</h4>
    </div>
  );
}

export default SortExploreCard;