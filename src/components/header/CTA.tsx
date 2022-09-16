import React from 'react';
import CV from '../../assets/cv.pdf';


const CTA = () => {
    return (
        <div className='cta'>
            <a
             href={CV} 
             download
             className='btn btn__header'>
                Download CV
            </a>
            <a
             href="#contact"
             className='btn btn-primary btn__header'>
                Let't Talk
            </a>
        </div>
    );
};

export default CTA;