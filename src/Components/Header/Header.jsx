import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.gurgaonMap}>
        <img src="./images/gurgaon-map.png" alt="gurgaon-map" />
      </div>
      <div className={styles.headerText}>
        <p>Hi, I am Vinay Gupta.</p>
        <p>Front End Developer from Gurgaon.</p>
      </div>
    </div>
  );
}
