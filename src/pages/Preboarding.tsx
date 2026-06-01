import "./Preboarding.css";
import { useState } from "react";


interface PaginationDotsProps {
  total: number;
  active: number;
  onChange: (index: number) => void;
}

const pages = [
   <div className="preboarding-page1">
      <h1 id="preboarding-title">
        Appen der gør det nemmere at planlægge dine eventyrer
      </h1>
      <h2 id="brand-name">Gemly</h2>
      </div>,
  <div className="preboarding-page2">
    {/* Side 2 indhold */}
  </div>,
  <div className="preboarding-page3">
    {/* Side 3 indhold */}
  </div>,
  <div className="preboarding-page4">
    {/* Side 4 indhold */}
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

  return (
    <section id="preboarding" className="preboarding">
      <div className="preboarding-content">
        <PaginationDots total={4} active={activePage} onChange={setActivePage} />
            {pages[activePage]}
      </div>
      <div id="interative-content">
        <p id="swipe-info">SWIPE FOR MERE INFO</p>
        <button id="next-button" onClick={() => setActivePage((prev) => (prev + 1) % 3)}>
          Videre
        </button>
        <p id="already-user">Allerede bruger? <span><a href="/login">Login</a></span></p>
        </div>
    </section>
  );
}

export default Preboarding;
