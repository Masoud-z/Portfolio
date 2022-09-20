import { useState, useContext, useEffect } from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser,AiOutlineFileDone} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import { scrolledComponent } from '../../helper/scrolled';
import CV from '../../assets/cv.pdf';


const Nav = () => {

    const {scrolled, setScrolled}: any = useContext(scrolledComponent);
    const [active, setActive] = useState('#header');
    useEffect(()=>{
        setActive(scrolled);
    }, [scrolled])

    let showCTA = true;
    if( scrolled === '#header' || 
        scrolled === '#about' ||
        scrolled === 'footer') showCTA = false;
        

    return (
        <>
        <nav>
            <a
             href="#header"
             onClick={()=>setActive("#header")}
             className={active === '#header' ? 'active' : ''}>
                 <AiOutlineHome/>
            </a>

            <a
             href="#about"
             onClick={()=>setActive("#about")}
             className={active === '#about' ? 'active' : ''}>
                 <AiOutlineUser />
            </a>

            <a
             href="#experience"
             onClick={()=>setActive("#experience")}
             className={active === '#experience' ? 'active' : ''}>
                 <BiBook/>
            </a>

            <a
             href="#portfolio"
             onClick={()=>setActive("#portfolio")}
             className={active === '#portfolio' ? 'active' : ''}>
                 <AiOutlineFileDone />
            </a>

            {/* <a
             href="#testimonials"
             onClick={()=>setActive("#testimonials")}
             className={active === '#testimonials' ? 'active' : ''}>
                 <RiServiceLine className='tooltip'/>
            </a> */}

            <a
             href="#contact"
             onClick={()=>setActive("#contact")}
             className={active === '#contact' ? 'active' : ''}>
                 <BiMessageSquareDetail className='tooltip'/> 
            </a>
        </nav>


        <div className={ showCTA ?'cta__fixed' : 'cta__fixed out'}>

            <div className='btn__cv'> CV </div>
            <a href={CV} 
               download>
                <div className="circle"></div>
            </a>
        </div>
        </>
    );
};

export default Nav;