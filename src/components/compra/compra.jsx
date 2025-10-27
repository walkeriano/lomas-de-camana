import styles from "./compra.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faPhoneVolume,
  faEnvelope,
  faNewspaper,
  faEarthAmericas,
  faMapLocationDot,
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
            width={120}
            height={85}
          />
        </div>
        <h2>
          todo listo para
          <br />
          <span>la venta</span>
        </h2>
        <section className={styles.flexButton}>
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2FCERTIFICADO%20DE%20PARAMETROS%20Y%20ZONIFICACION.pdf?alt=media&token=ad86dac9-f6f5-4878-8343-910e1f2411f1"
            target="_blank"
          >
            <div>
              <h3>Certificación</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faNewspaper} className={styles.icon} />
          </Link>
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2FPLANO%20DE%20UBICACIÓN%20(2).pdf?alt=media&token=99350f61-f238-49d6-98c5-ad1f942ccb2f"
            target="_blank"
          >
            <div>
              <h3>Planos</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faEarthAmericas} className={styles.icon} />
          </Link>
          <Link
            href="https://firebasestorage.googleapis.com/v0/b/big-barden.appspot.com/o/documents%2F1.-PERIMETRO.pdf?alt=media&token=ba861e42-5139-449b-b5c0-1228b886ffce"
            target="_blank"
          >
            <div>
              <h3>perimetro</h3>
              <p>Abrir</p>
            </div>
            <FontAwesomeIcon icon={faMapLocationDot} className={styles.icon} />
          </Link>
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
        <Image src="/pic-bg-4.png" alt="image-hero" fill={true} />
      </section>
    </section>
  );
}
