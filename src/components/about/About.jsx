import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I'm a motivated Full Stack Developer with a passion for creating
                efficient, innovative and user-friendly web applications.
                Skilled in both front-end and back-end development, aspiring to
                work on challenging projects that allow me to apply my
                problem-solving abilities and creativity to deliver outstanding
                user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Engineering in Electronics and Communication</h3>
              <p>Tagore Engineering College, Chennai.</p>
              <p>CGPA:7.74</p>
              <p>2009-2013</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary Certificate</h3>
              <p>Percentage: 87%</p>
              <p>2007-2009</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Secondary School Certificate (10th)</h3>
              <p>Percentage: 91%</p>
              <p>2007</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
