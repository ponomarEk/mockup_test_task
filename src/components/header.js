import * as React from "react";

import * as styles from "../styles/header.module.css";
import useQueryParam from "../hooks/useQueryParam";

const Header = ({ siteTitle }) => {
  const [search, setSearch] = useQueryParam("search", "");
  return (
    <header className={styles.header}>
      <h2>{siteTitle}</h2>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
    </header>
  );
};

export default Header;
