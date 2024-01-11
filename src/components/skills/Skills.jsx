import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <ul className={styles.skillItems}>
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Front End Development</h3>
              <p>Languages:HTML5,CSS3,JavaScript(ES6+)</p>
              <p>Library:React.js</p>
              <p>CSS FrameWorks:Bootstrap,Tailwind CSS</p>
            </div>
          </li>
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Back End Development</h3>
              <p>Languages:JavaScript (Node.js)</p>
              <p>Framework:Express.js</p>
              <p>Database Management: MongoDB, MySQL</p>
            </div>
          </li>
          <li className={styles.skillItem}>
            <div className={styles.skillItemText}>
              <h3>Version Control and Deployment</h3>
              <p>Version Control: Git, GitHub</p>
              <p>Deployment: Netlify,Render</p>
              <p>Cloud Platforms: AWS (Amazon Web Services)</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
