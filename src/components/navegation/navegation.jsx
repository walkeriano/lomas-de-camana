import React from "react";
import styles from "./navegation.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCube,
  faGift,
  faMapLocationDot,
  faCartShopping,
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Navegation() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.generalNav}>
      <div className={styles.logoNav}>
        <Image
          src="/logo-lomas.png"
          alt="imagen-general"
          width={210}
          height={115}
        />
      </div>
      <section className={styles.containerNavigation}>
        <button onClick={() => scrollToSection("hero")}>
          <FontAwesomeIcon icon={faExpand} className={styles.icon} />
          <p>General</p>
        </button>
        <button onClick={() => scrollToSection("terreno")}>
          <FontAwesomeIcon icon={faCube} className={styles.icon} />
          <p>Terreno</p>
        </button>
        <button onClick={() => scrollToSection("beneficios")}>
          <FontAwesomeIcon icon={faGift} className={styles.icon} />
          <p>Beneficios</p>
        </button>
        <button onClick={() => scrollToSection("ubicacion")}>
          <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          <p>Ubicación</p>
        </button>
        <button onClick={() => scrollToSection("compra")}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
          <p>Compra</p>
        </button>
      </section>
      <section className={styles.contactChannels}>
        <Link
          href="https://wa.me/51983552696?text=Hola%20quiero%20reservar%20una%20visita"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnContact}
        >
          reservar visita
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
        </Link>
        <div className={styles.flexButton}>
          <Link
            href="https://wa.me/51983552696?text=Hola%20quiero%20reservar%20una%20visita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </Link>
          <Link href="tel:+51983552696">
            <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          </Link>
          <Link href="mailto: rafaelgonzales320@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </Link>
        </div>
      </section>
    </section>
  );
}
