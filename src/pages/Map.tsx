import React from "react";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import CategoryButton from "../components/ui/button/CategoryButton";
import FilterIcon from "../assets/icons/navigation/filter-icon.svg";
import "./Map.css";
import SearchBar from "../components/ui/input/SearchBar";

function Map() {
  return (
    <div >
      <div>
        <SearchBar
          showCancelIcon={true}
          placeholderText={"Søg efter steder..."}
          onclickMethod={() => {}}
          onBackClickMethod={() => {}}
        />
      </div>
      <div className="category-button-container">
        <CategoryButton icon={FilterIcon} title="Filter" showIcon={true}/>
        <CategoryButton icon={FilterIcon} title="Caféer og Restauranter" showIcon={true}/>
        <CategoryButton icon={FilterIcon} title="Outdoor" showIcon={true}/>
        <CategoryButton icon={FilterIcon} title="Shopping" showIcon={true}/>
        <CategoryButton icon={FilterIcon} title="Underholdning" showIcon={true}/>
        <CategoryButton icon={FilterIcon} title="Kunst" showIcon={true}/>
      </div>
      <BottomNavigationBar />
    </div>
  );
}

export default Map;
