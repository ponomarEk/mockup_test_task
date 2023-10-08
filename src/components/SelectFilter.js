import React, { useState } from "react";

import { useCharacters } from "../hooks/useCharacters";

import * as styles from "../styles/SelectFilter.module.css";

const SelectFilter = ({ selectType }) => {
  const { name, optionsArray } = selectType;
  const { handleFilterChange, resetPage } = useCharacters();
  const [currentOption, setCurrentOption] = useState("");

  const handleSelectChange = (e) => {
    const {
      target: { value },
    } = e;

    setCurrentOption(value);
    handleFilterChange(name, value);
    resetPage();
  };

  return (
    <div>
      <label className={styles.filter_label}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <select
        value={currentOption}
        onChange={handleSelectChange}
        className={styles.filter_action}
      >
        <option defaultChecked value={""}>
          Disabled
        </option>
        {optionsArray.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
