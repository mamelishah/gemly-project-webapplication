import { useState } from "react";
import "./onboarding.css";
import "./CreatePassword.css";
import "./chooseCountry.css";
import searchIcon from "/src/assets/icons/navbar/search-icon.svg";

// 1. Lav en liste med alle landene og deres flag-koder
const COUNTRIES_DATA = [
  { name: "Belgien", code: "be" },
  { name: "Danmark", code: "dk" },
  { name: "Finland", code: "fi" },
  { name: "Frankrig", code: "fr" },
  { name: "Grækenland", code: "gr" },
  { name: "Holland", code: "nl" },
  { name: "Irland", code: "ie" },
  { name: "Italien", code: "it" },
  { name: "Norge", code: "no" },
  { name: "Polen", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Spanien", code: "es" },
  { name: "Sverige", code: "se" },
  { name: "Tyskland", code: "de" },
  { name: "Østrig", code: "at" },
];

function ChooseCountry() {
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Filtrer listen live baseret på hvad der skrives i input-feltet
  const filteredCountries = COUNTRIES_DATA.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="onboarding-page">
      <div className="main-content">
        <div className="text-container-onboarding">
          <h1 className="slide-title">Hvor kommer du fra?</h1>
          <h2 className="slide-subtitle"></h2>
          <p className="slide-infobox">Vælg hvilke lande du vil udforske</p>
        </div>

        <div className="search-container">
          <div className="searchbar-container">
            <img src={searchIcon} alt="Search" />
            <input
              id="search-input-country"
              name="search"
              value={searchQuery}
              placeholder="Søg..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div> 

          <div className="country-list">
            {/* 3. Hvis der er match, så loop igennem de filtrerede lande */}
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div className="country-item" key={country.code}>
                  <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              ))
            ) : (
              /* Hvis brugeren søger efter noget sludder, der ikke findes på listen: */
              <p style={{ padding: "10px 0", color: "#888", fontStyle: "italic" }}>
                Ingen lande fundet...
              </p>
            )}
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default ChooseCountry;