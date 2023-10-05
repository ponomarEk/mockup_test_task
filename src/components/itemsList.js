import * as React from "react";

import * as styles from "../styles/itemsList.module.css";

import Item from "./item";

const ItemsList = ({ countriesData }) => (
  <>
    <h3>Items List</h3>
    <div className={styles.items_list}>
      {countriesData.countries.map(curr => (
        <Item key={curr.code} name={curr.name} />
      ))}
    </div>
  </>
);

export default ItemsList;
