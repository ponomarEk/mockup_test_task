import React from "react";

import useLoading from "../hooks/useLoadingData";

import Header from "./Header";
import GlobalSpinner from "./GlobalSpinner";

import * as styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const { isLoading } = useLoading();
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      {isLoading && <GlobalSpinner />}
    </div>
  );
};

export default Layout;
