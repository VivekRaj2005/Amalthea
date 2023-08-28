import React, { useState, useEffect } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isNavActive, setNavActive] = useState(false);

    const handleNavClick = () => {
        setNavActive(!isNavActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector('.nav-nav').classList.add('affix');
                console.log('OK');
            } else {
                document.querySelector('.nav-nav').classList.remove('affix');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="nav-nav">
                <div className="nav-container">
                    <div className="nav-logo">
                        <Link to={"/"}>AMALTHEA '23</Link>
                    </div>
                    <div id="mainListDiv" className="nav-main_list">
                        <ul className="nav-navlinks">
                            <li><Link to={'/Events'}>Events</Link></li>
                            <li><Link to={"/Conclave"}>Conclave</Link></li>
                            <li><Link to={"/Symposium"}>Symposium</Link></li>
                            <li><Link to={"/Tech Expo"}>Tech Expo</Link></li>
                            <li><Link to={"/Sponsors"}>Sponsors</Link></li>
                        </ul>
                    </div>
                    <span className="nav-navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
