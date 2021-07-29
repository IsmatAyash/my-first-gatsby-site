import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Page">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted : {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
