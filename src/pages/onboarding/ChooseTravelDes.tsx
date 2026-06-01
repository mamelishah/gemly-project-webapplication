import { useState } from "react";
import "./onboarding.css";
import "./CreatePassword.css";
import "./chooseCountry.css";
import searchIcon from "/src/assets/icons/navbar/search-icon.svg";

function ChooseTravelDes() {
   const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="onboarding-page">
      <div className="main-content">
        <div className="text-container-onboarding">
          <h1 className="slide-title">Hvilke lande vil du gerne udforske?</h1>
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
            <div className="country-item">
              <img src="https://flagcdn.com/w40/be.png" alt="Belgien" />
              <p>Belgien</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/dk.png" alt="Danmark" />
              <p>Danmark</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/fi.png" alt="Finland" />
              <p>Finland</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/fr.png" alt="Frankrig" />
              <p>Frankrig</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/gr.png" alt="Grækenland" />
              <p>Grækenland</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/nl.png" alt="Holland" />
              <p>Holland</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/ie.png" alt="Irland" />
              <p>Irland</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/it.png" alt="Italien" />
              <p>Italien</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/no.png" alt="Norge" />
              <p>Norge</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/pl.png" alt="Polen" />
              <p>Polen</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/pt.png" alt="Portugal" />
              <p>Portugal</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/es.png" alt="Spanien" />
              <p>Spanien</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/se.png" alt="Sverige" />
              <p>Sverige</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/de.png" alt="Tyskland" />
              <p>Tyskland</p>
            </div>

            <div className="country-item">
              <img src="https://flagcdn.com/w40/at.png" alt="Østrig" />
              <p>Østrig</p>
            </div>
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default ChooseTravelDes;