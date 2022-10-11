import React from 'react';
import './portfolio.css';
import { data } from './data'

const Portfolio = () => {

    const portfolio = data;
    

    return (
        <section id='portfolio'>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {portfolio.map(site=>{
                   return (
                    <article key={site.id} className="portfolio__item ">

                        <div className="portfolio__item-image">
                            <img src={site.img} alt={site.title} />
                        </div>
                        <h3>{site.title}</h3>

                        <div className="portfolio__item-cta">
                            <a
                            href={site.github}
                            target="_blank" 
                             rel="noopener noreferrer" 
                             className='btn font'>
                                Github
                            </a>
                            <a
                             href={site.live} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className='btn btn-primary font'>
                                Live Demo
                            </a>
                        </div>              
                </article>
                   );
                })}
               

               
                
            </div>
        </section>
    );
};

export default Portfolio;