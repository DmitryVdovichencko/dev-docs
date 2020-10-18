import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import developer from "../images/developer.svg"
import AboutStyles from "./about.module.scss"
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Development docs | About" />

    <h1>
			About Me
    </h1>
		<div className={AboutStyles.content}>
		<img width="150px" src={developer}></img>
		<div>
			<p>This my conspects and article translations about web development.</p>
		</div>
    </div>
  </Layout>
)

export default AboutPage
