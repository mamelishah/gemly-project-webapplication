
import "./SortExploreCard.css";

function SortExploreCard({ icon, text }) {
  return (
    <div id="sort-explore-card">
      <img src={icon} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default SortExploreCard;