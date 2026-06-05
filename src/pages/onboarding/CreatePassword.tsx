import { useState, useEffect, useRef } from "react"; 
import "./onboarding.css";
import "./slideCreateUser.css";

import {InputField} from "../../components/index"


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
          <p className="slide-infobox">Lav en adgangskode med mindst 8 tegn. Det skal være noget andre ikke kan gætte.</p>
        </div>

        <div className="input-container">
          <form action="">
            <InputField
            inputRef={inputRef}
            type="password"
            maxLength={20}
            placeholder="Vælg en adgangskode"
            value={password}
            onChange={setPassword}
                label="brugernavn"
    id="input-password"
          />
          </form>
          <span className="char-count">{password.length}/20</span>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;