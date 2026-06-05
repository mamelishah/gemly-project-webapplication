import { useState } from "react";
import "./onboarding.css";
import "./CreatePassword.css";
import "./chooseCountry.css";
import searchIcon from "/src/assets/icons/navbar/search-icon.svg";

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

  const filteredCountries = COUNTRIES_DATA.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="onboarding-page">
      <div className="main-content">
        <div className="text-container-onboarding">
          <h1 className="slide-title">Hvor kommer du fra?</h1>
          <p className="slide-infobox">Vælg hvilke lande du vil udforske</p>
        </div>

        <div className="search-container">
          <div className="searchbar-container">
            <img src={searchIcon} alt="Search" />
            <form action="">
              <label htmlFor="search-input-country">Søg efter land</label>
            <input
              id="search-input-country"
              name="search"
              value={searchQuery}
              placeholder="Søg..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            </form>
          </div> 

          <div className="country-list">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div className="country-item" key={country.code}>
                  <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} />
                  <p>{country.name}</p>
                </div>
              ))
            ) : (
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