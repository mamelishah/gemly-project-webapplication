import "./PostPictureCard.css";

function PostPictureCard({ icon } : {icon: string}) {
  return (
    <div className="post-picture-card">
      {/* <img src={image} alt="Post" /> */}
      <div className="icon">
        <img src={icon} alt="Add" className="icon-image" />
        <h6>Tilføj billede</h6>
      </div>
    </div>
  );
}

export default PostPictureCard;
