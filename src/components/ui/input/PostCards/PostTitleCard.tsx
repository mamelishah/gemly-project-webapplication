import "./PostTitleCard.css"

function PostTitleCard({ title }) {
  return (
    <div className="post-title-card">
      <h4>{title}</h4>
    </div>
  );
}

export default PostTitleCard;