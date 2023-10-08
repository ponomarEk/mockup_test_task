import React from "react";
import { STATUS, GENDERS } from "../../constans";
import SelectFilter from "./SelectFilter";

import * as styles from "../styles/FilterSettings.module.css";

const FilterSettings = () => {
  return (
    <div className={styles.filter_settings}>
      <SelectFilter selectType={GENDERS} />
      <SelectFilter selectType={STATUS} />
    </div>
  );
};

export default FilterSettings;
