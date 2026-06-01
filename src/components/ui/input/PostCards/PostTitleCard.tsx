import "/PostTitleCard.css"

function PostTitleCard({ title }) {
  return (
    <div className="post-title-card">
      <h2>{title}</h2>
    </div>
  );
}

export default PostTitleCard;