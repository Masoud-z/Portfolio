import React from "react";
import "./footer.css";
import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo">MASOUD</a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="mailto:masoud.zeinalabedini@gmail.com">
          <MdOutlineMail />
        </a>

        <a
          href="https://www.linkedin.com/in/masoud-zeinalabedini/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a href="https://t.me/M_Zinalabedini" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>

        <a href="https://github.com/Masoud-z" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>

        <a
          href="https://twitter.com/Masoud_Zin"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
