import React from "react";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <section className={styles.mainHeading}>
        <h3>Things I have made</h3>
        <div>
          <div className={styles.projectCard}>1</div>
          <div className={styles.projectCard}>2</div>
          <div className={styles.projectCard}>3</div>
        </div>
      </section>
      {/* Technologies */}
      <section className={styles.tech}>
        <h3>Things I know</h3>
        <div className={styles.headingHr}>
          <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="react-icon" />
          <img src="https://img.icons8.com/ios/256/html-5.png" alt="html5-icon" />
          <img src="https://img.icons8.com/ios/256/css3.png" alt="css3-icon" />
          <img src="https://img.icons8.com/ios/256/javascript.png" alt="js-icon" />
        </div>
      </section>
    </div>
  );
}
