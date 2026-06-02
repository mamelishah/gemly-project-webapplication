import { useState } from "react";
import "./SearchBar.css";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";
import searchIcon from "/src/assets/icons/navbar/search-icon.svg";

function SearchBar({ showCancelIcon, placeholderText }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <form id="searchbar-form" role="search" onSubmit={handleSearch}>
        <div className="searchbar">
          <img src={searchIcon} alt="Search" />
          <input
            id="search-input"
            name="search"
            value={searchQuery}
            placeholder={placeholderText}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {showCancelIcon ? (
          <img src={cancelIcon} alt="Clear" onClick={handleClear} />
        ) : null}
      </form>
    </>
  );
}

export default SearchBar;
