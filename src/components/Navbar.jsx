import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

import { useColorMode } from "@chakra-ui/color-mode";

import ToggleColorMode from "./ToggleColorMode";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// Components

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [clicked, SetClicked] = useState(false);

  const handleClick = () => {
    SetClicked(!clicked);
    console.log("clicked");
  };

  return (
    <header
      className={`${styles.header} ${
        colorMode === "light" ? "" : styles.headerDark
      }`}
    >
      <nav className={`${styles.navbar} ${
        colorMode === "light" ? "" : styles.navbarDark
      }`}>
        <a href="/" className={styles.logo}>
          Tobias<span>JM</span>
        </a>
        <ul>
          <div
            className={`links ${clicked ? styles.active : styles.links} 
                    `}
          >
            <a href="#home">
              <button onClick={() => SetClicked(false)}>Inicio</button>
            </a>

            <a href="#about">
              <button onClick={() => SetClicked(false)}>Sobre Mi</button>
            </a>

            <a href="#projects">
              <button onClick={() => SetClicked(false)}>Proyectos</button>
            </a>

            <a href="#skills">
              <button onClick={() => SetClicked(false)}>Habilidades</button>
            </a>

            <a href="#contact">
              <button onClick={() => SetClicked(false)}>Contacto</button>
            </a>
          </div>
          <div className={styles.burguer}>
            {clicked ? (
              <CloseIcon onClick={handleClick} className={styles.close} />
            ) : (
              <MenuIcon onClick={handleClick} />
            )}
          </div>

          <div className={`${clicked ? styles.deactivate : styles.moon}`}>
            <ToggleColorMode />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
