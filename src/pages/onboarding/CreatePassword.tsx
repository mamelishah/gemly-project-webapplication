import { useState, useEffect, useRef } from "react"; // 1. Tilføjet useEffect og useRef her
import "./onboarding.css";
import "./slideCreateUser.css";

interface SlideProps {
  isActive: boolean;
}

function CreatePassword({ isActive }: SlideProps) {
  const [password, setPassword] = useState(""); 
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50); 
    }
  }, [isActive]);

  return (
    <div className="onboarding-page">
      <div className="main-content">
        <div className="text-container-onboarding">
          <h1 className="slide-title">Vælg adgangskode</h1>
          <h2 className="slide-subtitle"></h2>
          <p className="slide-infobox">Lav en adgangskode med mindst 8 tegn. Det skal være noget andre ikke kan gætte.</p>
        </div>

        <div className="input-container">
          <input
            ref={inputRef} 
            type="password"
            maxLength={20}
            placeholder="Vælg en adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="char-count">{password.length}/20</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;