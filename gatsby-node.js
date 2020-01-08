const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `` });    
        createNodeField({      
            node,      
            name: `slug`,      
            value: slug,    
        })
    
    }
  }

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions  
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    const blogPostTemplate = path.resolve("src/templates/blog-post.js")
    const tagTemplate = path.resolve("src/templates/tags.js")
    posts.forEach(({ node }) => {      
        createPage({        
            path: node.fields.slug,        
            component: blogPostTemplate,        
            context: {          
                // Data passed to context is available          
                // in page queries as GraphQL variables.          
            slug: node.fields.slug,        
            },      
        })    
    })
        // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })  
  })
}
