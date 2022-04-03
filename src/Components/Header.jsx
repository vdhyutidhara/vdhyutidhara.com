import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <section>
        <h1 className={styles.headerText}>
          Hello, My name is <a href="#"> Vinay Gupta</a>. I am from Earth.
          It's feel nice to see you here.
          Scroll below to know something interesting about me.
        </h1>
      </section>
    </div>
  );
}
