// src/components/routes/Landing/Terms/Terms.js

import React from 'react';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LowerFooter from '../LowerFooter/LowerFooter';
import './Terms.css';

const Terms = () => {
    return (
        <div>
            {/* <Header /> */}
            <section className='terms-container'>
                <h1 className='terms-heading'>Terms and Conditions</h1>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Privacy Policy</h2>
                    <p>
                        At Communiaide, we are committed to protecting the privacy and security of our website visitors. This Privacy Policy outlines how we collect, use, and safeguard the personal information you provide to us through our website. By accessing or using our website, you agree to the terms of this Privacy Policy.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Information We Collect</h2>
                    <h3 className='terms-sheadings'>Personal Information</h3>
                    <p>
                        When you visit our website, we may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide to us through contact forms or subscription forms.
                    </p>
                    <h3 className='terms-sheadings'>Log Data</h3>
                    <p>
                        Our servers automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages you access on our site.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Use of Information</h2>
                    <p>
                        We use the personal information you provide to respond to your inquiries, fulfill your requests, and provide you with information about our services. We may also use your information to send you promotional emails or newsletters, but you can opt-out of receiving such communications at any time.
                    </p>
                    <p>
                        We use log data to analyze trends, administer the site, track users' movements, and gather demographic information for internal purposes. This information is used in an aggregated and anonymous manner.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us remember your preferences, analyze website usage, and improve our services. You can disable cookies through your browser settings, but please note that certain features of the website may not function properly.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Third-Party Websites</h2>
                    <p>
                        Our website may contain links to third-party websites. We have no control over the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Data Retention</h2>
                    <p>
                        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                </div>

                <div className='terms-section'>
                    <h2 className='terms-subheadings'>Updates to the Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The revised policy will be posted on this page with the updated date.
                    </p>
                </div>

                <Footer />
                <LowerFooter />
            </section>
        </div>
    );
};

export default Terms;
