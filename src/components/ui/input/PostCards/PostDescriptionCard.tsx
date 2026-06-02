import "./PostDescriptionCard.css";

type PostDescriptionCardProps = {
  description: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function PostDescriptionCard({
  description,
  text,
  setText,
}: PostDescriptionCardProps) {
  const maxLength = 100;

  return (
    <div className="post-description-wrapper">
      <div className="post-description-header">
        <label>{description}</label>
        <span className="character-count">
          {text.length}/{maxLength}
        </span>
      </div>

      <textarea
        className="post-description-card"
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        maxLength={maxLength}
      />
    </div>
  );
}

export default PostDescriptionCard;
