import "./PostCategoryCard.css";

function PostCategoryCard({ categoryIcon, title, icon }) {
  return (
    <button className="post-category-card">
      <div className="category-left">
        <img src={categoryIcon} alt="Category Icon" className="category-icon" />
        <h4>{title}</h4>
      </div>
      <img src={icon} alt="Arrow" className="arrow-icon" />
    </button>
  );
}

export default PostCategoryCard;
