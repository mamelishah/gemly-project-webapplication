import {useState, useEffect, useRef} from "react";
import "./onboarding.css";
import "./slideCreateUser.css";


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
          <h2 className="slide-subtitle"></h2>
          <p className="slide-infobox">Lav et brugernavn ud fra dit navn. Du kan ændre det når som helst.</p>
        </div>

        <div className="input-container">
          <input
                      ref={inputRef} 

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