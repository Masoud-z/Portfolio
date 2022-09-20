import './about.css';
import me from '../../assets/me-about.jpg';
import CV from '../../assets/cv.pdf';
import { useContext, useState } from 'react';
import { scrolledComponent } from '../../helper/scrolled';

const About = () => {

    const {scrolled, setScrolled}: any = useContext(scrolledComponent);

    
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='size'><span className='color'>About</span> Me</h2>

            <div className="container about__container">
                
                <div className="about__content">
                    
                    <div  className={scrolled==="#about"?'border':''}>
                        <p>I'm always looking for opportunities to expand upon my skills and am currently seeking a remote full-time junior web developer position or internship.</p>
                    </div>

                    <div className='cta'>
                        <a
                         href="#contact"
                         className='btn btn-primary'>
                            Let's Talk
                        </a>
                        <a
                         href={CV} 
                         download
                         className='btn'>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Masoud" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;