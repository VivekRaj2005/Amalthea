import React, { useState, useEffect } from 'react';
import './Conclave.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Conclave = () => {
    return (
        <>
            <section className="nav-home">
                <span>Conclave...</span>
            </section>
            <div id="C"></div>
            <div id="B"></div>
            <h1 id="Speakers"></h1>
            <div id="Heading">
                CONCLAVE
                <img src="mascot_homepage.png" id="logo" />
            </div>
        </>
    );
};

export default Conclave;