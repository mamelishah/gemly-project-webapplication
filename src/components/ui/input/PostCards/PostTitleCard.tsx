import "./PostTitleCard.css";
import { useState } from "react";

function PostTitleCard({ title }) {
  const [text, setText] = useState("");
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
        placeholder=""
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        maxLength={maxLength}
      />
    </div>
  );
}

export default PostTitleCard;
