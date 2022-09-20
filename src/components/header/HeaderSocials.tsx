import React, { useContext } from 'react';
import {BsLinkedin} from'react-icons/bs';
import {BsGithub, BsWhatsapp} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {HiMail} from 'react-icons/hi'
import { scrolledComponent } from '../../helper/scrolled';


const HeaderSocials = () => {

    const {scrolled, setScrolled}: any = useContext(scrolledComponent);
    return (
        <div
         className={scrolled === 'footer' || scrolled === '#contact' ? 'get-out header__socials' : 'header__socials'}>
            <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" className='linked' rel="noreferrer">
                <BsLinkedin />
            </a>

            <a href="https://github.com/Masoud-z" target="_blank" className='git' rel="noreferrer">
                <BsGithub />
            </a>
            
            <a href="https://twitter.com/Masoud_Zin" target="_blank" className='twit' rel="noreferrer">
                <AiFillTwitterCircle />
            </a>

            <a href="https://wa.me/+989148450108" target="_blank" rel="noreferrer">
                <BsWhatsapp className='whats' />
            </a>

            <a href="mailto:masoud.zeinalabedini@gmail.com" rel="noreferrer" className='mail'>
                <HiMail />
            </a>
        </div>
    );
};

export default HeaderSocials;