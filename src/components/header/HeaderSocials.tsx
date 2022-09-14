import React from 'react';
import {BsLinkedin} from'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" className='linked'>
                <BsLinkedin />
            </a>

            <a href="https://github.com/Masoud-z" target="_blank" className='git'>
                <BsGithub />
            </a>
            
            <a href="https://twitter.com/Masoud_Zin" target="_blank" className='twit'>
                <BsTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;