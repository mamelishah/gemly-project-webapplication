import "./PostDescriptionCard.css";
import { useState } from "react";

function PostDescriptionCard({ description }) {
  const [text, setText] = useState("");
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
        placeholder=""
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        maxLength={maxLength}
      />
    </div>
  );
}

export default PostDescriptionCard;
