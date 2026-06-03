import "./CategoryButton.css"

interface CategoryProps {
  icon: string,
  title: string,
  showIcon: boolean
}

function CategoryButton({ icon, title, showIcon} : CategoryProps) {
  return (
    <div className="category-button">
{showIcon && (
  <img src={icon} alt={title} className="category-icon" />
)}      <h5>{title}</h5>
    </div>
  );
}

export default CategoryButton;