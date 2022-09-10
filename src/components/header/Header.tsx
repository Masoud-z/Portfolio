import React from 'react';
import CTA from './CTA';
import './header.css';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>
                    Masoud Zeinalabedini
                    </h1>
                <h5 className="text-light">
                    Front-End Developer
                </h5>
                <CTA />

                <HeaderSocials />

                <div className="me">
                    <img src={me} alt="Masoud" />
                </div>

                <a
                 href="#contact" 
                 className="scroll__down">
                    Scroll Down
                 </a>
            </div>
        </header>
    );
};

export default Header;