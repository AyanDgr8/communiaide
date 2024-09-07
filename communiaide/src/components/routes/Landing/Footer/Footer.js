// // src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return(
        <div>
            <section id="footer-sect" className='footer-container'>

                <div className='footer-content-first'>
                    <Link to="/" className="navbar-brand" onClick={scrollToTop}>
                        <img 
                            src="./uploads/com-logooo.ico" 
                            className="footer-logo" 
                            alt="brand" 
                        />
                    </Link>
                </div>

                

                {/************ */}



                <div className='footer-content-second'>
                    <Link to="/ui-ux" className='footer-links'  onClick={scrollToTop}>
                        UI/UX
                    </Link>
                    <Link to="/digital-marketing" className='footer-links'  onClick={scrollToTop}>
                        Digital Marketing
                    </Link>
                    <Link to="/branding" className='footer-links'  onClick={scrollToTop}>
                        Brand Strategy
                    </Link>
                    <Link to="/advertisement" className='footer-links'  onClick={scrollToTop}>
                        Advertisement Shoot
                    </Link>
                    <Link to="/terms" className='footer-links'  onClick={scrollToTop}>
                        Terms & Conditions
                    </Link>
                </div>

                {/************ */}

                <div className='footer-content-third'>

                    <div className='deets'>
                        <a href='tel:+91 9899-967-927' className='cont-links'>+91 9899967927</a>
                    </div>
                    <div className='deets'>
                        <a href='mailto:hellan.dheeraj@gmail.com' className='cont-links'>hellan.dheeraj@gmail.com</a>
                    </div>
                    <div className='deets'>
                        <a href="https://www.google.com/maps/place/28%C2%B027'26.6%22N+77%C2%B004'47.8%22E/@28.4573969,77.0773717,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.4573969!4d77.0799466?entry=ttu" className='cont-links'>165 Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122002</a>
                    </div>
                    <div className='social-links'>
                        
                        <Link to="https://www.linkedin.com/in/communiaide-communiaide-309aa5311/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/linkedin.svg" alt="LinkedIn" className="social-icon" />
                        </Link>
                        
                        <Link to="/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/facebook.svg" alt="Facebook" className="social-icon" />
                        </Link>

                        <Link to="https://www.youtube.com/channel/UCaNeHzKKCkhbpPX8Ibq6wuA#" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/youtube.svg" alt="Youtube" className="social-icon" />
                        </Link>

                        <Link to="https://www.instagram.com/vibhuutyagi/?utm_source=ig_web_button_share_sheet" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/instagram.svg" alt="Instagram" className="social-icon" />
                        </Link>

                    </div>
                </div>
                
            </section>
            
        </div>

    )
}

export default Footer;