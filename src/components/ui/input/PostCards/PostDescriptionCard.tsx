import "./PostDescriptionCard.css";

function PostDescriptionCard({ description }) {
  return (
    <div className="post-description-card">
      <h4>{description}</h4>
    </div>
  );
}

export default PostDescriptionCard;

