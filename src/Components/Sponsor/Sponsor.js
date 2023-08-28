import React, { useState, useEffect } from 'react';
import './Sponsor.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Sponsor = () => {
    return (
        <>
            <section className="nav-home">
                <span>Sponsors...</span>
            </section>
            <div className="container">
                <div className="main">
                    {/* HTML code for the introduction section of the web page */}
                    {/* <h2>INTRODUCTION</h2>
          <p>Amalthea is an annual technical summit organized by the students of Indian Institute of Technology Gandhinagar. It aims to foster a culture of innovation and excellence among the youth by providing them with an opportunity to interact with experts, entrepreneurs and enthusiasts from various domains. Amalthea also hosts various events, workshops, exhibitions and competitions to inspire and challenge the participants.</p> */}
                    {/* HTML code for the sponsorship section of the web page */}
                    {/* <h2>SPONSORSHIP</h2>
          <p>Amalthea is grateful to its sponsors for their generous support and contribution. Our sponsors help us in making this event a success and reaching out to a wider audience. We are proud to present our sponsors for this year's edition of Amalthea.</p> */}
                    {/* HTML code for the platinum sponsors section of the web page */}
                    <h2 className="myheading divider line glow">PAST SPONSORS</h2>
                    <h2 className="myheading divider line glow">PLATINUM SPONSORS</h2>
                    <div className="sponsor-section">
                        <div className="sponsor-card">
                            <img src="jsw.png" alt="JSW logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your platinum sponsor */}
                            <img src="indextb.png" style={{ height: "80%" }} alt="indextb logo" />
                        </div>
                    </div>
                    <h2 className="myheading divider line glow">DIAMOND SPONSORS</h2>
                    <div className="sponsor-section">
                        <div className="sponsor-card">
                            <img src="gsmda.jpeg" alt="GSMDA logo" style={{ width: 200 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your platinum sponsor */}
                            <img src="CPwhite.png" style={{ width: 200 }} alt="cp logo" />
                        </div>
                    </div>
                    {/* HTML code for the gold sponsors section of the web page */}
                    <h2 className="myheading divider line glow">GOLD SPONSORS</h2>
                    <div className="sponsor-section">
                        {/* HTML code for each gold sponsor card */}
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your gold sponsor */}
                            <img
                                src="adityabirla.png"
                                alt="Aditya Birla logo"
                                style={{ width: 250 }}
                            />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your gold sponsor */}
                            <img
                                src="gujaratmaritimeboard.png"
                                style={{ width: 200 }}
                                alt="Gujarat Maritime Board logo"
                            />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your gold sponsor */}
                            <img src="metro.png" alt="Metro logo" style={{ width: 200 }} />
                        </div>
                    </div>
                    {/* HTML code for the silver sponsors section of the web page */}
                    <h2 className="myheading divider line glow">SILVER SPONSORS</h2>
                    <div className="sponsor-section">
                        {/* HTML code for each silver sponsor card */}
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img
                                src="vrajgroupwhite.png"
                                alt="Vraj Group logo"
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="GP.png" alt="GP logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="AC.png" alt="AC logo" style={{ width: 200 }} />
                        </div>
                    </div>
                    {/* HTML code for the other sponsors section of the web page */}
                    <h2 className="myheading divider line glow">EVENT PARTNERS</h2>
                    <div className="sponsor-section">
                        {/* HTML code for each other sponsor card */}
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="ITC.png" alt="ITC logo" style={{ width: 200 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="nutanix.png" alt="nutanix logo" style={{ height: 70 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="Reliance.png" alt="reliance logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="crazylabs.png" alt="crazylabs logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="redbull.png" alt="redbull logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="tatachemicals.png" alt="tata chemicals logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="codechef.png" alt="codechef logo" />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="wazirx.png" alt="wazrix logo" style={{ width: 200 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="adani.png" alt="adani logo" style={{ height: 120 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your other sponsor */}
                            <img src="beamable.png" alt="beamable logo" style={{ height: 70 }} />
                        </div>
                    </div>
                    <h2 className="myheading divider line glow">CONCLAVE PARTNER</h2>
                    <div className="sponsor-section">
                        {/* HTML code for each silver sponsor card */}
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img
                                src="jklakshmi.png"
                                alt="JK Lakshmi cement logo"
                                style={{ height: 100 }}
                            />
                        </div>
                    </div>
                    <h2 className="myheading divider line glow">
                        DESIGN AND INNOVATION PARTNERS
                    </h2>
                    <div className="sponsor-section">
                        {/* HTML code for each silver sponsor card */}
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="htc.png" alt="htc logo" style={{ height: 150 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="isro.png" alt="isro logo" style={{ width: 200 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="apple.png" alt="apple logo" style={{ width: 200 }} />
                        </div>
                        <div className="sponsor-card">
                            {/* Replace the image source with the logo of your silver sponsor */}
                            <img src="microsoft.png" alt="microsoft logo" style={{ height: 100 }} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sponsor;
