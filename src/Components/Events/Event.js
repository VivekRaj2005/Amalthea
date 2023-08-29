import React, { useEffect } from 'react';
import './Event.css';

const Event = () => {

    useEffect(() => {
        const slideRef = document.getElementById('slide');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const items = slideRef.getElementsByClassName('item');
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
                const s1 = 1 - scroll / 2000;
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


        let currentIndex = 0;

        const handleClickNext = () => {
            slideRef.append(items[0]);
        };

        const handleClickPrev = () => {
            slideRef.prepend(items[6]);
        };

        prevButton.addEventListener('click', handleClickPrev);
        nextButton.addEventListener('click', handleClickNext);

        const data = [
            {
                id: 0,
                imgUrl: require("./DRA-01.png"),
                desc: "DRA is a night aerial racing event that allures drone enthusiasts to showcase their drone racing skills and compete with the best pilots across the country. The event’s highlight is its track consisting of various hurdles and hoops through which the drones will be maneuvered.",
                name: "Drone Racing Amalthea:",
            },
            {
                id: 1,
                imgUrl: require('./DCode-01.png'),
                desc: "Some beautiful roads cannot be discovered without getting loss.",
                name: "EXPLORE NATURE",
            },
            {
                id: 2,
                imgUrl: require("./DriftRC-01.png"),
                desc: "Some beautiful roads cannot be discovered without getting loss.",
                name: "EXPLORE NATURE",
            },
            {
                id: 3,
                imgUrl: require("./GameJam1-01.png"),
                desc: "Some beautiful roads cannot be discovered without getting loss.",
                name: "EXPLORE NATURE",
            },
            {
                id: 4,
                imgUrl: require("./ICon-01.png"),
                desc: "Some beautiful roads cannot be discovered without getting loss.",
                name: "EXPLORE NATURE",
            },
            {
                id: 5,
                imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                desc: "Description of the new item.",
                name: "NEW ITEM",
            },
            {
                id: 6,
                imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
                desc: "Description of the new item.",
                name: "NEW ITEM",
            }
        ];

        function renderSliderItems() {
            let sliderContent = '';
            data.forEach((item, index) => {
                sliderContent += `
                    <div class="item" style="background-image: url('${item.imgUrl}');">
                        <div class="content">
                            <div class="name">${item.name}</div>
                            <div class="des">${item.desc}</div>
                            <button>See more</button>
                        </div>
                    </div>
                `;
            });
            slideRef.innerHTML = sliderContent;
        }

        renderSliderItems();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="center" style={{ zIndex:-3 }}>
                <h1 id="aml">EVENTS</h1>
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
                {/* <span>Events...</span> */}
            </section>
            <div className="top">
                <div className="container1">
                    {/* <div class="loadbar" style="width: 0%;"></div> */}
                    <div id="slide">
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div
                            className="item"
                            style={{
                                backgroundImage:
                                    'url("https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg")'
                            }}
                        >
                            <div className="content">
                                <div className="name">EXPLORE NATURE</div>
                                <div className="des">
                                    Some beautiful roads cannot be discovered without getting lost.
                                </div>
                                <button>See more</button>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="prev">
                            {/* FontAwesomeIcon icon="faAngleLeft" */}
                            <i className="fas fa-angle-left" />
                        </button>
                        <button id="next">
                            {/* FontAwesomeIcon icon="faAngleRight" */}
                            <i className="fas fa-angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Event;