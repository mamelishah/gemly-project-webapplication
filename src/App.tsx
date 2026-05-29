import './App.css'
import BottomNavigationBar from './components/ui/layout/bottom-navigation-bar/BottomNavigationBar.tsx';

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
      <BottomNavigationBar/>
    </>
  );
}

export default App;
