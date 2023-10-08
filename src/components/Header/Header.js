import React from "react";

import Search from "../Search/Search";

import * as styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Rick and Morty Gatsby Prod</h1>
        <Search />
      </div>
    </header>
  );
};

export default Header;
