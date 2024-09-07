// src/components/routes/Landing/Work/Work.js


import React from "react";
import { Link } from 'react-router-dom';
import "./Work.css";

const Work = () =>{
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
        }
    };
    return(
        <div>
            
            {/* **********CATEGORIES************* */}

            <section id="categories-container" className='categories-container'  data-aos="fade-down">
                
                <div className='headings'>
                    <div className='heading-1'>CRAFTING CREATIVES</div>
                    <div className='heading-2'>How We Work</div>
                </div>

                <div className='categories-cards'>
                    <div className='categories-sub-cards'>
                        <span className='category-card' >
                            <Link onClick={() => scrollToSection('stage-1')}>
                                <img 
                                    src='./uploads/com-3.webp'
                                    className='categories-card-1'
                                    alt="categories-card-1"
                                />
                                <div className='overlay oy'>
                                    <div className='text'>ANALYSIS</div>
                                    {/* <div className='texti'>ANALYSIS</div> */}
                                </div>
                            </Link>
                        </span>

                        <span className='category-card'>
                        <Link onClick={() => scrollToSection('stage-2')}>
                                <img 
                                    src='./uploads/com-4.webp'
                                    className='categories-card-2'
                                    alt="categories-card-2"
                                />
                                <div className='overlay oy'>
                                    <div className='text'>IDEATION</div>
                                    {/* <div className='texti'>IDEATION</div> */}
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div className='categories-sub-cards'>
                        <span className='category-card'>
                            <Link  onClick={() => scrollToSection('stage-3')}>
                                <img 
                                    src='./uploads/com-5.webp'
                                    className='categories-card-1'
                                    alt="categories-card-3"
                                />
                                <div className='overlay oy'>
                                    <div className='text'>PRODUCTION</div>
                                    {/* <div className='texti'>PRODUCTION</div> */}
                                </div>
                            </Link>
                        </span>
                        <span className='category-card'>
                            <Link  onClick={() => scrollToSection('stage-4')}>
                                <img 
                                    src='./uploads/com-6.webp'
                                    className='categories-card-2'
                                    alt="categories-card-4"
                                />
                                <div className='overlay oy'>
                                    <div className='text'>MEDIA STRATEGY</div>
                                    {/* <div className='texti'>MEDIA STRATEGY</div> */}
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                
            </section>

            {/**************/}
            
            {/* ********ANALYSIS************** */}

            <section id="stage-1" className='work-container'  data-aos="fade-down">

                <div className='headings'>
                    <div className='heading-1'>ANALYSIS</div>
                    {/* <div className='heading-2'>Stage-I</div> */}
                </div>

                <div className='work-stage-1'>
                    <div className='work-stage1-left'>
                        <img 
                            src='./uploads/work-1.webp' 
                            className="stage-1" 
                            alt="stage-1" 
                        />
                    </div>
                    <div className='work-stage1-right'>
                        <div className='stage-cards'>
                            <div className='stage-card animated-bottom'>
                                <div className='stage-card-heading boldy'>Target Group of the brand</div>
                                <p className='stage-card-para'>Zero down on the Target Group forthe brand using data science.</p>
                            </div>
                            <div className='stage-card animated-left'>
                                <div className='stage-card-heading boldy'>Understanding The Consumer</div>
                                <p className='stage-card-para'>Understanding the age bracket, Investor profile, Spending Habits & Media Preference at any given time of the day of the consumer for the brand. </p>
                            </div>
                            <div className='stage-card animated-top'>
                                <div className='stage-card-heading boldy'>Task At Hand</div>
                                <p className='stage-card-para'>Figure out the gap to hit the audience given, the current market situation & what competitors are upto.</p>
                            </div>
                            <div className='stage-card animated-right'>
                                <div className='stage-card-heading boldy'>Communities</div>
                                <p className='stage-card-para'>As per the need join or build communities those cater to increase the need & demand of products being produced by the brand.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* ********IDEATION************** */}

            <section id="stage-2" className='work-container'  data-aos="fade-down">

                <div className='headings'>
                    <div className='heading-1'>IDEATION</div>
                    {/* <div className='heading-2'>Stage-II</div> */}
                </div>


                <div className='work-stage-2'>
                    <div className='work-stage2-left'>
                        <div className='stage-cards s2-stage'>
                            <div className='stage-card'>
                                <div className='stage-card-heading boldy animated-left'>Communication For The Brand & The Product</div>
                                <p className='stage-card-para animated-left'>As per our understanding of Task in Hand, we create a communication for the brand & thencommunicate the main message through different marketing tools.</p>
                                <div className='stage-card-heading boldy animated-left'>Ideation Of Different Marketing Products</div>
                                <p className='stage-card-para animated-left'>Ideating Ad Films/ Explainers/ Social Films/ Prints ads each with different message, to convey the bigger & main communication of the brand & spread awareness of the products.</p>
                                <ul className='animated-right'>• Ad Films: Digital ads/ TVC’s/Instagram/Facebook ads etc. </ul>
                                <ul className='animated-right'>• Digital content: Stories for digital formats with right integration</ul>
                                <ul className='animated-right'>• Explainer Videos: Explaining products in Video/2D/3D formats</ul>
                                <ul className='animated-right'>• Social/Emotional films: Films with social message & mild integration.</ul>
                                <ul className='animated-right'>• Social Experiments: Big Social cause documented as a video</ul>
                                <ul className='animated-right'>• Hoardings/Boardings: Big Banners displaying our products</ul>
                                <ul className='animated-right'>• Print Ads: Products displayed in newspapers/magazines etc.</ul>
                            </div>
                        </div>
                    </div>
                    <div className='work-stage2-right'>
                        <img 
                            src="./uploads/work-2.webp" 
                            className="stage-2" 
                            alt="stage-2" 
                        />
                    
                    </div>
                    
                </div>

            </section>



            {/* ********PRODUCTION************** */}

            <section id="stage-3" className='work-container'  data-aos="fade-left">

                <div className='headings'>
                    <div className='heading-1'>PRODUCTION</div>
                    {/* <div className='heading-2'>Stage-III</div> */}
                </div>


                <div className='work-stage-3'>
                    <div className='work-stage3-left'>
                        <img 
                            src="./uploads/work-3.webp" 
                            className="stage-3" 
                            alt="stage-3" 
                        />
                    </div>
                    <div className='work-stage3-right'>
                    <div className='stage-cards'>
                        <div className='stage-card s3-card'>
                            <div className='stage-card-heading animated-right'>Through Brand's Unique Communication Perspective, We Create <span className='boldy'>CONTENT</span> That <span className='boldy'>LEAVES IMPACT</span></div>
                                <ul className='animated-left'>• Corporate films</ul>
                                <ul className='animated-left'>• Corporate social responsibility films</ul>
                                <ul className='animated-left'>• Brand films & Ad campaigns</ul>
                                <ul className='animated-left'>• Lifestyle creatives</ul>
                                <ul className='animated-left'>• 3D & 2D animation</ul>
                                <ul className='animated-left'>• App & website explainers </ul>
                                <ul className='animated-left'>• Digital posts & Print Ads</ul>
                                <ul className='animated-left'>• Hoarding Shoots</ul>
                            </div>
                        </div>
                    </div>

                    </div>

            </section>



            {/* ********MEDIA STRATEGY************** */}

            <section  id="stage-4" className='work-container' data-aos="fade-right">

                <div className='headings medi'>
                    <div className='heading-1 medi-1' >MEDIA STRATEGY</div>
                    {/* <div className='heading-2 medi-2'>Stage-IV</div> */}
                </div>


                <div className='work-stage-4'>
                    <div className='work-stage4-left'>
                        <div className='stage-cards s4-cards'>
                            <div className='stage-card s4-card animated-top'>
                                <div className='stage-card-heading boldy'>Overarching Media Strategy</div>
                                <p className='stage-card-para'>Media buying strategy including Online/Offline/Print/Radio/SEO/SMO etc.</p>
                            </div>
                            <div className='stage-card s4-card animated-right'>
                                <div className='stage-card-heading boldy'>Designing Digital Overview </div>
                                <p className='stage-card-para'>Allocation of funds in digital media as per media spend trends of market.</p>
                            </div>
                            <div className='stage-card s4-card animated-left'>
                                <div className='stage-card-heading boldy'>Google Search, Display & Paid Social</div>
                                <p className='stage-card-para'>Purchase of Keywords/Ad formats/Ad platforms of digital world.</p>
                            </div>
                            <div className='stage-card s4-card animated-bottom'>
                                <div className='stage-card-heading boldy'>Digital Marketing Framework</div>
                                <p className='stage-card-para'>How to Presence-Drive-Convert- Retain a customer of digital leads.</p>
                            </div>
                            <div className='stage-card s4-card animated-top'>
                                <div className='stage-card-heading boldy'>Campaign Ad-serving & Cross Channel Analysis</div>
                                <p className='stage-card-para'>Campaign management & measurement across channels of all digital & non digital formats.</p>
                            </div>
                            <div className='stage-card s4-card animated-right'>
                                <div className='stage-card-heading boldy'>Lead Management System</div>
                                <p className='stage-card-para'>This Magic happens on the backend with stats that google & others provide us.</p>
                            </div>
                        </div>
                    </div>
                    <div className='work-stage4-left'>
                    <img 
                        src="./uploads/work-4.webp" 
                        className="stage-4" 
                        alt="stage-4" 
                    />

                    </div>
                </div>

            </section>

        </div>
    )
}

export default Work;