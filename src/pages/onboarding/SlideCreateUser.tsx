import {useState, useEffect, useRef} from "react";
import "./onboarding.css";
import "./slideCreateUser.css";

import {InputField} from "../../components/index"

interface SlideProps {
  isActive: boolean;
}


function SlideCreateUser({isActive}: SlideProps) {
  const [username, setUsername] = useState("");

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
          <h1 className="slide-title">Hvad skal vi kalde dig?</h1>
          <p className="slide-infobox">Lav et brugernavn ud fra dit navn. Du kan ændre det når som helst.</p>
        </div>

        <div className="input-container">
          <form action="">
            <InputField
                      inputRef={inputRef}
    type="text"
    placeholder="Vælg et brugernavn"
    value={username}
    onChange={setUsername}
    maxLength={20}
    label="brugernavn"
    id="input-create-username"
          />
          </form>
          <span className="char-count">{username.length}/20</span>
        </div>
      </div>
    </div>
  );
}

export default SlideCreateUser;