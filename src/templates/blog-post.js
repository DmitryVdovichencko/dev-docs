import React from "react"
import { graphql } from "gatsby"
import PostStyles from "./post.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
export default ({ data }) => {
  const { post } = data

  return (
    <Layout>
      <SEO title="Home" />
      <div className={PostStyles.post}>
      
        <article className="markdown-body">
        <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
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
