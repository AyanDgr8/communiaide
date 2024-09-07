// src/components/routes/Landing/SliderContainer/SliderContainer.js


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderContainer.css';


const SliderContainer = () => {

    const machineImages =[
        "/uploads/comm-1.png",
        "/uploads/comm-2.png",
        "/uploads/comm-3.png",
        "/uploads/comm-4.png",
        "/uploads/comm-5.png",
        "/uploads/comm-6.png",
        "/uploads/comm-7.png",
        "/uploads/comm-8.png",
        "/uploads/comm-9.png",
        "/uploads/comm-10.png",
        "/uploads/comm-11.png",
        "/uploads/comm-12.png",
        "/uploads/comm-13.png",
        "/uploads/comm-14.png",
        "/uploads/comm-15.png",
        "/uploads/comm-16.png",
        "/uploads/comm-17.png",
        "/uploads/comm-18.png",
        "/uploads/comm-19.png",
        "/uploads/comm-20.png",
        "/uploads/comm-21.png",
        "/uploads/comm-22.png",
        "/uploads/comm-23.png",
        "/uploads/comm-24.png",
        "/uploads/comm-25.png",
        "/uploads/comm-26.png",
        "/uploads/comm-27.png",

    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: window.innerWidth <= 900 ? 1 : 5, // Show 1 slide on mobile, 3 slides otherwise
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
    };

    return(
        <div className='SliderContainer-container'>
            
            <div className='headings sl-heading'>
                <div className='heading-1 conti-1'>TRUST BUILDING</div>
                <div className='heading-2 conti-2'>Our Clients</div>
            </div>
            
            <Slider {...sliderSettings} className='machines-slider'>
                {machineImages.map((image, index) => ( 
                <div key={index} className="slide">
                    <img src={image} alt={`Brands ${index + 1}`} /> 
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderContainer;