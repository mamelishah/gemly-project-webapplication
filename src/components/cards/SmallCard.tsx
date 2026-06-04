import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./SmallCard.css";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";
import MenuIcon from "/src/assets/icons/navigation/3Dots-icon.svg";

import DeleteIcon from "/src/assets/icons/EditAndDelete/delete-icon.svg";
import EditIcon from "/src/assets/icons/EditAndDelete/edit-icon.svg"

interface SmallCardProp {
  id: string; 
  image: string;
  title: string;
  pinIcon: string;
  location: string;
  showBookmarkIcon: boolean;
  onDelete?: () => void;
}

function SmallCard({ id, image, title, pinIcon, location, showBookmarkIcon, onDelete }: SmallCardProp) {  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <section id="small-card" onClick={handleClick}>
      {showBookmarkIcon ? null : (
        <div className="menu-button-container">
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen(true); }}>
            <img src={MenuIcon} />
          </button>
        </div>
      )}

      {menuOpen && createPortal(
  <div className="bottom-sheet-overlay" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}>
    <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
      <div className="bottom-sheet-handle" />
      <button className="bottom-sheet-item" onClick={() => { setMenuOpen(false); }}>
        <span><img src={EditIcon} alt="" /></span> Redigere opslaget
      </button>
      <button className="bottom-sheet-item" onClick={() => { setMenuOpen(false); onDelete?.(); }}>
  <span><img src={DeleteIcon} alt="" /></span> Slet opslaget
</button>
    </div>
  </div>,
  document.body
)}

      <img id="small-card-main-image" src={image} alt="Image" />
      <div id="small-card-content">
        <div id="small-card-title-row">
          <div id="small-card-title">
            <h2>{title}</h2>
          </div>
          {showBookmarkIcon ? (
            <button id="small-card-pin-button">
              <img src={pinIcon} alt={title} />
            </button>
          ) : null}
        </div>
        <div id="small-card-location">
          <img src={nearYou} alt={title} />
          <h5> {location}</h5>
        </div>
      </div>
    </section>
  );
}

export default SmallCard;