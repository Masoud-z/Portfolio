import React from 'react';
import {BsLinkedin} from'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {HiMail} from 'react-icons/hi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" className='linked' rel="noreferrer">
                <BsLinkedin />
            </a>

            <a href="https://github.com/Masoud-z" target="_blank" className='git' rel="noreferrer">
                <BsGithub />
            </a>
            
            <a href="https://twitter.com/Masoud_Zin" target="_blank" className='twit' rel="noreferrer">
                <AiFillTwitterCircle />
            </a>

            <a href="mailto:masoud.zeinalabedini@gmail.com" rel="noreferrer" className='mail'>
                <HiMail />
            </a>
        </div>
    );
};

export default HeaderSocials;