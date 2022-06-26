import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <section>
        <h1 className={styles.headerText}>
          Hello, My name is <span> Vinay Gupta</span>.
          <br />I am from Earth.
          <br />
          It's feel nice to see you here.
          <br />
          Please scroll below.
        </h1>
      </section>
    </div>
  );
}
