import * as React from "react";

import * as styles from "../styles/filterSettings.module.css";

const FilterSettings = () => {
  return (
    <>
      <h3>Filter Settings</h3>
      <div className={styles.filter_settings}>
        <select className={styles.filter_action}>
          <option defaultChecked>Empty</option>
        </select>
        <select className={styles.filter_action}>
          <option defaultChecked>Empty</option>
        </select>
        <select className={styles.filter_action}>
          <option defaultChecked>Empty</option>
        </select>
      </div>
    </>
  );
};

export default FilterSettings;
