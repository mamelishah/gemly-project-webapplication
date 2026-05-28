import "./App.css";
import SmallCard from "./components/cards/SmallCard";
import TopBar from "./components/ui/layout/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
        <SmallCard />
        <SmallCard />
      </div>
import SearchBar from "./components/ui/input/SearchBar";
import CountryCircleCard from "./components/cards/CountryCircleCard";


function App() {
  return (
    <>
      <SearchBar showCancelIcon={true} 
      placeholderText={"Søg efter steder..."} />

   </>

      <CountryCircleCard />
    </>
  );
}

export default App;
