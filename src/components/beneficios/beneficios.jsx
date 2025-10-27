import React, { useState } from "react";
import styles from "./beneficios.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchoolFlag,
  faPlaneDeparture,
  faChevronDown,
  faStore,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Beneficios({ id }) {
  const [show, setShow] = useState(true);

  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.titleHero}>
        <div className={styles.logoNav}>
          <Image
            src="/logo-lomas.png"
            alt="imagen-general"
            width={120}
            height={85}
          />
        </div>
        <div className={styles.flexTitle}>
          <h3>grandes beneficios</h3>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </div>
        <section className={styles.containerItems}>
          <section className={styles.itemDato}>
            <div>
              <h4>
                Terreno con zonificación residencial densidad media, listo para
                desarrollar
              </h4>
            </div>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>Fácil acceso a luz y agua</h4>
            </div>
            <FontAwesomeIcon icon={faStore} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>Hermosa vista al mar, valle y río</h4>
            </div>
            <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>Vías terrestres directas</h4>
            </div>
            <FontAwesomeIcon icon={faPlaneDeparture} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>⁠Rodeado de grandes proyectos</h4>
            </div>
            <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
          </section>
        </section>
        {show ? (
          <button onClick={() => setShow(false)} className={styles.btnActive}>
            ver detalles
          </button>
        ) : (
          <>
            <section className={styles.containerItemsTwo}>
              <section className={styles.itemDato}>
                <div>
                  <h4>
                    Terreno con zonificación residencial densidad media, listo
                    para desarrollar
                  </h4>
                </div>
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className={styles.icon}
                />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <h4>Fácil acceso a luz y agua</h4>
                </div>
                <FontAwesomeIcon icon={faStore} className={styles.icon} />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <h4>Hermosa vista al mar, valle y río</h4>
                </div>
                <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <h4>Vías terrestres directas</h4>
                </div>
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className={styles.icon}
                />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <h4>⁠Rodeado de grandes proyectos</h4>
                </div>
                <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
              </section>
            </section>
            <button onClick={() => setShow(true)} className={styles.btnActive}>
              ocultar
            </button>
          </>
        )}
      </section>
      <section className={styles.bgHero}>
        <div className={styles.vid}>
          <video autoPlay loop muted playsInline poster="/pic-big-5.jpg">
            <source src="/nuevo-vid-6.mp4" type="video/mp4" />
            Tu navegador no soporta video en HTML5.
          </video>
        </div>
      </section>
    </section>
  );
}
