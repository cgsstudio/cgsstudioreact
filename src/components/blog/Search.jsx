import React, { useState } from "react";
import SearchIcon from "../../assets/images/icon/search.svg";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="widget">
      <form onSubmit={handleSubmit} className="wp-block-search__inside-wrapper">
        <input 
          type="search" 
          placeholder="Type keyword here" 
          className="wp-block-search__input" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button id="wp-block-search__button" type="submit">
          <img src={SearchIcon} alt="search" />
        </button>
      </form>
    </div>
  );
}

export default Search;
