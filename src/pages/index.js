import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
const isTitleCyrillic = (title) => (/[aА-яЯ]/gm.test(title));
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Dimetrio development docs" />

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
    {data.allMdx.edges.map(({ node }, index) => (
      <div>
        <Link
          key={index}
          to={node.fields.slug}
        >{`${node.frontmatter.title}`}</Link>
        <p>{isTitleCyrillic(node.frontmatter.title) ? node.frontmatter.dateRu:node.frontmatter.dateEn}</p>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            dateRu: date(formatString: "DD MMMM, YYYY", locale:"ru")
            dateEn: date(formatString: "DD MMMM, YYYY", locale:"en")
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
