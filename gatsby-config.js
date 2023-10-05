module.exports = {
  siteMetadata: {
    title: `Mockup Test Task`,
    description: `Mockup web page for task task`,
    author: `@ponomarek`,
    siteUrl: `https://github.com/ponomarEk`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `CountriesData`,
        fieldName: `countriesData`,
        url: `https://countries.trevorblades.com/graphql`,
      },
    },
  ],
};
