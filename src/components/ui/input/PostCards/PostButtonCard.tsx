import "./PostButtonCard.css";

function PostButtonCard() {
  return (
    <button className="post-button" onClick={() => alert("Post submitted!")}>
      Slå op
    </button>
  );
}

export default PostButtonCard;
