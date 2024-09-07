// src/components/routes/User/User.js

import React from "react";
import './User.css';
import Header from "../Landing/Header/Header" ;
import Footer from "../Landing/Footer/Footer";
import LowerFooter from "../Landing/LowerFooter/LowerFooter";

const User = () =>{

    return(
        <div>
            <Header />

            <section  className="ui-super-container"> 
                
                <div className="ui-super-left">
                    <div className="ui-super-content">
                        <div className="two-headings">
                            <h1 className="two-heading-1 tt-111">
                                TRANSFORMING UI/UX
                            </h1>
                            <h2 className="two-heading-2 tt-222">
                                Elevating User Experiences with Intuitive Design
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div className="ui-super-right">
                    <img 
                        src='./uploads/com-4.webp'
                        className='ui-super-bg'
                        alt="ui-super-bg"
                    />
                </div>

            </section>
            
             {/* Spacer to ensure content below is visible and can be scrolled to */}
             <div style={{ height: '100vh' }}></div>


            <section className="ui-ph-fr-container">
                <img 
                    src="./uploads/com-11.webp"
                    className="ui-ph-bg"
                    alt="ui-ph-bg"
                />
                <div className="ui-para">
                    <p>
                        At Communiaide, we excel in creating intuitive UI/UX designs that captivate users and drive business growth. Our innovative approach ensures that every interaction is seamless, engaging, and designed to meet the unique needs of your audience. By focusing on user-centered design principles, we create digital experiences that not only look stunning but also deliver exceptional functionality and ease of use.
                    </p>
                </div>
                <div className="ui-para">
                    <p>
                        Explore how our expertise can revolutionize your digital presence for unparalleled user satisfaction and success. Whether you're looking to redesign your website, develop a new mobile app, or enhance your existing digital products, our team is dedicated to delivering solutions that elevate your brand and set you apart from the competition. Partner with Communiaide and experience the transformative power of exceptional design.
                    </p>
                </div>
                
            </section>


            <Footer/>
            <LowerFooter />
        </div>

    );
};

export default User;