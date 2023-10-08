import React from "react";

import * as styles from "./LoadingIndicator.module.css";

const LoadingIndicator = () => {
  return (
    <div className={styles.spinner_overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingIndicator;
