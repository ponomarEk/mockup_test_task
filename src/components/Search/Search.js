import React, { useState } from "react";
import { Link } from "@reach/router";

import { useCharacters } from "../../hooks";

import * as styles from "./Search.module.css";

const Search = () => {
  const { handleClickSearch, handleResetPage } = useCharacters();
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleClickSearchBtn = () => {
    handleClickSearch(searchValue);
    handleResetPage();
  };

  return (
    <div className={styles.search_bar}>
      <input
        type="search"
        className={styles.search_input}
        value={searchValue}
        onChange={handleChangeSearchValue}
        placeholder="Search..."
      />
      <Link
        to="/"
        className={styles.search_button}
        onClick={handleClickSearchBtn}
      >
        Search
      </Link>
    </div>
  );
};

export default Search;
