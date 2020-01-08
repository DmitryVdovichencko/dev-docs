import React from "react"
import { graphql } from "gatsby"
import PostStyles from "./post.module.css"



export default ({ data }) => {  
    const {post} = data


    return (
        <div className={PostStyles.post}>

            <article className = 'markdown-body' dangerouslySetInnerHTML={{ __html: post.html }} /> 
        </div>
 
  
  
    
  )
}
export const query = graphql`  
    query($slug: String!) 
    {    
       post: markdownRemark(fields: { slug: { eq: $slug } }) 
            {      
                html 
                fields{
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