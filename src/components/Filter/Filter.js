import React, { useState } from "react";

import { useCharacters } from "../../hooks";
import { toUpperCaseFirstLetter } from "../../utils";

import * as styles from "./Filter.module.css";

const Filter = ({ filterType }) => {
  const { name, optionsArray } = filterType;
  const { handleChangeFilter, handleResetPage } = useCharacters();
  const [currentOption, setCurrentOption] = useState("");

  const handleChangeSelect = ({ target }) => {
    setCurrentOption(target.value);
    handleChangeFilter(name, target.value);
    handleResetPage();
  };

  return (
    <div>
      <label className={styles.filter_label}>
        {toUpperCaseFirstLetter(name)}
      </label>
      <select
        value={currentOption}
        onChange={handleChangeSelect}
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

export default Filter;
