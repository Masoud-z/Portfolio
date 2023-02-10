import {useContext} from 'react';
import './about.css';
import me from '../../assets/me-about.jpg';
import CV from '../../assets/cv.pdf';
import { scrolledComponent } from '../../helper/scrolled';


const About = () => {

    const {scrolled, setScrolled}: any = useContext(scrolledComponent);
    
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='size'><span className='color'>About</span> Me</h2>

            <div className="container about__container">
                
                <div className="about__content">
                    
                    <div  className="border">
                        <p>
                            Hi there! I'm <span className='name'>Masoud</span>, and I am a self tought <span className="color">Frontend developer</span> with a background in sale, game development and teaching. Some previous limited experience I had with HTML, CSS and JavaScript sparked an interest in web development that I was thrilled to pursue, and the more I learn the more I feel at home in the industry.
                            <br /> <br />
                            I'm always looking for opportunities to expand upon my skills and <span className="color"> am currently seeking a remote full-time junior Frontend developer position</span>.</p>
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
                    <div className={scrolled=== '#about' ? "about__me-image active" : "about__me-image"}>
                        <img src={me} alt="Masoud" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;