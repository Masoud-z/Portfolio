import React, { useEffect, useState } from 'react';
import CTA from './CTA';
import './header.css';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    const fullName = "Masoud Zeinalabedini";
    const [text, setText] = useState('');
    const [delta, setDelta] =useState(300);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
            setDelta(300 - Math.random()*300);
        }, delta);
        return ()=>{clearInterval(ticker)}
    }, [text])

    const tick = ()=>{
        let updatedName = fullName.substring(0 , text.length + 1); 
        setText(updatedName);
    }
    return (
        <header id='header'>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>
                    {text}
                </h1>
                <h5 className="text-light front">
                    Frontend Developer
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