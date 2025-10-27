import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.contLoading}>
      <Image
        src="/logo-lomas.png"
        alt="logo-sb-legal"
        width={265}
        height={175}
         className={styles.logo}
      />
      <div className={styles.loader}>
        <p>Cargando...</p>
      </div>
      <div className={styles.contImage}>
        <Image src="/pic-bg-2.png" alt="logo-sb-legal" fill={true} />
      </div>
    </div>
  );
}
