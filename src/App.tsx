import "./App.css";
import SmallCard from "./components/cards/SmallCard";
import TopBar from "./components/ui/layout/TopBar";
import SearchBar from "./components/ui/input/SearchBar";
import CountryCircleCard from "./components/cards/CountryCircleCard";
import PlanToTravelCard from "./components/cards/PlanToTravelCard";
import SortExploreCard from "./components/cards/SortExploreCard";

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
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
       
        <SortExploreCard />
        <PlanToTravelCard />
        <PlanToTravelCard />
      </div>
    </>
  );
}

export default App;
