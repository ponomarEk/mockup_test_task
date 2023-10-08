import React from "react";

import { STATUS, GENDERS } from "../../../constants";

import { Filter } from "../Filter";

import * as styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.filter_settings}>
      <Filter filterType={GENDERS} />
      <Filter filterType={STATUS} />
    </div>
  );
};

export default Filters;
