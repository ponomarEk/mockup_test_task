import React from "react";
import { STATUS, GENDERS } from "../../../constants";
import SelectFilter from "../Filter/Filter";

import * as styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filter_settings}>
      <SelectFilter filterType={GENDERS} />
      <SelectFilter filterType={STATUS} />
    </div>
  );
};

export default Filters;
