import "./App.css";
import SmallCard from "./components/cards/SmallCard";
import TopBar from "./components/ui/layout/TopBar";
import SearchBar from "./components/ui/input/SearchBar";
import CountryCircleCard from "./components/cards/CountryCircleCard";
import PlanToTravelCard from "./components/cards/PlanToTravelCard";
import SortExploreCard from "./components/cards/SortExploreCard";
import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import fewViews from "/src/assets/icons/Sortér efter/fewViews-icon.svg";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import popular from "/src/assets/icons/Sortér efter/popular-icon.svg";

function App() {
  return (
    <>
      <TopBar />
      <SearchBar
        showCancelIcon={true}
        placeholderText={"Søg efter steder..."}
      />
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
        <SmallCard />
        <SmallCard />
      </div>
      <CountryCircleCard />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "0.5rem",
          gap: "1rem",
        }}
      >
        <SortExploreCard icon={addedRecently} text="Tilføjet for nylig" />
        <SortExploreCard icon={fewViews} text="Få visninger" />
        <SortExploreCard icon={nearYou} text="Nær dig" />
        <SortExploreCard icon={popular} text="Populære steder" />
      </div>
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
        <PlanToTravelCard />
        <PlanToTravelCard />
      </div>
    </>
  );
}

export default App;
