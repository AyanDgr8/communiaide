// src/components/routes/Landing/Network/Network.js


import React from "react";
import CountUp from "react-countup";
import "./Network.css";

const Network = () => {
    return (
        <div>
            <div className="network-container">
                <div className='headings'>
                    <div className='heading-1 headi' >OUR NETWORK</div>
                    {/* <div className='heading-2'>OUR NETWORK</div> */}
                </div>
                <div className="network-content">
                    <div className="network-blocks">
                        <h1 className="network-block-h1">
                            <CountUp end={6} duration={3} />+
                        </h1>
                        <h6 className="network-block-h2">YEARS IN BUSINESS</h6>
                    </div>
                    <div className="network-blocks">
                        <h1 className="network-block-h1">
                            <CountUp end={40} duration={3} />+
                        </h1>
                        <h6 className="network-block-h2">TEAM MEMBERS</h6>
                    </div>
                    <div className="network-blocks">
                        <h1 className="network-block-h1">
                            <CountUp end={200} duration={3} />+
                        </h1>
                        <h6 className="network-block-h2">ADVERTISING AND MARKETING PROJECTS</h6>
                    </div>
                    <div className="network-blocks">
                        <h1 className="network-block-h1">
                            <CountUp end={50} duration={3} />+
                        </h1>
                        <h6 className="network-block-h2">CLIENTS</h6>
                    </div>
                    <div className="network-blocks">
                        <h1 className="network-block-h1">
                            <CountUp end={92} duration={3} />+
                        </h1>
                        <h6 className="network-block-h2">CLIENT RETENTION RATE</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network;
