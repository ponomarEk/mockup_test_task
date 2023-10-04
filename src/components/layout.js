import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../styles/layout.css";

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
      <div className="content">
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
