import "./PostButtonCard.css";

function PostButtonCard({
  title,
  classNameButton,
  onClickMethod,
}: {
  title: string;
  classNameButton?: string;
  onClickMethod?: () => void;
}) {
  return (
    <button
      className={`post-button ${classNameButton}`}
      onClick={onClickMethod}
      type="button"
    >
      {title}
    </button>
  );
}

export default PostButtonCard;
