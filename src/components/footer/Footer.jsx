import React from 'react';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {VscGithub } from 'react-icons/vsc';
import {CgMail} from 'react-icons/cg'

const Footer = () => {
  return (
    <div className="section">
    <h2 className="section__title" data-aos="fade-right">
      Get in <span className="different">Touch</span>
    </h2>
    <div className="contactMain">
      <div
        className="contactcontainer "
        data-aos="fade-right"
      >
        <a
          href="https://www.linkedin.com/in/boobathi-thillan-119392260/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin" />
        </a>
        <a
          href="https://github.com/BOOBATHITHILLAN"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub className="github" />
        </a>
        
        <a
          href="mailto:boobathithillan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CgMail className="email" />
        </a>
        <a href="tel:+91-8637421253" target="_blank" rel="noreferrer">
          <BsFillTelephoneFill className="phone" />
        </a>
      </div>
      <div className="mailNumber" data-aos="fade-right">
        <div>
          <span>
            <CgMail className="email" />
          </span>
          <span>
            <p>boobathithillan@gmail.com</p>
          </span>
        </div>
        <div className="iconsCont">
          <span>
            <BsFillTelephoneFill className="phone" />
          </span>
          <span>
            <p>+91-8637421253</p>
          </span>
        </div>
      </div>
    </div>
  </div>  )
}

export default Footer