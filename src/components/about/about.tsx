import './about.css';
import me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import CV from '../../assets/cv.pdf';

const About = () => {
    
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2 className='size'><span className='color'>About</span> Me</h2>

            <div className="container about__container">
                
                <div className="about__content">
                    
                    <div  className='border'>
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