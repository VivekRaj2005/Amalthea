import React, { useState, useEffect } from "react";
import "./Symposium.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Main";
import Speakers from "./Speakers";

const Symposium = () => {
  useEffect(() => {
    const H = window.innerHeight;
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };

    const L1 = document.querySelectorAll('.L1');
    const L2 = document.querySelectorAll('.L2');
    const aml = document.getElementById('aml');

    const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll < 2*H) {
            const s1 = 1 - scroll / 1700;
            const s2 = 1 - scroll / 10000;
            const s3 = 1 - scroll / (0.5*H);

            L1.forEach(l => {
                l.style.transform = `scale(${s1})`;
            });
            L2.forEach(l => {
                l.style.transform = `scale(${s2})`;
            });
            aml.style.opacity = s3;
        } else {
            aml.style.opacity = 0;
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  
  return (
    <>
    <div className="center" style={{ zIndex:-3 }}>
                <h1 id="aml">SYMPOSIUM</h1>
            </div>
            <img className="aml-bg-1 L1" src="./Images/AML-BG-1.png" alt="" style={{ zIndex: 3 }}/>
            <img className="aml-bg-2 L1" src="./Images/AML-BG-2.png" alt="" style={{ zIndex: 3 }}/>
            <img className="aml-bg-3 L2" src="./Images/AML-BG-3.png" alt="" />
            <img className="aml-bg-4 L2" src="./Images/AML-BG-4.png" alt="" />
            <img className="aml-bg-5" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-8 L2" src="./Images/AML-BG-6.png" alt="" style={{ zIndex: 4 }}/>
            <img className="aml-bg-6" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-7 L2" src="./Images/AML-BG-6.png" alt="" style={{ zIndex: 4 }}/>
      <section className="nav-home">
        {/* <span>Symposium...</span> */}
      </section>
      {/* <Main /> */}
      <Speakers />
    </>
  );
};

export default Symposium;
