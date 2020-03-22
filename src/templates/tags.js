import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <h3>{tagHeader}</h3>

      <div>
        {edges.map(({ node, index }) => {
          return (
            <div>
              <Link key={index} to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <p>{node.frontmatter.date}</p>
            </div>
          )
        })}

        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`
