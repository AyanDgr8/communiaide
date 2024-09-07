// src/components/Main/Main.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prime from '../routes/Landing/Prime';
import Terms from '../routes/Landing/Terms/Terms';
// import Digital from '../routes/Digital/Digital';
// import Advertise from '../routes/Advestise/Advertise';
// import Brand from '../routes/Brand/Brand';
// import User from '../routes/User/User';

import './Main.css';


export default function Main(){
    return(
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Prime />} />
                    <Route path="/terms" element={<Terms />} />
                    {/* <Route path="/digital-marketing" element={<Digital />} />
                    <Route path="/advertisement" element={<Advertise />} /> */}
                    {/* <Route path="/branding" element={<Brand />} />
                    <Route path="/ui-ux" element={<User />} /> */}
                </Routes>
            </div>
        </Router>    
    </>
    );                        
}