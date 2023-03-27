const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    query {
      allContentfulLabelPage {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allContentfulLabelPage.nodes.forEach((node) => {
    const { slug } = node;
    createPage({
      path: `/${slug}/`,
      component: path.resolve("./src/templates/label-page/index.jsx"),
      context: {
        slug,
      },
    });
  });
};
