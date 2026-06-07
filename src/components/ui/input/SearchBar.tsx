import { useState } from "react";
import "./SearchBar.css";
import cancelIcon from "/src/assets/icons/navigation/cancelBig-icon.svg";
import searchIcon from "/src/assets/icons/navbar/search-icon.svg";


interface searchBarProps {
  showCancelIcon: boolean
  placeholderText: string
  onclickMethod: () => void
  onBackClickMethod: () => void
}


function SearchBar({ showCancelIcon, placeholderText, onclickMethod, onBackClickMethod }: searchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");


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
            onClick={onclickMethod}
          />
        </div>

        {showCancelIcon ? (
          <img src={cancelIcon} alt="Clear" onClick={onBackClickMethod} />
        ) : null}
      </form>
    </>
  );
}

export default SearchBar;
