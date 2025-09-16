import styles from "./beneficios.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchoolFlag, faPlaneDeparture, faChevronDown,faStore, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Beneficios({ id }) {
  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.titleHero}>
        <div className={styles.flexTitle}>
          <h3>Detalles de los beneficios</h3>
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
      </section>
      <section className={styles.bgHero}>
        <section className={styles.btnImage}>
          <div>
            <p>Vistas generales</p>
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
        <Image src="/bg-1.jpg" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
