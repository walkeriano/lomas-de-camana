import React, { useState } from "react";
import styles from "./terreno.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faPersonDigging,
  faChevronDown,
  faExpand,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

export default function Terreno({ id }) {
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
          <h3>Detalles del terreno</h3>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </div>
        <section className={styles.containerItems}>
          <section className={styles.itemDato}>
            <div>
              <p>Ubicación</p>
              <h4>Av. General 349, Arequipa, Perú.</h4>
            </div>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              className={styles.icon}
            />
          </section>
          <section className={styles.itemDato}>
            <div>
              <p>Dimensiones</p>
              <h4>300 m2</h4>
            </div>
            <FontAwesomeIcon icon={faExpand} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <p>Superficie</p>
              <h4>Lista para construir</h4>
            </div>
            <FontAwesomeIcon icon={faPersonDigging} className={styles.icon} />
          </section>
          <section className={styles.itemDato}>
            <div>
              <p>Longitud</p>
              <h4>78657465º</h4>
            </div>
            <FontAwesomeIcon icon={faEarthAmericas} className={styles.icon} />
          </section>
        </section>
        {show ? (
          <button onClick={()=>setShow(false)} className={styles.btnActive}>ver detalles</button>
        ) : (
          <>
            <section className={styles.containerItemsTwo}>
              <section className={styles.itemDato}>
                <div>
                  <p>Ubicación</p>
                  <h4>Av. General 349, Arequipa, Perú.</h4>
                </div>
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className={styles.icon}
                />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <p>Dimensiones</p>
                  <h4>300 m2</h4>
                </div>
                <FontAwesomeIcon icon={faExpand} className={styles.icon} />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <p>Superficie</p>
                  <h4>Lista para construir</h4>
                </div>
                <FontAwesomeIcon
                  icon={faPersonDigging}
                  className={styles.icon}
                />
              </section>
              <section className={styles.itemDato}>
                <div>
                  <p>Longitud</p>
                  <h4>78657465º</h4>
                </div>
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  className={styles.icon}
                />
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
        <Image src="/bg-2.jpg" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
