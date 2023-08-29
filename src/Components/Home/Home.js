import React, { useEffect} from 'react';
import './Home.css';

function Home() {
    
    useEffect(() => {
        const H = window.innerHeight;
        const h1 = 4400 + 3.1 * H;
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };

        const circle = document.querySelector('.circle');
        const L1 = document.querySelectorAll('.L1');
        const L2 = document.querySelectorAll('.L2');
        const L3 = document.querySelectorAll('.L3');
        const aml = document.getElementById('aml');
        const waw = document.getElementById('waw');
        let waw_cont = document.getElementById('waw-container');
        const span = document.querySelector('.waw-span');
        const ot = document.getElementById('ot');
        const tt = document.querySelectorAll('.title');
        const unit = document.getElementById('unit');
        const event_unit = document.querySelectorAll('.event-unit');

        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll < 650) {
                const s1 = 1 - scroll / 1000;
                const s2 = 1 - scroll / 1500;
                const s3 = 1 - scroll / 550;

                L1.forEach(l => {
                    l.style.transform = `scale(${s1})`;
                });
                L2.forEach(l => {
                    l.style.transform = `scale(${s2})`;
                });
                aml.style.opacity = s3;
                waw.style.opacity = 1 - s3;
            } else {
                aml.style.opacity = 0;
                waw.style.opacity = 1;
            }

            if (scroll < 650) {
                span.style.height = '100%';
            }

            if (scroll > 650) {
                span.style.height = '0%';
            }

            if (scroll > 650 && scroll < 1400) {
                L3.forEach(l => {
                    l.classList.add('active');
                });
            } else {
                L3.forEach(l => {
                    l.classList.remove('active');
                });
            }

            if (scroll < 1050) {
                circle.style.backgroundColor = 'rgb(23, 0, 54)';
            }

            if (scroll > 2000) {
                waw_cont.style.display = 'none';
            } else {
                waw_cont.style.display = 'flex';
            }

            if (scroll < 1050) {
                circle.style.transform = 'scale(3)';
            }

            if (scroll > 1050 && scroll < 3800) {
                const s4 = 3 - (scroll - 1050) / 875;
                const r = 23 + (scroll - 1050) * 0.2;
                const g = 0 + (scroll - 1050) * 0.2;
                const b = 54 + (scroll - 1050) * 0.2;
                circle.style.transform = s4 < 0 ? 'scale(0)' : `scale(${s4})`;
                circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                ot.style.opacity = 1;
            }

            if (3800 < scroll) {
                circle.style.transform = 'scale(0)';
            }
            if (scroll < 3800) {
                unit.style.top = '100vh';
            }

            if (scroll > 3800 && scroll < h1) {
                ot.style.opacity = 0;
                const top = (1 - 2 * (scroll - 3800) / (1.5 * H)) * 100;
                unit.style.top = `${top}vh`;
                const i = Math.floor((scroll - 3800) / (1.5 * H));
                tt[i].classList.remove('deactive');
                tt[i].classList.add('active');
                if (i > 0) {
                    tt[i - 1].classList.add('deactive');
                    tt[i - 1].classList.remove('active');
                }
                if (i < 2) {
                    tt[i + 1].classList.add('deactive');
                    tt[i + 1].classList.remove('active');
                }
            } else {
                tt.forEach(tt_i => {
                    tt_i.classList.add('deactive');
                    tt_i.classList.remove('active');
                });
            }

            if (h1 < scroll) {
                unit.style.top = '-300vh';
            }
            if (h1 - 600 < scroll) {
                const j = Math.floor((scroll + 400 - h1) / H);
                const top = (1 - ((scroll + 400 - h1) % H) / H) * 100;
                if (-1 < j && j < 9) {
                    event_unit[j].style.top = `${top}vh`;
                    event_unit[j].style.bottom = `-${top}vh`;
                }
                for (let i = 0; i < j && j < 9; i++) {
                    const element = event_unit[i];
                    element.style.top = '0vh';
                    element.style.bottom = '0vh';
                }
                for (let i = j + 1; i < 9; i++) {
                    const element = event_unit[i];
                    element.style.top = '100vh';
                    element.style.bottom = '-100vh';
                }
            }
            if (scroll < h1 - 600) {
                event_unit.forEach(eu => {
                    eu.style.top = '100vh';
                    eu.style.bottom = '-100vh';
                });
            }
            if (10 * H + h1 - 1000 < scroll) {
                event_unit.forEach(eu => {
                    eu.style.top = '0vh';
                    eu.style.bottom = '0vh';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='body-1'>
            <div className="container">
                <div className="circle"></div>
            </div>
            <div className="center" style={{ zIndex: 1 }}>
                <h1 id="aml">AMALTHEA</h1>
            </div>
            <img className="aml-bg-1 L1" src="./Images/AML-BG-1.png" alt="" />
            <img className="aml-bg-2 L1" src="./Images/AML-BG-2.png" alt="" />
            <img className="aml-bg-3 L2" src="./Images/AML-BG-3.png" alt="" />
            <img className="aml-bg-4 L2" src="./Images/AML-BG-4.png" alt="" />
            <img className="aml-bg-5" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-8 L2" src="./Images/AML-BG-6.png" alt="" />
            <img className="aml-bg-6" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-7 L2" src="./Images/AML-BG-6.png" alt="" />
            <img className="drone L3" src="./Images/Drone.png" alt="" />
            <img className="robo L3" src="./Images/Robo.png" alt="" />
            <div id="waw-container">
                <h2 id="waw">WHO ARE WE?</h2>
                <div className="waw-text">
                    <span className="waw-span"></span>
                    <p>
                        Amalthea is India's first student-run Annual Technical Summit conducted by IIT Gandhinagar. Since its inception in 2010, Amalthea has been pushing boundaries and setting high standards. With a plethora of exciting events, conclaves and a symposium coupled with a tech expo, we are back offline and ready to go beyond the impossible and blow away your minds. <br /><br />
                        Amalthea believes in fostering innovation and creative thinking by providing a forum for people to exchange their ideas and thoughts. We aim to serve as a bridge between industry and academia in order to connect and discuss pivotal technological prospects. Amalthea aspires to encourage young minds to ponder upon current issues and seek innovative and feasible solutions.
                    </p>
                </div>
            </div>
            <div id="ot" className="center" style={{ zIndex: -2 }}>
                <h2>OUR THEME</h2>
            </div>
            <div className="title center" style={{ zIndex: -3 }}>
                <h2>CONCALVE & SYMPOSIUM</h2>
            </div>
            <div className="title center" style={{ zIndex: -3 }}>
                <h2>TECH EXPO</h2>
            </div>
            <div className="title center" style={{ zIndex: -3 }}>
                <h2>THE LOCAL EVENTS</h2>
            </div>
            <div id="unit" style={{ zIndex: -4 }}>
                <div className="subunit">
                    <div className="gallery-item item-1">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-2">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-3">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-4">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                </div>
                <div className="subunit"></div>
                <div className="subunit">
                    <div className="gallery-item item-1">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-2">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-3">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-4">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">ROBOWARS</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">DRA</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">DRIFT</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">BRAINWIZ</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">GAMEJAM</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">STOCKRUSH</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">INNOVATION NEXUS</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">ICON</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name">DECODE</h2>
                    </div>
                    <h3 className="date">xx-Nov <br /> 2023</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
