// NOTE: Logic for creating special rout for each character

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/character/)) {
    page.matchPath = "/character/*";
    createPage(page);
  }
};
