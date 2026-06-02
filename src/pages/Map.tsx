import React from "react";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import CategoryButton from "../components/ui/button/CategoryButton";
import FilterIcon from "../assets/icons/navigation/filter-icon.svg";
import "./Map.css";
import SearchBar from "../components/ui/input/SearchBar";

function Map() {
  return (
    <div >
      <div>Map</div>
      <div>
        <SearchBar />
      </div>
      <div className="category-button-container">
        <CategoryButton icon={FilterIcon} title="Filter" />
        <CategoryButton icon={FilterIcon} title="Caféer og Restauranter" />
        <CategoryButton icon={FilterIcon} title="Outdoor" />
        <CategoryButton icon={FilterIcon} title="Shopping" />
        <CategoryButton icon={FilterIcon} title="Underholdning" />
        <CategoryButton icon={FilterIcon} title="Kunst" />
      </div>
      <BottomNavigationBar />
    </div>
  );
}

export default Map;
