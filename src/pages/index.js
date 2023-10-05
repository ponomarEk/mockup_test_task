import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ItemsList from "../components/itemsList";
import FilterSettings from "../components/filterSettings";

const IndexPage = ({ data }) => (
  <Layout>
    <FilterSettings />
    <ItemsList countriesData={data.countriesData} />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export const itemsListQuery = graphql`
  query QueryData {
    countriesData {
      countries {
        name
        code
      }
    }
  }
`;

export default IndexPage;
