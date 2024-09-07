// src/components/routes/Brand/Brand.js

import React from "react";
import './Brand.css';
import Header from "../Landing/Header/Header" ;
import Footer from "../Landing/Footer/Footer";
import LowerFooter from "../Landing/LowerFooter/LowerFooter";

const Brand = () =>{
    
    return(
        <div>
            <Header />
            

            <section  className="brand-super-container"> 
                
                <div className="brand-super-left">
                    <div className="brand-super-content">
                        <div className="two-headings">
                            <h1 className="two-heading-1 tt-11">
                                COMMUNIAIDE
                            </h1>
                            <h2 className="two-heading-2 tt-22">
                                Your Brand Strategy Partner
                            </h2>
                            {/* <p className="brand-super-para">
                                We craft powerful brand strategies that propel your business to new heights. Discover how our personalized approach can revolutionize your brand's market presence.
                            </p> */}
                        </div>
                    </div>
                </div>
                
                <div className="brand-super-right">
                    <img 
                        src='./uploads/com-66.webp'
                        className='brand-super-bg'
                        alt="brand-super-bg"
                    />
                </div>

            </section>

            
             {/* Spacer to ensure content below is visible and can be scrolled to */}
             <div style={{ height: '100vh' }}></div>



            {/* ******************** */}

            <section className="brand-cardss">
                
                <div className='headings'>
                    <div className='heading-1'>STRATEGIES</div>
                    <div className='heading-2'>Our 3-Step Approach</div>
                </div>
                <div className="brand-card">
                    <h2 className="brand-h">
                       1) Understanding Your Brand
                    </h2>
                    <p className="brand-p">
                        We deeply understand your brand's identity and market position through thorough research, ensuring alignment with your goals and audience.
                    </p>
                </div>
                
                <div className="brand-card">
                    <h2 className="brand-h">
                        2) Crafting Bespoke Strategies
                    </h2>
                    <p className="brand-p">
                        Our collaborative approach tailors strategies to enhance your brand's equity and drive engagement across all channels.
                    </p>
                </div>
                
                <div className="brand-card">
                    <h2 className="brand-h">
                        3) Implementing and Optimizing
                    </h2>
                    <p className="brand-p">
                        We oversee precise strategy implementation, adapting in real-time to maximize impact and deliver measurable results.
                    </p>
                </div>
               

            </section>


            <Footer />
            <LowerFooter />
        </div>

    );
};

export default Brand;