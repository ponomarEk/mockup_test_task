import * as React from "react";

import "../styles/item.css";

const Item = ({ name }) => {
  return <div className="item">{name}</div>;
};

export default Item;
