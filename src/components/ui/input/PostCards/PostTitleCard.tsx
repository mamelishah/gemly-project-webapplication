import "./PostTitleCard.css";

type PostTitleCardProps = {
  title: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function PostTitleCard({ title, text, setText }: PostTitleCardProps) {
  const maxLength = 25;

  return (
    <div className="post-title-wrapper">
      <div className="post-title-header">
        <label>{title}</label>
        <span className="character-count">
          {text.length}/{maxLength}
        </span>
      </div>

      <input
        className="post-title-card"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        maxLength={maxLength}
      />
    </div>
  );
}

export default PostTitleCard;
