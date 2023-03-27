import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulLabelPage(slug: { eq: $slug }) {
      title
      description {
        description
      }
    }
  }
`;

const LabelPage = ({ data: { contentfulLabelPage } }) => {
  return (
    <div>
      <h1>{contentfulLabelPage.title}</h1>
      <p>{contentfulLabelPage.description.description}</p>
    </div>
  );
};

LabelPage.propTypes = {
  data: PropTypes.shape({
    contentfulLabelPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LabelPage;
