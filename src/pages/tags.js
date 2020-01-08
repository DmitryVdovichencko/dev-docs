import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  
  return(

    <Layout>
         <h3>
            All tags
          </h3>
      
     

        {group.map((tag,i) => (
            <div key ={i}>
                <Link to={`/tags/${tag.fieldValue}`}>{` ${tag.fieldValue} (${tag.totalCount} posts)`}</Link>
                
            </div>
        
       
      
          )

        

     

        

        )}
      
    </Layout>

)}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`