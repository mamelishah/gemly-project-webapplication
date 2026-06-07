import "./PostCategoryCard.css";
import { useState } from "react";

type Option = {
  name: string;
  code: string;
  icon?: string;
};

type PostCategoryCardProps = {
  categoryIcon: string;
  title: string;
  icon: string;
  options: Option[];
  onSelect: (value: string) => void;
};

function PostCategoryCard({ categoryIcon, title, icon, options, onSelect }: PostCategoryCardProps) {  const [searchQuery, setSearchQuery] = useState("");
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedCountry, setSelectedCountry] = useState<Option | null>(null);
const [pendingCountry, setPendingCountry] = useState<Option | null>(null);

    const filteredCountries = options.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  function openModal() {
    setPendingCountry(selectedCountry);
    setSearchQuery("");
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setPendingCountry(null);
  }

function confirmSelection() {
  if (pendingCountry) {
    setSelectedCountry(pendingCountry);
    onSelect(pendingCountry.name);
  }
  closeModal();
}

  return (
  <>
    <button className="post-category-card" onClick={openModal}>
  <div className="category-left">
  {selectedCountry ? (
    selectedCountry.icon ? (
      <img src={selectedCountry.icon} alt={selectedCountry.name} className="category-icon" />
    ) : (
      <img src={`https://flagcdn.com/w40/${selectedCountry.code}.png`} alt={selectedCountry.name} className="category-icon" />
    )
  ) : (
    <img src={categoryIcon} alt="Category Icon" className="category-icon" />
  )}
  <h4>{selectedCountry ? selectedCountry.name : title}</h4>
</div>
  <img src={icon} alt="Arrow" className="arrow-icon" />
</button>

    {isModalOpen && (
      <div
        className="modal-backdrop"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        <div className="country-modal">
          <div className="modal-header">
<h2>{title === "Tilføj lokation" ? "Vælg dit land" : "Tilføj kategori"}</h2>  <button className="modal-close-btn" onClick={closeModal}>✕</button>
</div>

          <input
            placeholder="Søg..."
            value={searchQuery}
            autoFocus
            onChange={(e) => setSearchQuery(e.target.value)}
          />

         <div className="country-list">
  {filteredCountries.map((option) => (
    <div
      key={option.code}
      className={`country-item ${pendingCountry?.code === option.code ? "selected" : ""}`}
      onClick={() => setPendingCountry(option)}
    >
      {option.icon ? (
        <img src={option.icon} alt={option.name} className="category-icon" />
      ) : (
        <img src={`https://flagcdn.com/w40/${option.code}.png`} alt={option.name} />
      )}
      <p>{option.name}</p>
    </div>
  ))}
</div>

          <div className="modal-footer">
            <button onClick={closeModal}>Annuller</button>
            <button onClick={confirmSelection} disabled={!pendingCountry}>Bekræft</button>
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default PostCategoryCard;
