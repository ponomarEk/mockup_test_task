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
        // The unique name for each instance
        name: `pages`,
        // Path to the directory
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `RickAndMorty`,
        fieldName: `rickAndMorty`,
        url: `https://rickandmortyapi.com/graphql`,
      },
    },
  ],
};
