import React from 'react';
import styles from "./home.module.css";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section  className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Hemalatha </h1>
            <h3 className={styles.description}>I'm a
                 <span>
                     <TypeAnimation
                        sequence={[
                        ' Web Designer',1000,
                        ' Front End Developer',1000,
                        ' Back End Developer',1000,
                        ' Full Stack Developer',1000,
                        ]}
                        speed={25}
                        repeat={Infinity}
                    />           
                 </span>
            </h3>
            <div className={styles.btn}>
            <a className={styles.contactBtn} href='https://drive.google.com/file/d/1NDRHwk3bIBe5spe1kcOyZ_HQBUZvoJZv/view?usp=sharing' target='_blank'>Resume</a>

            {/* <a className={styles.contactBtn}>Contact</a> */}
            </div>
            
        </div>

    </section>
  )
}

export default Home;