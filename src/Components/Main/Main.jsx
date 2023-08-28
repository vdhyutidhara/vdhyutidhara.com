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
          <img src="https://img.icons8.com/ios/256/html-5.png" alt="html5-icon" />
          <img src="https://img.icons8.com/ios/256/css3.png" alt="css3-icon" />
          <img src="https://img.icons8.com/ios/256/javascript.png" alt="js-icon" />
          <img src="https://img.icons8.com/?size=512&id=38388&format=png" alt="git-icon" />
          <img src="https://img.icons8.com/?size=512&id=58811&format=png" alt="react-icon" />
          <img src="https://img.icons8.com/?size=512&id=DYjckUr8cF8H&format=png" alt="sass-icon" />
          <img src="https://img.icons8.com/?size=512&id=vMqgHSToxrJR&format=png" alt="typescript-icon" />
          <img src="https://img.icons8.com/?size=512&id=m6GFODBlJETz&format=png" alt="netlify-icon" />
        </div>
      </section>
    </div>
  );
}
