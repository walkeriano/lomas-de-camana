import React, { useState } from "react";
import styles from "./beneficios.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchoolFlag, faPlaneDeparture, faChevronDown,faStore, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Beneficios({ id }) {
    const [show, setShow] = useState(true);

  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.titleHero}>
        <div className={styles.logoNav}>
          <Image
            src="/logo-lomas.png"
            alt="imagen-general"
            width={200}
            height={80}
          />
        </div>
        <div className={styles.flexTitle}>
          <h3>Grandes beneficios</h3>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </div>
        <section className={styles.containerItems}>
          <section className={styles.itemDato}>
            <div>
              <h4>10 min del centro</h4>
            </div>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>centros comerciales</h4>
            </div>
            <FontAwesomeIcon icon={faStore} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>Instituciones educativas</h4>
            </div>
            <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>5km del aereopuerto</h4>
            </div>
            <FontAwesomeIcon icon={faPlaneDeparture} className={styles.icon} />
          </section>
          
        </section>
        {show ? (
          <button onClick={()=>setShow(false)} className={styles.btnActive}>ver detalles</button>
        ) : (
          <>
            <section className={styles.containerItemsTwo}>
          <section className={styles.itemDato}>
            <div>
              <h4>10 min del centro</h4>
            </div>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>centros comerciales</h4>
            </div>
            <FontAwesomeIcon icon={faStore} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>Instituciones educativas</h4>
            </div>
            <FontAwesomeIcon icon={faSchoolFlag} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <h4>5km del aereopuerto</h4>
            </div>
            <FontAwesomeIcon icon={faPlaneDeparture} className={styles.icon} />
          </section>
          
        </section>
            <button  onClick={()=>setShow(true)} className={styles.btnActive}>ocultar</button>
          </>
        )}
      </section>
      <section className={styles.bgHero}>
        <section className={styles.btnImage}>
          <div>
            <p>Vistas generales</p>
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </div>
          <section className={styles.flexOptions}>
            <button>
              <Image src="/bg-1.jpg" alt="img-opcion" fill={true} />
            </button>
            <button>
              <Image src="/bg-1.jpg" alt="img-opcion" fill={true} />
            </button>
            <button>
              <Image src="/bg-1.jpg" alt="img-opcion" fill={true} />
            </button>
          </section>
        </section>
        <div className={styles.vid}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/bg-1.jpg"
          >
            <source src="/nuevo-vid-6.mp4" type="video/mp4" />
            Tu navegador no soporta video en HTML5.
          </video>
        </div>
        <Image src="/pic-bg-2.png" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
