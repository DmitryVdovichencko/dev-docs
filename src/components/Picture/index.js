import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PictureStyles from "./picture.module.scss"

const Picture = props => {
	const { url, title, name} = props;
	const imageUrl = `images/${url}`
  const data = useStaticQuery(graphql`
    query{
      pictures:allFile(
				filter: {relativePath: {regex: "/images/.*/"}}
      ) {
				nodes {
					name
					relativePath
					relativeDirectory
					childImageSharp {
						fluid(maxWidth: 600, quality: 90) {
							...GatsbyImageSharpFluid
						}
					}
				}

      }
    }
  `);
	console.log(data)
	const picture = data.pictures.nodes.filter((image) => image.relativePath === imageUrl)[0];
  return (
    <div className={PictureStyles.container}>
      {picture && <Img className={PictureStyles.image} fluid={picture.childImageSharp?.fluid} />}
			<div className={PictureStyles.title}>
				{title}
			</div>
      
    </div>
  )
}

export default Picture
