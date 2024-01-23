import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

import Card from "../components/Card";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="projects"
    >
      <p className={styles.title}>
        Mis <span>Proyectos</span>
      </p>
      <div className={styles.containerCards} data-aos="fade-up">
        <Card
          img="talkmy-512x512.png"
          title="TalkMy!"
          message="Este proyecto es una aplicación web que permite crear notas de texto y guardarlas localmente o en la nube. También se puede escuchar las notas con la síntesis de voz del navegador. Es un proyecto individual y proximamente se desarrollará una versión descargable para móviles."
          stack="React, NextJS, PHP, MySQL."
          viewURL="http://talkmy.vercel.app/"
          githubURL="https://github.com/TJMolina/TalkMy"
          teamwork={false}
        />
      </div>
    </div>
  );
}

export default Projects;
