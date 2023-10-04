import * as React from "react";

import * as styles from "../styles/header.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h2>{siteTitle}</h2>
    <input type="search" placeholder="Search..." />
  </header>
);

export default Header;
