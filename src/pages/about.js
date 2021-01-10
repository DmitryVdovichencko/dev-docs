import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import developer from "../images/developer.svg"
import AboutStyles from "./about.module.scss"
import Social from "../components/Social";

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Development docs | About" />

    <h1>
			About Me
    </h1>
		<div className={AboutStyles.content}>
		<img width="150px" src={developer}></img>
		<div className={AboutStyles.content__text}>
			<h3> Hi, my name is Dmitry. I'm software engineer &#128400;</h3>
			<p>Here is my article translations to Russian, conspects, and posts about web development. This site has no ads, sponsors, affiliates, or social media.</p>
			<p>Feel free to get in touch about posts and translations.</p>
			<h3>
			Here is my contacts:
    </h3>
			<Social />
		</div>
    </div>
  </Layout>
)

export default AboutPage
