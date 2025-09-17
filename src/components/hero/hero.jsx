import styles from "./hero.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faShieldHalved,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero({ id }) {
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
        <h1>
          Venta segura
          <br />
          <span>e inmediata</span>
        </h1>
        <section className={styles.flexButton}>
          <button>
            <div>
              <h3>Certificados en Regla</h3>
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
            <button>
              <Image src="/bg-1.jpg" alt="img-opcion" fill={true} />
            </button>
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
            <source src="/nuevo-vid.mp4" type="video/mp4" />
            Tu navegador no soporta video en HTML5.
          </video>
        </div>
        <Image src="/bg-1.jpg" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
