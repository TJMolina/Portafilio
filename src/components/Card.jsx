import React from "react";
import styles from "../styles/Card.module.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Icons

import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

function Card(props) {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`${styles.card} ${colorMode === "light" ? "" : styles.active} ${props.teamwork === true ? styles.teamwork : ""}`}
    >
      <img src={`/img/projects/${props.img}`} alt={`${props.img}`} />
      <p className={styles.title}>{props.title}</p>
      <p>{props.message}</p>

      <p>
        <span>Tech Stack: </span> {props.stack}
      </p>
      
      <div className={styles.buttons}>
        <a href={props.viewURL} target="_BLANK">
          <VisibilityIcon />
        </a>
        <a href={props.githubURL} target="_BLANK">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Card;
