
import NavigationIcon from "/src/assets/icons/card funktioner/navigation-icon.svg";
import CommentIcon from "/src/assets/icons/card funktioner/comment-icon.png";
import PinIcon from "/src/assets/icons/navbar/pin-icon.svg";
import MaplocationIcon from "/src/assets/icons/card funktioner/mapLocation-icon.svg";
import "./DetailCard.css"


interface DetailCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  location: string;
}
function DetailCard({ image, description, category, location }: DetailCardProps) {



  return (
    <div className="detail-card">
      <img className="detail-card-image" src={image} alt={description} />
      <div className="detail-card-functions"></div>
      <div className="detail-card-functions">
        <button>
          <img src={NavigationIcon} alt="Location" />
        </button>
        <button>
          <img src={CommentIcon} alt="Comment" />
        </button>
        <button>
          <img src={PinIcon} alt="Save" />
        </button>
      </div>

      <div className="detail-info-container">

        <div className="detail-card-category">
          <img className="detail-category-icon" src={category} alt="Category" />
          <h5>Outdoor</h5>
        </div>

        <div className="detail-card-location">
          <img
            className="detail-location-icon"
            src={MaplocationIcon}
            alt="Location"
          />
          <h5>Bolivia{location}</h5>
        </div>

        <div className="detail-card-open">
          <h6>Åben: Lukker kl. 18:00</h6>
        </div>

        <div className="detail-card-text">
          <h3>Beskrivelse:</h3>
          <h5>{description}</h5>
        </div>

      </div>
      
    </div>
  );
}

export default DetailCard;
