import BottomNavigationBar from '../components/ui/layout/bottom-navigation-bar/BottomNavigationBar';
import SmallCard from "../components/cards/SmallCard";
import TopBar from "../components/ui/layout/TopBar";
import SearchBar from "../components/ui/input/SearchBar";
import Frankrigimage from "/src/assets/images/countries/Frankrig/france-main-image.png";
import Sverigeimage from "/src/assets/images/countries/Sverige/sverige-main-image.png";
import indiaimage from "/src/assets/images/countries/Indien/india-main-image.png";
import Brazilimage from "/src/assets/images/countries/Brasilien/Brazil-main-image.png";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import "./Explore.css";
import CountryCircleCard from '../components/cards/CountryCircleCard';
import SortExploreCard from "../components/cards/SortExploreCard";
import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import fewViews from "/src/assets/icons/Sortér efter/fewViews-icon.svg";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import popular from "/src/assets/icons/Sortér efter/popular-icon.svg";
import PlanToTravelCard from '../components/cards/PlanToTravelCard';

function Explore() {
  return (
    <>
      <TopBar
        title="Opdag noget nyt"
        showLeftIcon={false}
        showRightIcon={false}
      />
      <SearchBar
        showCancelIcon={true}
        placeholderText={"Søg efter steder..."}
      />
      <h1>Vist for nyligt</h1>
      <div id="small-card-container">
        <SmallCard
          title={"Lokal Shop"}
          image={Frankrigimage}
          pinIcon={pinIcon}
          location={"Marrakech, Marokko"}
        />
        <SmallCard
          title={"Fiskershop"}
          image={Frankrigimage}
          pinIcon={pinIcon}
          location={"Rurrenabaque, Bolivia"}
        />
        <SmallCard
          title={"Lokal Marked"}
          image={Frankrigimage}
          pinIcon={pinIcon}
          location={"Sucre, Bolivia"}
        />
        <SmallCard
          title={"Ridetur"}
          image={Frankrigimage}
          pinIcon={pinIcon}
          location={"Tupiza, Bolivia"}
        />
      </div>
      <h1>Opdag noget nyt</h1>
      <h2>Udforsk skjulte steder i hele verden</h2>
      <div id="country-circle-card-container">
        <CountryCircleCard image={Frankrigimage} countryName="Frankrig" />
        <CountryCircleCard image={Sverigeimage} countryName="Sverige" />
        <CountryCircleCard image={indiaimage} countryName="Indien" />
        <CountryCircleCard image={Brazilimage} countryName="Spanien" />
        <CountryCircleCard image={Frankrigimage} countryName="Grækenland" />
      </div>
      <h1>Sortér efter</h1>
      <div id="sort-container">
        <SortExploreCard icon={addedRecently} text="Tilføjet for nylig" />
        <SortExploreCard icon={fewViews} text="Få visninger" />
        <SortExploreCard icon={nearYou} text="Nær dig" />
        <SortExploreCard icon={popular} text="Populære steder" />
      </div>
      <h1>Planlæg din næste rejse</h1>
      <div id="plan-to-travel-container">
        <PlanToTravelCard image={Frankrigimage} title={"Cusco"} description={"Peru"} />
        <PlanToTravelCard image={Frankrigimage} title={"Auckland"} description={"New Zealand"} />
      </div>
      <BottomNavigationBar />
    </>
  );
}

export default Explore