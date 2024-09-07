// src/components/routes/Landing/Header/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <nav className="navbar headerr">
            <div className="container">
                <Link to="/" className="navbar-brand" onClick={scrollToTop}>
                    <img 
                        src="./uploads/com-logo.webp" 
                        className="main-logo" 
                        alt="brand" 
                    />
                </Link>
            </div>
        </nav>
    );
};

export default Header;
