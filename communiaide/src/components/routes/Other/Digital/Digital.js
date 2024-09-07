// src/components/routes/Digital/Digital.js

import React from "react";
import './Digital.css';
import Header from "../Landing/Header/Header" ;
import Footer from "../Landing/Footer/Footer";
import LowerFooter from "../Landing/LowerFooter/LowerFooter";

const Digital = () =>{
    return(
        <div>

            <Header />

            <section className="digital-super-container">
                <img 
                    src='./uploads/comm-two.webp'
                    className='digital-bg'
                    alt="digital-bg"
                />
                <div className="digital-super-content">
                    <div className="two-headings">
                        <h1 className="two-heading-1">
                            Transform Your Brand with Communiaide
                        </h1>
                        <h2 className="two-heading-2">
                            Elevate Digital Potential for Lasting Success
                        </h2>
                        <p className="digital-super-para">
                            At Communiaide, we specialize in digital marketing strategies that propel brands forward in the digital landscape. Our comprehensive services are designed to enhance your online presence, engage your audience, and drive meaningful results.
                        </p>
                    </div>
                </div>

            </section>
            

             {/* Spacer to ensure content below is visible and can be scrolled to */}
             <div style={{ height: '100vh' }}></div>


            {/* *************** */}

            <section className="digital-t-cards-container">

                <section className="digital-cards-container">

                    <div className="digital-f-cards">
                        <img 
                            src="./uploads/first-icon.png" 
                            className="card-icon" 
                            alt="first-icon"
                        />
                        <p className="card-ti">SEO Marketing</p>
                    </div>

                    <div className="digital-f-cards">
                        <img 
                            src="./uploads/second-icon.png" 
                            className="card-icon" 
                            alt="second-icon"
                        />
                        <p className="card-ti">Research Insights</p>
                    </div>

                    <div className="digital-f-cards">
                        <img 
                            src="./uploads/third-icon.png" 
                            className="card-icon" 
                            alt="third-icon"
                        />
                        <p className="card-ti">Email Marketing</p>
                    </div>

                    <div className="digital-f-cards">
                        <img 
                            src="./uploads/forth-icon.png" 
                            className="card-icon" 
                            alt="forth-icon"
                        />
                        <p className="card-ti">Google PPC</p>
                    </div>

                </section>

                <section className="digi-content-img">
                    <div className="digital-t-cards-left">
                        <div className="digital-t-cards card-left">
                            <h2 className="card-t-heading">Digital Strategy</h2>
                            <p className="card-t-para">
                                Tailored strategies to amplify your brand's online presence and drive growth.
                            </p>
                        </div>                
                        <div className="digital-t-cards card-right">
                            <h2 className="card-t-heading">Content Creation</h2>
                            <p className="card-t-para">
                                High-quality, compelling content that speaks directly to your audience's preferences.
                            </p>
                        </div>
                        <div className="digital-t-cards card-left">
                            <h2 className="card-t-heading">Social Media Management</h2>
                            <p className="card-t-para">
                                Engage and grow your community across platforms with strategic social media campaigns.
                            </p>
                        </div>
                    </div>

                    <div className="digital-t-cards-right">
                        <img 
                            src="./uploads/com-3.jpg"
                            className="digital-t-cards-bg"
                            alt="digital-t-cards-bg"
                        />
                    </div>

                </section>


                
                

            </section>

            <Footer />
            <LowerFooter />


        </div>
    );
};

export default Digital;