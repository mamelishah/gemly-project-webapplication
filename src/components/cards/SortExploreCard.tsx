import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import "./SortExploreCard.css";

function SortExploreCard() {
  return (
    <div id="sort-explore-card">
      <img src={addedRecently} alt="Tilføjet for nylig" />
      <p>Tilføjet for nylig</p>
    </div>
  );
}

export default SortExploreCard;