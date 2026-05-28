import "./App.css";
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
