import React, { useEffect } from "react";
import styles from "../styles/Skills.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import technologies from '../assets/skills.json'
import SkillCard from "../components/SkillCard";

function skills() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.container} id="skills">
      <p className={styles.title}>
        Mis <span>Habilidades</span> tecnicas
      </p>
      <Tabs className={styles.containerTabs}>
        <TabList className={styles.TabList}>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Todo
          </Tab>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Frontend
          </Tab>
          <Tab
            className={`${styles.tab} ${
              colorMode === "light" ? "" : styles.active
            }`}
            _selected={{ color: "white", bg: "#FECC01" }}
          >
            Backend
          </Tab>
        </TabList>

        <TabPanels className={styles.panels} data-aos="fade-up">
          <TabPanel className={styles.TabPanel}>
            {technologies.map((card, index) => (
              <SkillCard img={card.img} title={card.title} key={card.title} />
            ))}
          </TabPanel>

          <TabPanel className={styles.TabPanel}>
            {technologies.map((card, index) =>
              card.category !== "backend" ? (
                <SkillCard img={card.img} title={card.title} key={card.title} />
              ) : (
                ""
              )
            )}
          </TabPanel>

          <TabPanel className={styles.TabPanel}>
            {technologies.map((card, index) =>
              card.category !== "frontend" ? (
                <SkillCard img={card.img} title={card.title} key={card.title} />
              ) : (
                ""
              )
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default skills;
