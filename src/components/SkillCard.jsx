import React from 'react'

import styles from "../styles/SkillCard.module.css"

import { useColorMode } from "@chakra-ui/color-mode";

function SkillCard(props) {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={`${styles.container} ${
      colorMode === "light" ? "" : styles.active
    }`}>
      
      <img src={`/img/icons/${props.img}.svg`} alt={props.img} />
      <p>{props.title}</p>
    </div>
  )
}

export default SkillCard
