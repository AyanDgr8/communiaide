// src/components/routes/Advertise/Advertise.js

import React from "react";
import "./Advertise.css";
import Header from "../Landing/Header/Header";
import Footer from "../Landing/Footer/Footer";
import LowerFooter from "../Landing/LowerFooter/LowerFooter";

const Advertise = () =>{
    return(
        <div>
            <Header />

            <section className="adv-super-container">
                
                <div className="adv-super-left">
                    <div className="adv-super-content">
                        <div className="two-headings">
                            <h1 className="two-heading-1 tt-1">
                                CREATING IMPACTFUL ADVERTISEMENTS
                                {/* Capture Attention with Impactful Imagery */}
                            </h1>
                            <h2 className="two-heading-2 tt-2">
                                Capturing Attention with Professional Advertisement Shoots
                            </h2>
                            {/* <p className="adv-super-para">
                                We specialize in crafting captivating advertisements that resonate with your audience. Our team of experienced professionals is dedicated to bringing your vision to life, ensuring every frame tells your brand story with clarity and creativity.
                            </p> */}
                        </div>
                    </div>
                </div>
                
                <div className="adv-super-right">
                    <img 
                        src='./uploads/com-5.webp'
                        className='adv-super-bg'
                        alt="adv-super-bg"
                    />
                </div>

            </section>


             {/* Spacer to ensure content below is visible and can be scrolled to */}
             <div style={{ height: '100vh' }}></div>



            {/* *******VIDEOS******* */}


            <section className="video-container" >
                
                <div className='headings'>
                    <div className='heading-1'>TRENDING</div>
                    <div className='heading-2'>Top Collection</div>
                </div>

                <div className="video-half-container">
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/_8K0ZcDRgIQ" 
                            title="YouTube first" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/x5TfnpNvVzw" 
                            title="YouTube second" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/smlUn4wNBTU" 
                            title="YouTube third" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/0pxJN8mvQ5Q"  
                            title="YouTube forth" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/06MPRx9rjcs" 
                            title="YouTube fifth" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>


            <Footer />
            <LowerFooter/>

        </div>
    );
};

export default Advertise;