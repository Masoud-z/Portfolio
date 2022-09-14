import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
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
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineMail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>Masoud.Zeinalabedini@gmail.com</h5>
                    <a href="mailto:masoud.zeinalabedini@gmail.com" target="_blank" rel="noreferrer" >
                        Send a message
                    </a>
                </article>

                <article className="contact__option">
                    <BsLinkedin className='contact__option-icon' />
                    <h4>Linkedin</h4>
                    <h5>
                        <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" rel="noreferrer"  className='no-link-effect'>
                            Masoud Zeinalabedini
                        </a>
                    </h5>
                    <a href="https://www.linkedin.com/in/masoud-zeinalabedini/" target="_blank" rel="noreferrer" >
                        View profile
                    </a>
                </article>

                <article className="contact__option">
                    <BsWhatsapp className='contact__option-icon' />
                    <h4>WhatsApp</h4>
                    <h5>
                        <a href="https://wa.me/+989148450108" target="_blank" rel="noreferrer" className='no-link-effect'>
                            +98 914 845 0108
                        </a>
                    </h5>
                    <a href="https://wa.me/+989148450108" target="_blank" rel="noreferrer" >
                        Send a message
                    </a>
                </article>
                </div>
            

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                    <ToastContainer autoClose={1000} position="top-center"/>
                </form>

            </div>
        </section>
    );
};

export default Contact;