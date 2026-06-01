import "/PostPictureCard.css";

function PostPictureCard({ image }) {
  return (
    <div className="post-picture-card">
      <img src={image} alt="Post" />
    </div>
  );
}

export default PostPictureCard;
