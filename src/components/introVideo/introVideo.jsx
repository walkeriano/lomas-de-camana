import React, { useState } from "react";
import styles from "./introVideo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function IntroVideo() {
  const [videoShow, setVideoShow] = useState(true);

  return (
    <>
      {videoShow && (
        <section className={styles.containerVideoGeneral}>
          <section className={styles.containerGeneral}>
            <div className={styles.boxVideo}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KpXNzbDkG3Q?si=gN3rHqfYe9UJql-R"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <button onClick={()=> setVideoShow(false)}>
              comenzar
              <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
            </button>
          </section>
          <span></span>
        </section>
      )}
    </>
  );
}
