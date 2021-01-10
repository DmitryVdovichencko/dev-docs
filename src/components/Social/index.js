import React from "react";
import Contact from "./Contact";
import gitHubIcon from "../../assets/icons/GitHub-Mark-120px-plus.png";
import gmailIcon from "../../assets/icons/logo_gmail_lockup_default_1x_r2.png";
import twitterIcon from "../../assets/icons/Twitter_Logo_Blue.svg";
import gitHubTitle from "../../assets/icons/GitHub_Logo.png";
import socialStyles from "./social.module.scss"
const contacts = [
	{
		title:<img height="32px" style={{marginBottom:"-7px"}} src={gitHubTitle}/>,
		link:"https://github.com/DmitryVdovichencko",
		icon: gitHubIcon
	},
	{
		link:"mailTo:dmitry.vdovichencko@gmail.com",
		icon: gmailIcon
	}
]

const Social = props => {
  return (
    <div className={socialStyles.social}>
      {contacts.map((contact) => <Contact {...contact} />)}
    </div>
  )
}

export default Social