import * as React from "react";

import "../styles/filterSettings.css";

const FilterSettings = () => {
  return (
    <>
      <h3>Filter Settings</h3>
      <div className="filter-settings">
        <select className="filter-action">
          <option defaultChecked>Empty</option>
        </select>
        <select className="filter-action">
          <option defaultChecked>Empty</option>
        </select>
        <select className="filter-action">
          <option defaultChecked>Empty</option>
        </select>
      </div>
    </>
  );
};

export default FilterSettings;
