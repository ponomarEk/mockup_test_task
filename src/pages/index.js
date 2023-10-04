import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ItemsList from "../components/itemsList";
import FilterSettings from "../components/filterSettings";

const data = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

const IndexPage = () => (
  <Layout>
    <FilterSettings />
    <ItemsList data={data} />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
