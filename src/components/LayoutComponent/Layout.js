import React from "react";

import { useLoadingIndicator } from "../../hooks";

import { Header } from "../Header";
import { LoadingIndicator } from "../LoadingIndicator";

import * as styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { isLoading } = useLoadingIndicator();

  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      {isLoading && <LoadingIndicator />}
    </div>
  );
};

export default Layout;
