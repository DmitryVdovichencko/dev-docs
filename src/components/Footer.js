import { Link } from "gatsby"
import React from "react"
import FooterStyles from "./footer.module.scss"
const Footer = () => (
  <footer className={FooterStyles.footer}>
      <nav className={FooterStyles.nav}>
			<div className={FooterStyles.nav__item}><Link to="/tags">All tags</Link></div>
        <div className={FooterStyles.nav__item}><Link to="/tags/js">JavaScript</Link></div>
        <div className={FooterStyles.nav__item}><Link to="/tags/react">React</Link></div>
        <div className={FooterStyles.nav__item}><Link to="/tags/redux">Redux</Link></div>
				<div className={FooterStyles.nav__item}><Link to="/about">About</Link></div>
      </nav>
			<div>{`© ${new Date().getFullYear()}, Built with  `}<a href="https://www.gatsbyjs.org">Gatsby</a></div>

  </footer>
)


export default Footer