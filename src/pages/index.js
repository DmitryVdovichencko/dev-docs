import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <h3>
      Welcome to my Development Documents in English and in Russian Languge as
      well.
      <span role="img" aria-label="sparkles">
        ✨
      </span>
    </h3>

    <p>
      Now go read something great.{" "}
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </p>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div>
        <Link key={index} to={node.fields.slug}>{`${index + 1}. ${
          node.frontmatter.title
        }`}</Link>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
