exports.onCreatePage = ({ page, actions }) => {
  // NOTE: Logic for creating special rout for each character

  const { createPage } = actions;

  if (page.path.match(/^\/character/)) {
    page.matchPath = "/character/*";
    createPage(page);
  }
};
