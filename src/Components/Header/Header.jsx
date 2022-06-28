import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerNycMap}>
        <img className={styles.nycMap} src="/images/nyc-map.webp" alt="nyc-map" />
      </div>
      <div className={styles.headerText}>
        <p>
          Hi, I am Vinay Gupta,
          <br />a Web Developer from Earth.
          <br />Let me introduce myself.
        </p>
        <img src="/images/details.png" alt="my-info" />
      </div>
    </div>
  );
}
