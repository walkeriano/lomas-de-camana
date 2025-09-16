import styles from "./ubicacion.module.css";
import Image from "next/image";

export default function Ubicacion({ id }) {
  return (
    <section id={id} className={styles.generalHero}>
      <section className={styles.bgHero}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.805097786735!2d-77.0319887246377!3d-12.125484043372037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81ec5d54d07%3A0xe9df3ef854963a95!2sAv.%20Jos%C3%A9%20Larco%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2ses!4v1746188563144!5m2!1ses!2ses"
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
