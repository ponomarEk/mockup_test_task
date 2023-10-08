import React, { useState } from "react";
import { Link } from "@reach/router";

import { useCharacters } from "../hooks/useCharacters";

import * as styles from "../styles/Search.module.css";

const Search = () => {
  const { handleSearch, resetPage } = useCharacters();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchValue);
    resetPage();
  };

  return (
    <div className={styles.search_bar}>
      <input
        type="search"
        className={styles.search_input}
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      <Link to="/" className={styles.search_button} onClick={handleSearchClick}>
        Search
      </Link>
    </div>
  );
};

export default Search;
