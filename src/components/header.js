import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={HeaderStyles.header}>
      <h1>
        <Link to="/">
          <span>{`${siteTitle} `} </span>
          <span role="img" aria-label="memo">📝</span>
          <span role="img" aria-label="book">📖</span>
          <span role="img" aria-label="mortar_board">🎓</span>
          <span role="img" aria-label="computer">💻</span>
        </Link>
      </h1>
      <nav className={HeaderStyles.nav}>
        <div className={HeaderStyles.nav__item}><Link to="/tags/js">JavaScript</Link></div>
        <div className={HeaderStyles.nav__item}><Link to="/tags/react">React</Link></div>
        <div className={HeaderStyles.nav__item}><Link to="/tags/redux">Redux</Link></div>
				<div className={HeaderStyles.nav__item}><Link to="/about">About</Link></div>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
