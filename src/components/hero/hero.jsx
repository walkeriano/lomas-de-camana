"use client";
import React, { useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faShieldHalved,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero({ id }) {
  const [selectedCard, setSelectedCard] = useState("/nuevo-vid.mp4");

  const videoCards = [
    "/nuevo-vid.mp4",
    "/nuevo-vid-2.mp4",
    "/nuevo-vid-3.mp4",
    "/nuevo-vid-4.mp4",
  ];

  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.titleHero}>
        <div className={styles.logoNav}>
          <Image
            src="/logo-lomas.png"
            alt="imagen-general"
            width={200}
            height={110}
          />
        </div>

        <h1>
          Venta segura
          <br />
          <span>e inmediata</span>
        </h1>

        <section className={styles.flexButton}>
          <button>
            <div>
              <h3>Certificación</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
          </button>

          <button>
            <div>
              <h3>Respaldo Legal</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faShieldHalved} className={styles.icon} />
          </button>
        </section>
      </section>

      <section className={styles.bgHero}>
        <section className={styles.btnImage}>
          <div>
            <p>Vistas generales</p>
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </div>
          <section className={styles.flexOptions}>
            {videoCards.map((vid, index) => (
              <button
                key={index}
                className={`${styles.boxImage} ${
                  selectedCard === vid ? styles.active : ""
                }`}
                onClick={() => setSelectedCard(vid)}
              >
                <video
                  src={vid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.thumbVideo}
                />
              </button>
            ))}
          </section>
        </section>
        <div className={styles.vid}>
          <video
            key={selectedCard}
            autoPlay
            loop
            muted
            playsInline
            poster="/bg-1.jpg"
          >
            <source src={selectedCard} type="video/mp4" />
            Tu navegador no soporta video en HTML5.
          </video>
        </div>
      </section>
    </section>
  );
}
