import "./App.css";
import SearchBar from "./components/ui/input/SearchBar";


function App() {
  return (
    <>
      <SearchBar showCancelIcon={true} 
      placeholderText={"Søg efter steder..."} />

   </>

  );
}

export default App;
