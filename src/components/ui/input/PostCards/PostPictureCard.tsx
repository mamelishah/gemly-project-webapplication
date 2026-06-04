import "./PostPictureCard.css";
import { useRef, useState, useEffect } from "react";

type PostPictureCardProps = {
  icon: string;
  onImagesSelect: (files: File[]) => void;
  existingImages?: string[]; 
};

function PostPictureCard({ icon, onImagesSelect, existingImages = [] }: PostPictureCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);
const [previews, setPreviews] = useState<string[]>([]);

  function handleClick() {
    inputRef.current?.click();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
    onImagesSelect(files);
  }


useEffect(() => {
  if (existingImages.length > 0) {
    setPreviews(existingImages);
  }
}, [existingImages]);

  return (
    <div className={`post-picture-row ${previews.length === 0 ? "is-empty" : ""}`}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
      />

      {previews.map((src, i) => (
        <img key={i} src={src} alt={`Billede ${i + 1}`} className="picture-preview" />
      ))}

      <button className="picture-add-btn" onClick={handleClick}>
        <img src={icon} alt="Add" className="icon-image" />
        {previews.length === 0 && <h6>Tilføj billede</h6>}
      </button>
    </div>
  );
}

export default PostPictureCard;