import React, { useEffect } from "react";
import styles from "../styles/About.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Components

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.container} id="about">
      <p className={styles.title}>
        Todo <span>Sobre Mi</span> y <span>Reconocimientos</span>
      </p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Sobre Mi
          </Tab>
          {/* <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Certificados
          </Tab> */}
          {/* <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Premios
          </Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel className={styles.TabPanel}>
            <div className={styles.about}>
              <img
                src="/img/sobremitab.png"
                alt="sobre mi"
                className={styles.imgLeft}
                data-aos="zoom-in"
              />
              <ul data-aos="zoom-in">
                <li>
                  <span className="about-title">Sobre Mi</span>
                  ¡Hola! Mi nombre es Tobias Molina tengo actualmente 19 años,
                  me gusta diseñar y programar aplicaciones para internet. Soy
                  un desarrollador dedicado, con fuertes habilidades de
                  resolución y de responsabilidad, buena atención al detalle y
                  la capacidad de escribir código eficiente.
                </li>
                <li>
                  <span className="about-title">Especialización</span>
                  Soy un programador full-stack con un enfoque en el lado
                  back-end. Desde los 16 años que estoy aprendiendo programación
                  y me estoy desarrollando constantemente, creando de a poco
                  nuevos proyectos. Mi objetivo profesional es seguir
                  aprendiendo y creciendo como programador, y estoy interesado
                  en trabajar en proyectos que me permitan aplicar mis
                  habilidades técnicas y resolver problemas complejos.
                </li>
                <li>
                  <span className="about-title">Actualmente</span>
                  Siempre estoy aprendiendo nuevas tecnologías y estoy buscando
                  nuevas oportunidades de trabajo en empresas innovadoras y
                  dinámicas.
                </li>
              </ul>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default About;
