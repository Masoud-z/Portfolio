import React from 'react';
import './footer.css';
import {BsLinkedin, BsInstagram} from'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>MASOUD</a>

            <ul className="permalinks">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://github.com"> <BsGithub/> </a>
                <a href="https://linkedin.com"> <BsLinkedin/> </a>
                <a href="https://twitter.com"> <BsTwitter/> </a>
                <a href="https://instagram.com"> <BsInstagram/> </a>
            </div>
        </footer>
    );
};

export default Footer;