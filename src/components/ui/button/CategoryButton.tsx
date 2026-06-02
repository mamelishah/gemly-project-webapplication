import "./CategoryButton.css"

function CategoryButton({ icon, title }) {
  return (
    <div className="category-button">
      <img src={icon} alt={title} className="category-icon" />
      <h5>{title}</h5>
    </div>
  );
}

export default CategoryButton;