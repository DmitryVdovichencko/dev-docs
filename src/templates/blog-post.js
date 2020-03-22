import React from "react"
import { graphql } from "gatsby"
import PostStyles from "./post.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const { post } = data

  return (
    <Layout>
      <SEO title="Home" />
      <div className={PostStyles.post}>
        <article
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
      }
    }
  }
`
