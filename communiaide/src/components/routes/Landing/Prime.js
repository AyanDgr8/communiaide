// src/components/routes/Landing/Prime.js

import React from 'react';
import Header from './Header/Header';
import First from './First/First';
import Footer from './Footer/Footer';
import LowerFooter from './LowerFooter/LowerFooter';

import './Prime.css'

export default function Prime(){
    return (
        <div className='main-page'>
                <Header />
                <First />
                <Footer />
                <LowerFooter />
        </div>
    );
}