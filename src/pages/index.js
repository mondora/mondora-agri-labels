import React from "react";

import { graphql, useStaticQuery } from "gatsby";

const Homepage = () => {
  const { contentfulHomePage } = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        title
      }
    }
  `);
  return (
    <div>
      <h1>{contentfulHomePage.title}</h1>
    </div>
  );
};

export default Homepage;
