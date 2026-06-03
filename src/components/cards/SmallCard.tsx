import { useNavigate } from "react-router-dom";
import "./SmallCard.css";
import nearYou from "/src/assets/icons/Sortér efter/nearYou-icon.svg";

function SmallCard({
  id,
  image,
  title,
  pinIcon,
  location,
}: {
  id: string | number;
  image: string;
  title: string;
  pinIcon: string;
  location: string;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <section id="small-card" onClick={handleClick}>
      <img src={image} alt="Image" />
      <div id="small-card-content">
        <div id="small-card-title-row">
          <div id="small-card-title">
            <h2>{title}</h2>
          </div>
          <button id="small-card-pin-button">
            <img src={pinIcon} alt={title} />
          </button>
        </div>

        <div id="small-card-location">
          <button id="small-card-map-button">
            <img src={nearYou} alt={title} />
          </button>
          <h5> {location}</h5>
        </div>
      </div>
    </section>
  );
}

export default SmallCard;
