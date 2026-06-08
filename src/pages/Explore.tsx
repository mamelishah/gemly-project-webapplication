import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
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
import CountryCircleCard from "../components/cards/CountryCircleCard";
import SortExploreCard from "../components/cards/SortExploreCard";
import addedRecently from "/src/assets/icons/Sortér efter/addedRecently-icon.svg";
import fewViews from "/src/assets/icons/Sortér efter/fewViews-icon.svg";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import popular from "/src/assets/icons/Sortér efter/popular-icon.svg";
import PlanToTravelCard from "../components/cards/PlanToTravelCard";
import Lokalshopimage from "/src/assets/images/recentlyvisited/local-shop-recently-visited.png";
import Fiskerspotimage from "/src/assets/images/recentlyvisited/fiskerspot-recently-visited.png";
import Lokalmarkedimage from "/src/assets/images/recentlyvisited/lokal-marked-recently-visited.png";
import Rideturimage from "/src/assets/images/recentlyvisited/ridetur-recently-visited.png";
import Cuscoimage from "/src/assets/images/plantotravel/cusco-plan-to-travel.png";
import Bukarestimage from "/src/assets/images/plantotravel/bukarest-plan-to-travel.png";
import Colonimage from "/src/assets/images/plantotravel/colon-plan-to-travel.png";
import Aucklandimage from "/src/assets/images/plantotravel/auckland-plan-to-travel.png";
import ExploreNearYou from "../components/cards/ExploreNearYou";
import FilterIcon from "../assets/icons/navigation/filter-icon.svg";

import NotificaitonIcon from "/src/assets/icons/navigation/notification-icon.svg";
import { useState } from "react";
import CategoryButton from "../components/ui/button/CategoryButton";

import CategoryIcon from "/src/assets/icons/kategori/category-icon.svg";
import ShopCleanIcon from "/src/assets/icons/kategori/shop-clean-icon.svg";
import OutdoorCleanIcon from "/src/assets/icons/kategori/outdoor-clean-icon.svg";

const recentSearches = [
  {
    icon: CategoryIcon,
    alt: "City",
    title: "Aarhus",
    subtitle: "Danmarks næststørste by",
  },
  {
    icon: CategoryIcon,
    alt: "Tree",
    title: "Hovedstad Danmark",
    subtitle: "København",
  },
  {
    icon: ShopCleanIcon,
    alt: "Shopping bag",
    title: "Vintage shop i Aarhus",
    subtitle: "All Time Vintage",
  },
  {
    icon: CategoryIcon,
    alt: "City",
    title: "Odense",
    subtitle: "H.C. Andersens fødeby",
  },
  {
    icon: OutdoorCleanIcon,
    alt: "Tree",
    title: "Følg en hemmelig rute",
    subtitle: "Mystery Walk i Aarhus",
  },
  {
    icon: CategoryIcon,
    alt: "City",
    title: "Esbjerg",
    subtitle: "Vigtig havneby og energicentrum",
  },
];

function Explore() {
  const [activePage, setActiveState] = useState(0);

  return (
    <>
      {activePage === 0 && (
        <section id="explore-page">
          <TopBar
            title="Opdag noget nyt"
            showLeftIcon={false}
            showRightIcon={true}
            onLeftIconClick={() => {}}
            onRightIconClick={() => {}}
            leftIcon=""
            rightIcon={NotificaitonIcon}
          />

          <SearchBar
            showCancelIcon={false}
            placeholderText={"Søg efter steder..."}
            onclickMethod={() => setActiveState(1)}
            onBackClickMethod={() => {}}
          />

          <section className="explore-container">
            <div className="explore-near-you-container">
              <ExploreNearYou />
            </div>

            <h1>Vist for nyligt</h1>
            <div id="small-card-container">
              <SmallCard
                id={"0"}
                title={"Ridetur"}
                image={Rideturimage}
                pinIcon={pinIcon}
                location={"Tupiza, Bolivia"}
                showBookmarkIcon={true}
                disableNavigation={true}
              />
              <SmallCard
                id={"0"}
                title={"Fiskershop"}
                image={Fiskerspotimage}
                pinIcon={pinIcon}
                location={"Rurrenabaque, Bolivia"}
                showBookmarkIcon={true}
                disableNavigation={true}
              />
              <SmallCard
                id={"0"}
                title={"Lokal Marked"}
                image={Lokalmarkedimage}
                pinIcon={pinIcon}
                location={"Sucre, Bolivia"}
                showBookmarkIcon={true}
                disableNavigation={true}
              />
              <SmallCard
                id={"0"}
                title={"Lokal Shop"}
                image={Lokalshopimage}
                pinIcon={pinIcon}
                location={"Marrakech, Marokko"}
                showBookmarkIcon={true}
                disableNavigation={true}
              />
            </div>

            <div className="section-header">
              <h1>Hvor skal du hen?</h1>
              <h4>Udforsk skjulte steder i hele verden</h4>
            </div>
            <div id="country-circle-card-container">
              <CountryCircleCard image={Frankrigimage} countryName="Frankrig" />
              <CountryCircleCard image={Sverigeimage} countryName="Sverige" />
              <CountryCircleCard image={indiaimage} countryName="Indien" />
              <CountryCircleCard image={Brazilimage} countryName="Brasilien" />
              <CountryCircleCard
                image={Southafricaimage}
                countryName="Sydafrika"
              />
              <CountryCircleCard
                image={Mauritiusimage}
                countryName="Mauritius"
              />
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
          </section>
          <BottomNavigationBar />
        </section>
      )}

      {activePage === 1 && (
        <section id="search-page" className="explore-section">
          <SearchBar
            showCancelIcon={true}
            placeholderText={"Søg efter steder..."}
            onclickMethod={() => setActiveState(1)}
            onBackClickMethod={() => setActiveState(0)}
          />

          <div className="category-button-container">
            <CategoryButton icon={FilterIcon} title="Filter" showIcon={true} />
            <CategoryButton
              icon={""}
              title="Caféer og Restauranter"
              showIcon={false}
            />
            <CategoryButton icon={""} title="Outdoor" showIcon={false} />
            <CategoryButton icon={""} title="Shopping" showIcon={false} />
            <CategoryButton icon={""} title="Underholdning" showIcon={false} />
            <CategoryButton icon={""} title="Kunst" showIcon={false} />
          </div>

          <section className="search-container-explore">
            <div className="section-header-search">
              <h2>Seneste søgninger</h2>
              <h6 className="see-more-link">Se mere</h6>
            </div>

            <ul className="recent-search-list">
              {recentSearches.map((search, index) => (
                <li key={index} className="recent-search-item">
                  <img
                    src={search.icon}
                    alt={search.alt}
                    className="recent-search-icon"
                  />
                  <div className="recent-search-text">
                    <h3 className="recent-search-subtitle">
                      {search.subtitle}
                    </h3>
                    <h4 className="recent-search-title">{search.title}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
      )}
    </>
  );
}

export default Explore;
