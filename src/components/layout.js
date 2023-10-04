import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "../styles/layout.module.css";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={styles.content}>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
