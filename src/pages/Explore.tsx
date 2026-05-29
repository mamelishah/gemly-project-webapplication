import BottomNavigationBar from '../components/ui/layout/bottom-navigation-bar/BottomNavigationBar';
import SmallCard from "../components/cards/SmallCard";
import TopBar from "../components/ui/layout/TopBar";
import SearchBar from "../components/ui/input/SearchBar";
import Frankrigimage from "/src/assets/images/countries/Frankrig/france-main-image.png";
import Sverigeimage from "/src/assets/images/countries/Sverige/sverige-main-image.png";
import indiaimage from "/src/assets/images/countries/Indien/india-main-image.png";
import Brazilimage from "/src/assets/images/countries/Brasilien/Brazil-main-image.png";
import Southafricaimage from "/src/assets/images/countries/southafrica/south-africa-main-image.png";
import Mauritiusimage from "/src/assets/images/countries/Mauritius/mauritius-main-image.png";
import Polandimage from "/src/assets/images/countries/Polen/polen-main-image.png";
import pinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import "./Explore.css";
import CountryCircleCard from '../components/cards/CountryCircleCard';
import SortExploreCard from "../components/cards/SortExploreCard";
import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import fewViews from "/src/assets/icons/Sortér efter/fewViews-icon.svg";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import popular from "/src/assets/icons/Sortér efter/popular-icon.svg";
import PlanToTravelCard from '../components/cards/PlanToTravelCard';
import Lokalshopimage from "/src/assets/images/recentlyvisited/local-shop-recently-visited.png";
import Fiskerspotimage from "/src/assets/images/recentlyvisited/fiskerspot-recently-visited.png";
import Lokalmarkedimage from "/src/assets/images/recentlyvisited/lokal-marked-recently-visited.png";  
import Rideturimage from "/src/assets/images/recentlyvisited/ridetur-recently-visited.png";
import Cuscoimage from "/src/assets/images/plantotravel/cusco-plan-to-travel.png";
import Bukarestimage from "/src/assets/images/plantotravel/bukarest-plan-to-travel.png";
import Colonimage from "/src/assets/images/plantotravel/colon-plan-to-travel.png";
import Aucklandimage from "/src/assets/images/plantotravel/auckland-plan-to-travel.png";

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
          title={"Ridetur"}
          image={Rideturimage}
          pinIcon={pinIcon}
          location={"Tupiza, Bolivia"}
        />
        <SmallCard
          title={"Fiskershop"}
          image={Fiskerspotimage}
          pinIcon={pinIcon}
          location={"Rurrenabaque, Bolivia"}
        />
        <SmallCard
          title={"Lokal Marked"}
          image={Lokalmarkedimage}
          pinIcon={pinIcon}
          location={"Sucre, Bolivia"}
        />
        <SmallCard
          title={"Lokal Shop"}
          image={Lokalshopimage}
          pinIcon={pinIcon}
          location={"Marrakech, Marokko"}
        />
      </div>
      <h1>Opdag noget nyt</h1>
      <h4>Udforsk skjulte steder i hele verden</h4>
      <div id="country-circle-card-container">
        <CountryCircleCard image={Frankrigimage} countryName="Frankrig" />
        <CountryCircleCard image={Sverigeimage} countryName="Sverige" />
        <CountryCircleCard image={indiaimage} countryName="Indien" />
        <CountryCircleCard image={Brazilimage} countryName="Brasilien" />
        <CountryCircleCard image={Southafricaimage} countryName="Sydafrika" />
        <CountryCircleCard image={Mauritiusimage} countryName="Mauritius" />
        <CountryCircleCard image={Polandimage} countryName="Polen" />
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
        <PlanToTravelCard
          image={Cuscoimage}
          title={"Cusco"}
          description={"Peru"}
        />
        <PlanToTravelCard
          image={Aucklandimage}
          title={"Auckland"}
          description={"New Zealand"}
        />
        <PlanToTravelCard
          image={Colonimage}
          title={"Colón"}
          description={"Panama"}
        />
        <PlanToTravelCard
          image={Bukarestimage}
          title={"Bukarest"}
          description={"Rumænien"}
        />
      </div>
      <BottomNavigationBar />
    </>
  );
}

export default Explore