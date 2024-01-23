import React, { useEffect, useRef } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

import { useColorMode } from "@chakra-ui/color-mode";

// Icons

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const resetInputs = () => {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((element) => {
    element.value = "";
  });
}

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tpurd1j",//mi correo
        "template_w9352p8",//template de correo
        form.current,//esta es una referencia al formulario
        "zQr6mXfWgva3bHdDF"//mi publick key
      )
      .then(
        (result) => {
          console.log(result.text);
          resetInputs();
          Swal.fire(
            "Bien Hecho",
            "Se envio su email correctamente.",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          resetInputs();
          Swal.fire(
            "Error",
            "No se pudo enviar el email, vuelve a intentar.",
            "error"
          );
        }
      );
  };

  return (
    <div
      className={`${styles.container} ${
        colorMode === "light" ? "" : styles.active
      }`}
      id="contact"
    >
      <p className={styles.title}>
        ¿Quieres <span>Contactarme</span>? 
      </p>
      <div className={styles.containerFlex}>
        <img src="/img/contact.svg" alt="contacto" data-aos="zoom-in-right" />
        <div data-aos="zoom-in-left">
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/tobias-molina/"
              target="_blank"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a href="https://github.com/TJMolina/" target="_blank">
              <GitHubIcon /> GitHub
            </a>
            <a
              href="mailto:contact.tobiasmolina160@gmail.com"
              target="_blank"
            >
              <MailOutlineIcon /> Gmail
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Nombre Completo"
              name="user_name"
              className="input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="input"
              required
            />
            <input
              type="tel"
              placeholder="Numero de Telefono"
              name="tel"
              className="input"
              required
            />
            <textarea
              name="message"
              required
              cols="30"
              rows="5"
              className="input"
              placeholder="Escribe tu Mensaje"
            ></textarea>
            <input
              type="submit"
              className={styles.submit}
              value="Enviar Mensaje"
            />
          </form>
        </div>
      </div>
      <p className={styles.footer}>
        Ultima edición 23 - 1 - 2024
      </p>
    </div>
  );
}

export default Contact;
