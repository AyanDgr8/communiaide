// src/components/routes/Landing/First/First.js

import React, { useEffect } from "react";
import './First.css';
import Work from '../Work/Work';
import Network from '../Network/Network';
import Videos from "../Videos/Videos";
import SliderContainer from '../Slider/SliderContainer';
import { Carousel, initMDB } from "mdb-ui-kit";

const First = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with id ${id} not found.`);
        }
    };

    useEffect(() => {
        // Initialize MDB carousel
        initMDB({ Carousel });
    }, []);

    //     // Intersection Observer to handle animations
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.style.opacity = "1"; // Ensure opacity is set to 1 when element is in view
    //                 entry.target.classList.add(entry.target.dataset.animation);
    //                 observer.unobserve(entry.target); // Stop observing once the animation is triggered
    //             }
    //         });
    //     }, { threshold: 0.1 });

    //     // Observe all elements with the class 'animate-on-scroll'
    //     const elements = document.querySelectorAll('.animate-on-scroll');
    //     elements.forEach(element => observer.observe(element));

    //     // Cleanup observer on component unmount
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []); // Empty dependency array ensures this runs only once, like componentDidMount

    return (
        <div>
            {/* **********SUPER SECTION************* */}

            <section className='super-container'>
                <div className="video-background">
                    <video autoPlay loop muted playsInline  
                        className="super-video">
                        <source src="./uploads/super-cover.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                                
                <div className='super-container-content'>
                    <h1 className='super-container-line1 animated-left'>
                        REIMAGINE YOUR BRAND'S FUTURE
                    </h1>

                    <p className='super-container-line2 animated-right'>
                        Transforming Ideas into Impactful Experiences with Innovative Storytelling and Strategic Creativity.
                    </p>
                                
                    <div className='super-container-btns'>
                        <button 
                            type="button" 
                            className="btn btn-info explore_btn" 
                            onClick={() => scrollToSection('categories-container')}
                        >
                            EXPLORE PROJECT
                        </button>

                        <button 
                            type="button" 
                            className="btn btn-light contact_btn"
                            onClick={() => scrollToSection('footer-sect')}
                        >
                            CONTACT US
                        </button>
                    </div>

                    <div className='super-container-satisfied'>
                        500+ Satisfied Clients
                    </div>
                </div>
            </section>


             {/* Spacer to ensure content below is visible and can be scrolled to */}
             <div style={{ height: '100vh' }}></div>


            {/* **********WHO WE ARE************* */}

            <section className='about-container'>
                <div className='about-content'>
                    <div className='headings'>
                        <div className='heading-1 headi'>A LITTLE BIT</div>
                        <div className='heading-2'>About Us</div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-20">
                            <div className="card-img-about">

                                <div className='card-img-left'>
                                    <div className="card border-0 about-cards">
                                        <div className="card-body">
                                            <p className="card-text about-card animated-bottom ">
                                                At Communiaide, We ignite growth and transformation for brands, merging language and visuals seamlessly. With a holistic approach and strategic risks, we dive deep into consumer insights, crafting bespoke strategies that elevate brands to new heights. Specializing in brand strategies, digital marketing, and content creation, we streamline processes for maximum efficiency. Trust us to captivate audiences across all media formats, from traditional to digital platforms.

                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='card-img-right'>
                                    
                                    <img 
                                        src="./uploads/comm-two.webp" 
                                        className="about-bg" 
                                        alt="about-bg" 
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* **********CATEGORIES************* */}

            <Work/>

            {/* ******NETWORK**** */}

            <Network />

            {/* *******VIDEOS******* */}

            <Videos />
            
            {/* *******TEAM******** */}



            <section className='team-container'>
                
                <div className='headings'>
                    <div className='heading-1 t-h1'>EXPERTISE</div>
                    <div className='heading-2 t-h2'>Our Team</div>
                </div>

                <div className='team-members'>
                    <span className='team-member'>
                        <img 
                            src="./uploads/person-1.png"
                            className='member-1 memb'
                            alt='member-1'
                        />
                        <div className='overlayy'>
                            <div className='textin'>Dheeraj Hellan</div>
                            <div className='textinn'>-Founder & Director</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/person-2.png"
                            className='member-2 memb'
                            alt='member-2'
                        />
                        <div className='overlayy'>
                            <div className='textin'>Ankit Kumar</div>
                            <div className='textinn'>-Creative Producer & Creative Director</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/person-4.png"
                            className='member-3 memb'
                            alt='member-3'
                        />
                        <div className='overlayy'>
                            <div className='textin'>Antriksh Gahlot</div>
                            <div className='textinn'>-Post Production Head</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/person-3.png"
                            className='member-4 memb'
                            alt='member-4'
                        />
                        <div className='overlayy'>
                            <div className='textin'>Rishabh Ghosh</div>
                            <div className='textinn'>-Production Manager</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/person-5.png"
                            className='member-3 memb'
                            alt='member-5'
                        />
                        <div className='overlayy'>
                            <div className='textin'>Jyoti Verma</div>
                            <div className='textinn'>-Fashion & Costume Stylist</div>
                        </div>
                    </span>
                </div>
            </section>

            {/* *************** */}

            <section className='clients-container '>
                <SliderContainer />   
            </section>            

        </div>
        
    );
};

export default First;
