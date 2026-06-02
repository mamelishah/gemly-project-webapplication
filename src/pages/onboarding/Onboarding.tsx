import "./onboarding.css";
import { useState, useRef } from "react";
import SlideCreateUser from "./SlideCreateUser";
import SlideCreatePassword from "./CreatePassword";
import TopBar from "../../components/ui/layout/TopBar";
import AddProfilImage from "./AddProfilImage";
import ChooseCountry from "./ChooseCountry";
import ChooseTravelDes from "./ChooseTravelDes";
import { useNavigate } from "react-router";

interface PaginationDotsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

function PaginationDots({ total, active, onChange }: PaginationDotsProps) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          style={{
            width: i === active ? "14px" : "10px",
            height: i === active ? "14px" : "10px",
            borderRadius: "50%",
            backgroundColor: i === active ? "#222" : "#bbb",
            border: "none",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}

function Onboarding() {
  const [activePage, setActivePage] = useState(0);
  const touchStartX = useRef<number>(0);
  const navigate = useNavigate();

  const pages = [
    <div className="onboarding-page" >
      <h1 id="onboarding-title">Velkommen til </h1>
      <h2 id="onboarding-subtitle">Gemly</h2>
      <h3 id="onboarding-subsubitle">Nu er du klar til at lave din egen profil</h3>
    </div>,
    <SlideCreateUser isActive={activePage === 1}/>,
    <SlideCreatePassword isActive={activePage === 2} />,
    <AddProfilImage />,
    <ChooseCountry />,
    <ChooseTravelDes />
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      if (activePage === pages.length - 1) {
        navigate("/explore"); 
      } else {
        setActivePage((prev) => prev + 1);
      }
    } else if (diff < -50) {
      setActivePage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="onboarding" className={`onboarding ${activePage === 0 ? "first-slide-bg" : ""}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="onboarding-element" id="onboarding-elements">
        <div className="onboarding-content">
          {pages.map((page, index) => (
            <div
              key={index}
              style={{ 
                display: index === activePage ? "block" : "none", 
                height: "100%" 
              }}
            >
              {page}
            </div>
          ))}
        </div>
        
        <div id="interative-content-onboarding">
          <PaginationDots total={pages.length} active={activePage} onChange={setActivePage} />
          
          {activePage === 0 && (
            <p id="swipe-info">SWIPE FOR MERE INFO</p>
          )}

          <button 
  id="next-button" 
  onTouchStart={(e) => e.stopPropagation()} 
  onTouchEnd={(e) => e.stopPropagation()}
  onClick={() => {
    if (activePage === pages.length - 1) {
      navigate("/explore"); 
    } else {
      setActivePage((prev) => prev + 1);
    }
  }}
>
  {activePage === 3 ? "Vælg et billede" : activePage === 5 ? "Afslut" : "Videre"}
</button>
          
          {activePage === 0 && <p id="already-user">Allerede bruger? <span><a href="/login">Login</a></span></p>}
          {activePage === 3 && <button id="skip-button">Spring over</button>}
        </div>
      </div>
    </section>
  );
}

export default Onboarding;