import { useRef } from 'react';
import React from 'react';

import './contact.css';

import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = () => toast.success("Email sent!",{
        theme: "dark"
    });

    const form:any = useRef();

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm('masoud-contact', 'template_9mn2wir', form.current, 'CrjYs_4Qr36nkqtUW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
        notify();
      };
    

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2 className='size'>Contact Me</h2>

            <div className="container contact__container">
                <div className='connect__container'>
                    <h1>Let's Connect!</h1>
                </div>
                <div className="contact__options">
                    <h4> I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, or just want a quick chat, you can find me on social media or you can send me a message here!</h4>

                    <div className="cotact__options__social">
                        <a href="mailto:masoud.zeinalabedini@gmail.com" target="_blank" rel="noreferrer" >
                            <MdOutlineMail className='contact__option-icon' />
                        </a>

                        <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className='contact__option-icon' />
                        </a>

                        <a href="https://wa.me/+989148450108" target="_blank" rel="noreferrer">
                            <BsWhatsapp className='contact__option-icon' />
                        </a>

                        <a href="https://github.com/Masoud-z" target="_blank"  rel="noreferrer">
                            <BsGithub className='contact__option-icon'/>
                        </a>
                        
                        <a href="https://twitter.com/Masoud_Zin" target="_blank"  rel="noreferrer">
                            <AiOutlineTwitter className='contact__option-icon'/>
                        </a>

                    </div>
                </div>
            

                <form ref={form} onSubmit={sendEmail}>
                    <input
                     type="text" 
                     name="name" 
                     placeholder="Your Name" 
                     required/>

                    <input 
                     type="email" 
                     name="email" 
                     placeholder="Your Email" 
                     required/>

                    <textarea
                     name="message" 
                     rows={4} 
                     placeholder="Your Message" 
                     required></textarea>

                    <button
                     type="submit" 
                     className='btn btn-primary'>
                        Send Message
                    </button>

                    <ToastContainer
                     autoClose={1000} 
                     position="top-center"/>
                </form>

            </div>
        </section>
    );
};

export default Contact;