import * as React from "react";

import Item from "./item";
import "../styles/itemsList.css";

const ItemsList = ({ data }) => (
  <>
    <h3>Items List</h3>
    <div className="items-list">
      {data.map(curr => (
        <Item key={curr} name={curr} />
      ))}
    </div>
  </>
);

export default ItemsList;
