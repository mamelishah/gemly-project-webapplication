import "./Saved.css";
import SearchBar from "../components/ui/input/SearchBar";
import TopBar from "../components/ui/layout/TopBar";
import SavedCard from "../components/cards/savedCard/SavedCard";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";

function Saved() {
  return (
    <div className="saved-page">
      <TopBar
        title="Dine gemte steder"
        showLeftIcon={false}
        showRightIcon={false}
      />
      <SearchBar
        showCancelIcon={false}
        placeholderText={"Søg efter steder..."}
        onBackClickMethod={() => {}}
        onclickMethod={() => {}}
      />
      <h1 className="saved-album-title">Album</h1>
      <div className="saved-card-container">
        <SavedCard title="Frankrig" />
        <SavedCard title="Sverige" />
        <SavedCard title="Tyskland" />
        <SavedCard title="Albanien" />
        <SavedCard title="Belgien" />
        <SavedCard title="Portugal" />
      </div>
      <BottomNavigationBar />
    </div>
  );
}

export default Saved;
