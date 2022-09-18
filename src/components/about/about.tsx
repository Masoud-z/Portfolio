import React, { useRef } from 'react';
import './about.css';
import me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    
    const test:any = useRef();
    
    

    return (
        <section id='about'>
            <h5 ref={test}>Get To Know</h5>
            <h2 className='size'><span className='color'>About</span> Me</h2>

            <div className="container about__container">
                
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                           <h5>Experience</h5>
                           <small>3+ Years Working</small> 
                        </article>
               
                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                           <h5>Clients</h5>
                           <small>200+ WorldWide</small> 
                        </article>
                  
                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                           <h5>Projects</h5>
                           <small>80+ Completed </small> 
                        </article>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, debitis similique, saepe doloremque sapiente necessitatibus ut reiciendis alias beatae totam atque ad minus excepturi quod quaerat hic earum numquam aspernatur?</p>

                    <a
                     href="#contact"
                     className='btn btn-primary'>
                        Let's Talk
                    </a>
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