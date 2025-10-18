import styles from "./compra.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faPhoneVolume,
  faEnvelope,
  faNewspaper,
  faShieldHalved,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Compra({ id }) {
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
        <h2>
          todo listo para
          <br />
          <span>la venta</span>
        </h2>
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
            <p>reserva una visita guiada</p>
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </div>
          <form action="" className={styles.formContact}>
            <label htmlFor="">
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <input type="text" placeholder="Nombre completo..." />
            </label>
            <label htmlFor="">
              <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
              <input type="number" placeholder="Nº contacto..." />
            </label>
            <label htmlFor="">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <input type="email" placeholder="Correo de contacto..." />
            </label>
            <button type="submit">
              Reservar
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </button>
          </form>
        </section>
        <Image src="/pic-bg-1.png" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
