import * as React from "react";

import * as styles from "../styles/item.module.css";

const Item = ({ name }) => {
  return <div className={styles.item}>{name}</div>;
};

export default Item;
