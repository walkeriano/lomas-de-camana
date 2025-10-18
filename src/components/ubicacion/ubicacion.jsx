import styles from "./ubicacion.module.css";
import Image from "next/image";

export default function Ubicacion({ id }) {
  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.bgHero}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1835419291124!2d-72.4199819!3d-16.717691400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91411203877490b3%3A0xb4b6751761e4f378!2sPuente%20de%20Quilca!5e0!3m2!1ses!2ses!4v1760824696445!5m2!1ses!2ses"
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
