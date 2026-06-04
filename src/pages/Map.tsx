import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BottomNavigationBar from "../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import CategoryButton from "../components/ui/button/CategoryButton";
import FilterIcon from "../assets/icons/navigation/filter-icon.svg";
import "./Map.css";
import SearchBar from "../components/ui/input/SearchBar";



const nichePlaces = [
  { id: 1, name: "Den Hemmelige Have", lat: 56.162939, lng: 10.203921, category: "Outdoor", description: "En skjult have bag de gamle mure." },
  { id: 2, name: "Retro Vinylcafé", lat: 56.157672, lng: 10.210507, category: "Caféer og Restauranter", description: "Sip kaffe mens du bladrer i LP'er." },
  { id: 3, name: "Gadekunst-strædet", lat: 56.160000, lng: 10.198000, category: "Kunst", description: "Farverige muralmalerier fra lokale kunstnere." },
];

function Map() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? nichePlaces.filter((p) => p.category === activeCategory)
    : nichePlaces;

  const categories = ["Caféer og Restauranter", "Outdoor", "Shopping", "Underholdning", "Kunst"];

  return (
    <div className="map-page">
      <div className="map-top-bar">
        <SearchBar
          showCancelIcon={true}
          placeholderText={"Søg efter steder..."}
          onclickMethod={() => {}}
          onBackClickMethod={() => {}}
        />
        <div className="category-button-container">
          <CategoryButton
            icon={FilterIcon}
            title="Filter"
            showIcon={true}
          />
          {categories.map((cat) => (
            <CategoryButton
              key={cat}
              icon={FilterIcon}
              title={cat}
              showIcon={true}
            />
          ))}
        </div>
      </div>

      <MapContainer
        center={[56.1629, 10.2039]}
        zoom={14}
        className="leaflet-map"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filtered.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              <em>{place.category}</em>
              <br />
              {place.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <BottomNavigationBar />
    </div>
  );
}

export default Map;