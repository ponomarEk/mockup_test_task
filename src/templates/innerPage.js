import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const InnerPage = ({ pageContext }) => {
  const { name, code, capital, currency } = pageContext;
  return (
    <Layout>
      <h2>Name: {name}</h2>
      <h2>Code: {code}</h2>
      <h2>Capital: {capital}</h2>
      <h2>currency: {currency}</h2>
    </Layout>
  );
};

export const Head = () => <Seo title="Country Info" />;

export default InnerPage;
