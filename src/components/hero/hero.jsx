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
import Link from "next/link";

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
          <Link href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2F1.-PERIMETRO.pdf?alt=media&token=ba861e42-5139-449b-b5c0-1228b886ffce" target="_blank" >
            <div>
              <h3>Certificación</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
          </Link>

          <Link href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2FPLANO%20DE%20UBICACIÓN%20(2).pdf?alt=media&token=99350f61-f238-49d6-98c5-ad1f942ccb2f" target="_blank">
            <div>
              <h3>Planos</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
          </Link>
          <Link href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2FCERTIFICADO%20DE%20PARAMETROS%20Y%20ZONIFICACION.pdf?alt=media&token=ad86dac9-f6f5-4878-8343-910e1f2411f1" target="_blank">
            <div>
              <h3>perimetro</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faShieldHalved} className={styles.icon} />
          </Link>
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
