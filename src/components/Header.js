import React from "react";

import Search from "./Search";

import * as styles from "../styles/components/Header.module.css";

const Header = ({ onSearch, setCharactersPage }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Rick and Morty Gatsby Prod</h1>
        <Search onSearch={onSearch} setCharactersPage={setCharactersPage} />
      </div>
    </header>
  );
};

export default Header;
