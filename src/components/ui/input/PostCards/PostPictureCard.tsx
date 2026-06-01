import "./PostPictureCard.css";

function PostPictureCard({ image, icon }) {
  return (
    <div className="post-picture-card">
      <img src={image} alt="Post" />
      <div className="icon">
        <img src={icon} alt="Add" className="icon-image" />
      </div>
    </div>
  );
}

export default PostPictureCard;
