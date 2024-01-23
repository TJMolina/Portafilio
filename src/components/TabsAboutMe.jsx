import React from "react";
import styles from "../styles/TabsAboutMe.module.css"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TabsAboutMe() {
  return (
    <Tabs className={styles.container}>
      <TabList className={styles.TabList}>
        <Tab className={styles.tab}>Sobre Mi</Tab>
        <Tab className={styles.tab}>Certificaciones</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsAboutMe;
