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
          <div className={styles.projectCard}>4</div>
          <div className={styles.projectCard}>5</div>
          <div className={styles.projectCard}>6</div>
        </div>
      </section>
      {/* Technologies */}
      <section className={styles.tech}>
        <h3>Things I know</h3>
        <div className={styles.headingHr}></div>
      </section>
    </div>
  );
}
