import "./App.css";
import PlanToTravelCard from "./components/cards/PlanToTravelCard";
import SearchBar from "./components/ui/input/SearchBar";


function App() {
  return (
    <>
      <SearchBar showCancelIcon={true} 
      placeholderText={"Søg efter steder..."} />

      <PlanToTravelCard />

   </>

  );
}

export default App;
