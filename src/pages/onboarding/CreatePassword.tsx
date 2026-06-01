import {useState} from "react";
import "./onboarding.css";
import "./slideCreateUser.css";

function SlideCreateUser() {
  const [username, setUsername] = useState("");

  return (
    <div className="onboarding-page">
        <h1 className="slide-title">Opret bruger</h1>
        <div className="main-content">
        <div className="text-container">
          <h2 className="slide-subtitle">Vælg adgangskode</h2>
          <p className="slide-infobox">Lav en adgangskode med mindst 8 tegn. Det skal være noget andre ikke kan gætte.</p>
        </div>

        <div className="input-container">
          <input
            type="text"
            maxLength={20}
            placeholder="Vælg et brugernavn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="char-count">{username.length}/20</span>
        </div>
      </div>
    </div>
  );
}

export default SlideCreateUser;