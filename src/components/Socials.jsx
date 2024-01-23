import React from "react";
import styles from "../styles/Socials.module.css";

import 'animate.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Socials() {
  return (
    <div className={styles.box}>
      <a href="https://github.com/TJMolina/" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <GitHubIcon />
      </a>

      <a href="https://www.linkedin.com/in/tobias-molina/" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <LinkedInIcon />
      </a>

      <a href="mailto:contact.tobiasmolina160@gmail.com" target="_BLANK" className="animate__animated animate__zoomInLeft">
        <MailOutlineIcon />
      </a>

      <a href="#top" className={`${styles.arrow} animate__animated animate__slideInRight`}>
        <ArrowUpwardIcon />
      </a>
    </div>
  );
}

export default Socials;
