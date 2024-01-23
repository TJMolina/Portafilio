import React from "react";
import styles from "../styles/Home.module.css";

import { useColorMode } from "@chakra-ui/color-mode";

import "animate.css";

function Home() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="home"
    >
      <div
        className={`${styles.presentation}`}
      >
        <p>Hola, mi nombre es</p>
        <h1>Tobias Javier Molina</h1>
        <h2>Full Stack Developer</h2>
        <p className={styles.year}>19 años</p>
        <a href="#contact">
          Contactarme
        </a>
      </div>
      <div className={styles.image}>
        <img
          src="/img/Profile.jpeg"
          alt="Tobias Molina"
          className="animate__animated animate__zoomIn"
        />
      </div>
    </div>
  );
}

export default Home;
