import "./onboarding.css";
import { useState, useRef } from "react";
import SlideCreateUser from "./SlideCreateUser";

interface PaginationDotsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}
const pages = [
  <div className="onboarding-page">
    <h1 id="onboarding-title">Velkommen til </h1>
    <h2 id="onboarding-subtitle">Gemly</h2>
    <h3 id="onboarding-subsubitle">Nu er du klar til at lave din egen profil</h3>
  </div>,
  <SlideCreateUser />,
  <div className="onboarding-page"></div>,
  <div className="onboarding-page"></div>,
];

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

   const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      setActivePage((prev) => Math.min(prev + 1, 3));
    } else if (diff < -50) {
      setActivePage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="onboarding" className="onboarding" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="onboarding-content">
        {pages[activePage]}
      </div>
      <div id="interative-content">
        <PaginationDots total={4} active={activePage} onChange={setActivePage} />
        <p id="swipe-info">SWIPE FOR MERE INFO</p>
        <button id="next-button" onClick={() => setActivePage((prev) => (prev + 1) % 4)}>
          Videre
        </button>
        <p id="already-user">Allerede bruger? <span><a href="/login">Login</a></span></p>
      </div>
    </section>
  )
}

export default Onboarding