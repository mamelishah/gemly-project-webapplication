import "./App.css";
import SmallCard from "./components/cards/SmallCard";
import TopBar from "./components/ui/layout/TopBar";
import SearchBar from "./components/ui/input/SearchBar";
import CountryCircleCard from "./components/cards/CountryCircleCard";
import PlanToTravelCard from "./components/cards/PlanToTravelCard";
import BigCard from "./components/cards/bigCard/BigCard";
import categoryIcon from "/src/assets/icons/kategori/category-icon.svg";
import SortExploreCard from "./components/cards/SortExploreCard";
import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import fewViews from "/src/assets/icons/Sortér efter/fewViews-icon.svg";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import popular from "/src/assets/icons/Sortér efter/popular-icon.svg";
import image from "/src/assets/images/countries/Frankrig/france-main-image.png";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import SavedCard from "./components/cards/savedCard/SavedCard";

function App() {
  return (
    <>
      <TopBar title="Udforsk" showLeftIcon={true} showRightIcon={false} />
      <SearchBar
        showCancelIcon={true}
        placeholderText={"Søg efter steder..."}
      />
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          gap: "1rem",
          width: "100%",
        }}
      >
        <SmallCard
          title={"Lokal Shop"}
          image={image}
          pinIcon={pinIcon}
          location={"Marrakech, Marokko"}
        />
        <SmallCard
          title={"Fiskershop"}
          image={image}
          pinIcon={pinIcon}
          location={"Rurrenabaque, Bolivia"}
        />
        <SmallCard
          title={"Lokal Marked"}
          image={image}
          pinIcon={pinIcon}
          location={"Sucre, Bolivia"}
        />
        <SmallCard
          title={"Ridetur"}
          image={image}
          pinIcon={pinIcon}
          location={"Tupiza, Bolivia"}
        />
      </div>

      <div className="country-circle-card-container">
        <CountryCircleCard image={image} countryName="Frankrig" />
        <CountryCircleCard image={image} countryName="Danmark" />
        <CountryCircleCard image={image} countryName="Svergie" />
        <CountryCircleCard image={image} countryName="Portugal" />
        <CountryCircleCard image={image} countryName="Spanien" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "0.5rem",
          gap: "1rem",
          width: "100%",
        }}
      >
        <SortExploreCard icon={addedRecently} text="Tilføjet for nylig" />
        <SortExploreCard icon={fewViews} text="Få visninger" />
        <SortExploreCard icon={nearYou} text="Nær dig" />
        <SortExploreCard icon={popular} text="Populære steder" />
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          gap: "1rem",
          width: "100%",
        }}
      >
        <PlanToTravelCard title={"Cusco"} description={"Peru"} />
        <PlanToTravelCard title={"Rio de Janeiro"} description={"Brasilien"} />
        <PlanToTravelCard title={"Marrakech"} description={"Marokko"} />
      </div>

      <BigCard
        category="Kultur"
        location="Polen"
        title="Overskrift"
        categoryIcon={categoryIcon}
      />

      <SavedCard title="Italien" />
      <SavedCard title="Frankrig" />
    </>
  );
}

export default App;
