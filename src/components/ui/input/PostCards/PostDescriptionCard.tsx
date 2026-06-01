import "./PostDescriptionCard.css";

function PostDescriptionCard({ description }) {
  return (
    <div>
      <input
        className="post-title-card"
        type={description}
        placeholder="Giv stedet en beskrivelse"
      />
    </div>
  );
}

export default PostDescriptionCard;

