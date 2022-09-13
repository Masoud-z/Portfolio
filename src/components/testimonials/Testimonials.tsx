import React from 'react';
import './testimonials.css';
import {Clients} from './data';
import { Navigation ,Pagination, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonials = () => {
    
  return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
             className="container testimonials__container"
             modules={[ Pagination, Navigation,EffectCoverflow]}
             spaceBetween={40}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true}}
             effect={"coverflow"}
             coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
             >
               
                {Clients.map(client=>{
                    return(
                        <SwiperSlide key={client.id} className='testimonials'>
                            <div className="client__avatar">
                                <img src={client.img} alt="Client" />
                            </div>
                            <h5 className='client__name'>{client.name}</h5>
                            <small className="client__review">
                            {client.review}
                            </small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>
    );
};

export default Testimonials;