import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        Hi, I am Vinay Gupta.
        <br />Front End Developer from Earth.
      </div>
    </div>
  );
}
