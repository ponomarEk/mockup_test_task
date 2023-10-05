const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query QueryData {
      countriesData {
        countries {
          name
          capital
          code
          currency
        }
      }
    }
  `);

  data.countriesData.countries.forEach(country => {
    const { name, capital, code, currency } = country;

    actions.createPage({
      path: `/${name.toLowerCase()}`,
      component: path.resolve("./src/templates/innerPage.js"),
      context: { name, capital, code, currency },
    });
  });

};
