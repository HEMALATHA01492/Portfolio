import React from "react";
import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";
import Footer from "../footer/Footer";
import {FaLinkedin} from 'react-icons/fa';
import { ImMobile } from "react-icons/im";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>


        <div>
          <a href="mailto:hema01492@gmail.com" target="_blank">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="https://www.linkedin.com/in/hema01492" target="_blank">

            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://www.github.com/HEMALATHA01492" target="_blank">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </a>
          
      </div>
      
      </div>
      <div className={styles.mainLink}>
      <ul className={styles.links}>
      <li className={styles.link}>
        <ImMobile size={29}/> 9962998160</li>
      <li><MdEmail size={29} className={styles.emailImg}/><span className={styles.email}>hema01492@gmail.com</span></li>
      </ul>
      </div>
    </footer>
  );
};

export default Contact;
