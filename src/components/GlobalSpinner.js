import React from "react";

import * as styles from "../styles/GlobalSpinner.module.css";

const GlobalSpinner = () => {
  return (
    <div className={styles.spinner_overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default GlobalSpinner;
