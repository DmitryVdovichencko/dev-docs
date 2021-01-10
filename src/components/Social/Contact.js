import React from "react";
import contactStyles from "./contact.module.scss"

const Contact = props => {
  return (
    <div className={contactStyles.contact}>
      <a className={contactStyles.link} href={props.link}>
				<img className={contactStyles.icon} src={props.icon}></img>
				{ props.title && <span> { props.title }</span> }
			</a>
    </div>
  )
}

export default Contact