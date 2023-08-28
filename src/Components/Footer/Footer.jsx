import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* HR Design */}
      <div className={styles.footer__row}></div>
      {/* Resume Interested */}
      <section className={styles.interested}>
        <p>Interested in hiring?</p>
        <a href="https://drive.google.com/file/d/1o0SYqHYgN_3t0BZgVPyzcOwpHWLv-SNn/view?usp=share_link">Click Me!</a>
      </section>
      <div className={styles.footer__row}></div>
      {/* Social Media Starts */}
      <section className={styles.social}>
        {/* Email */}
        <a
          className={styles.socialBox}
          target="_blank"
          rel="noreferrer"
          href="mailto:vinay.dhyutidhara.com"
        >
          <div className={styles.socialBoxItem}>
            <img src="https://img.icons8.com/?size=2x&id=12580&format=png" alt="email-icon" />
            <p>Email me</p>
          </div>
        </a>
        {/* GitHub */}
        <a
          className={styles.socialBox}
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/vdhyutidhara"
        >
          <div className={styles.socialBoxItem}>
            <img src="https://img.icons8.com/?size=2x&id=AZOZNnY73haj&format=png" alt="github-icon" />
            <p>
              Follow on GitHub
            </p>
          </div>
        </a>
        {/* LinkedIn */}
        <a
          className={styles.socialBox}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/vdhyutidhara"
        >
          <div className={styles.socialBoxItem}>
            <img src="https://img.icons8.com/?size=2x&id=447&format=png" alt="" />
            <p>
              Follow on LinkedIn
            </p>
          </div>
        </a>
        {/* Social Media Ends */}
      </section>
      <section>
        <a
          className={styles.inspiration}
          href="https://canalstreet.market/"
          target="_blank"
          rel="noreferrer"
        >
          Design Inspiration from Canal Street Market 2022
        </a>
      </section>
    </div >
  );
}
