import "./PostTitleCard.css"

function PostTitleCard({ title }) {
  return (
    <div>
      <input
        className="post-title-card"
        type={title}
        placeholder="Skriv en passende titel"
      />
    </div>
  );
}

export default PostTitleCard;