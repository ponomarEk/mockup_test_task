import * as React from "react";

import * as styles from "../styles/itemsList.module.css";

import Item from "./item";

const ItemsList = ({ data }) => (
  <>
    <h3>Items List</h3>
    <div className={styles.items_list}>
      {data.map(curr => (
        <Item key={curr} name={curr} />
      ))}
    </div>
  </>
);

export default ItemsList;
