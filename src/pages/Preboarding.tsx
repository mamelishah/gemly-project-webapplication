import "./Preboarding.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import Lottie from "lottie-react"; 
import searchAnimation from "../assets/lotties/seach-preboarding-animation.json";
import overlayAnimation from "../assets/lotties/overlay-map-preboarding-animation.json";
import savedAnimation from "../assets/lotties/saved-preboarding-animation.json";


interface PaginationDotsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

const LottiePlayer = (Lottie as any).default || Lottie;


const pages = [
  <div className="preboarding-page1">
    <h1 id="preboarding-title">
      Appen der gør det nemmere at planlægge dine eventyrer
    </h1>
    <h2 id="brand-name">
  {'Gemly'.split('').map((letter, i) => (
    <span key={i} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
      {letter}
    </span>
  ))}
</h2>
  </div>,
  <div className="preboarding-page">
    <div className="text-container">
      <h1 className="slide-title">Find de hemmelige steder til din næste rejse</h1>
      <h2 className="slide-infobox">Gemly samler din søgning efter hemmelige steder ét sted — så du slipper for at lede flere steder.</h2>
    </div>
    <div className="slide-image-container">
      <img src="/assets/preboarding1.png" alt="Preboarding 1" />
    </div> 
    
  </div>,
  <div className="preboarding-page">
    <div className="text-container">
      <h1 className="slide-title">Søg og filtrer</h1>
    <h2 className="slide-infobox">Gør det nemt at finde hemmelige steder, som lige netop du leder efter</h2>
    </div>
    <div className="slide-image-container">
      <LottiePlayer animationData={searchAnimation} loop={true} style={{ width: 300, height: 300 }} />
      <LottiePlayer animationData={overlayAnimation} loop={true} style={{ width: 300, height: 300 }} />
    </div> 
  </div>,
  <div className="preboarding-page4">
    <div className="text-container">
      <h1 className="slide-title">Gem dine yndlingssteder</h1>
    <h2 className="slide-infobox">Find og gem de steder, der betyder noget for dig</h2>
    </div>
    <div className="slide-image-container savedAnimation">
      <LottiePlayer animationData={savedAnimation} loop={true} style={{ width: 350, height: 350}} />
    </div>
  </div>,
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


function Preboarding() {
  const [activePage, setActivePage] = useState(0);
  const touchStartX = useRef<number>(0);
  const navigate = useNavigate();

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      if (activePage === 3) {
        navigate("/onboarding");
      } else {
        setActivePage((prev) => prev + 1);
      }
    } else if (diff < -50) {
      setActivePage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="preboarding" className="preboarding" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
  
      
      <div className="preboarding-content">
        {pages[activePage]}
      </div>
      <div id="interative-content">
        <PaginationDots total={4} active={activePage} onChange={setActivePage} />
        <p id="swipe-info">SWIPE FOR MERE INFO</p>
        <button 
  id="next-button" 
  onClick={() => {
    if (activePage === 3) {
      navigate("/onboarding");
    } else {
      setActivePage((prev) => prev + 1);
    }
  }}
>
  {activePage === 3 ? "Kom i gang" : "Videre"}
</button>
        <p id="already-user">Allerede bruger? <span><a href="/login">Login</a></span></p>
      </div>
    </section>
  );
}

export default Preboarding;
