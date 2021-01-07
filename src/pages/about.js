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
		<div className={AboutStyles.content__text}>
			<h3> Hi, my name is Dmitry. I'm fullstack NodeJS & React developer &#128400;</h3>
			<p>Here is my conspects and article translations to Russian about web development.</p>
			<p>Feel free to get in touch about posts and translations.</p>
		</div>
    </div>
  </Layout>
)

export default AboutPage
