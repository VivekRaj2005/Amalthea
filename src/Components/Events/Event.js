import React, { useEffect } from 'react';
import './Event.css';

const Event = () => {

    useEffect(() => {
        const slideRef = document.getElementById('slide');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        const items = slideRef.getElementsByClassName('item');

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
    }, []);

    return (
        <>
            <section className="nav-home">
                <span>Events...</span>
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