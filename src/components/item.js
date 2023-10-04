import * as React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/item.module.css";

const Item = ({ name }) => {
  return (
    <Link to={`/${name.toLowerCase()}`} className={styles.item}>
      {name}
    </Link>
  );
};

export default Item;
