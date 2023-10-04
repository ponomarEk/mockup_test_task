import * as React from "react";

import "../styles/header.css";

const Header = ({ siteTitle }) => (
  <header className="header">
    <h2>{siteTitle}</h2>
    <input type="search" placeholder="Search..." />
  </header>
);

export default Header;
