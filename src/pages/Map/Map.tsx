import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import BottomNavigationBar from "../../components/ui/layout/bottom-navigation-bar/BottomNavigationBar";
import CategoryButton from "../../components/ui/button/CategoryButton";
import FilterIcon from "../../assets/icons/navigation/filter-icon.svg";
import "./Map.css";
import SearchBar from "../../components/ui/input/SearchBar";

import ArtIcon from "../../assets/icons/kategori/art-icon-filled.svg";
import CafeIcon from "../../assets/icons/kategori/cafe-icon-filled.svg";
import OutdoorIcon from "../../assets/icons/kategori/outdoor-icon-filled.svg";
import ShoppingIcon from "../../assets/icons/kategori/shop-icon-filled.svg";
import UnderholdningIcon from "../../assets/icons/kategori/entertainment-icon-filled.svg";



const categoryIcons: Record<string, string> = {
  "Kunst": ArtIcon,
  "Caféer og Restauranter": CafeIcon,
  "Outdoor": OutdoorIcon,
  "Shopping": ShoppingIcon,
  "Underholdning": UnderholdningIcon,
};

function createCategoryIcon(category: string) {
  const iconUrl = categoryIcons[category];
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 68px;
      height: 68px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
    ">
      <img src="${iconUrl}" style="width: 100%; height: 100%; object-fit: contain;" />
    </div>`,
    iconSize: [68, 68],
    iconAnchor: [28, 28],  
    popupAnchor: [0, -28], 
  });
}

const userIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 20px;
    height: 20px;
    background-color: #8ab87a;
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const nichePlaces = [
  { id: 1, name: "Den Hemmelige Have", lat: 56.162939, lng: 10.203921, category: "Outdoor", description: "En skjult have bag de gamle mure." },
  { id: 2, name: "Retro Vinylcafé", lat: 56.157672, lng: 10.210507, category: "Caféer og Restauranter", description: "Sip kaffe mens du bladrer i LP'er." },
  { id: 3, name: "Gadekunst-strædet", lat: 56.160000, lng: 10.198000, category: "Kunst", description: "Farverige muralmalerier fra lokale kunstnere." },
];

function GoToLocation({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.flyTo([lat, lng], 14);
  return null;
}

function Map() {
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const categories = ["Caféer og Restauranter", "Outdoor", "Shopping", "Underholdning", "Kunst"];


useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    (err) => {
      console.log("Kunne ikke hente lokation", err);
    }
  );
}, []);

  return (
    <div className="map-page">
      <div className="map-top-bar">
        <SearchBar
          showCancelIcon={true}
          placeholderText={"Søg efter steder..."}
          onclickMethod={() => {}}
          onBackClickMethod={() => {}}
        />
        <div className="category-button-container-map">
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
        
      > <TileLayer         
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

  
     {location && <GoToLocation lat={location.lat} lng={location.lng} />}
    {location && (
      <Marker position={[location.lat, location.lng]} icon={userIcon} />
    )}

        {nichePlaces.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]} icon={createCategoryIcon(place.category)}>
          </Marker>
        ))}
      </MapContainer>

      <BottomNavigationBar />
    </div>
  );
}

export default Map;