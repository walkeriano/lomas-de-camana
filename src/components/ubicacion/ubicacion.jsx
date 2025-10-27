import styles from "./ubicacion.module.css";
import Image from "next/image";

export default function Ubicacion({ id }) {
  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.bgHero}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3492.2464329260283!2d-72.4254333302641!3d-16.71894875435409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQzJzA4LjAiUyA3MsKwMjUnMjguMCJX!5e0!3m2!1ses!2ses!4v1761587620284!5m2!1ses!2ses"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
}