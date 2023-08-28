import React, { useState, useEffect } from 'react';
import './Team.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Team = () => {
    return (
        <>
            <section className="nav-home">
                <span>Our Team...</span>
            </section>

            <div className='main'>
                <h2 className="heading">CORE COMMITTEE</h2>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/C4D03AQH6ZSuuPkMfLA/profile-displayphoto-shrink_400_400/0/1663915059052?e=1695254400&v=beta&t=PFlzpyS5LcRK5eaJtMsHO3fVMwNQiTyqK7tkUGyPRMs" />
                        </div>
                        <div className="caption">
                            <h3>Guntas Saran</h3>
                            <p>Design and Finance Core</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/guntas-singh-saran-2b8811179/ "
                                    target="_blank"
                                />
                                <a
                                    href="https://www.linkedin.com/in/guntas-singh-saran-2b8811179/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:guntassingh.saran@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                                <h6>6264938418</h6>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/C5603AQHq4yHiox1q2Q/profile-displayphoto-shrink_800_800/0/1589438714119?e=2147483647&v=beta&t=zEqmVDBm4fxFCV0Pnt8UPKwJVjJcEHGJWb2Z8DElrMo" />
                        </div>
                        <div className="caption">
                            <h3>Debojit Das</h3>
                            <p>Sponsorship and C &amp; S Core</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/debojitdas842/" target="_blank">
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:debojit.das@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="aml img">
                        <img src="https://drive.google.com/uc?export=view&id=1HY3G8nZlrxOuNq38dhpEv2QhjZURXtSG" />
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4E03AQHY_aLy0yJeLQ/profile-displayphoto-shrink_800_800/0/1668394028852?e=2147483647&v=beta&t=-TCqmE-IUIKVFy3ckGbj7xN4Po1p6CnshGLNLM2y1rU" />
                        </div>
                        <div className="caption">
                            <h3>Harsh Jain</h3>
                            <p>Events Core</p>
                            <p />
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/harsh-jain-449a19255/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:harsh.jain@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Agastya</h3>
                            <p>Marketing and Tech Expo Core</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/agastya-narayana/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:mangalampalli.narayana@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="heading">COORDINATORS</h2>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="img">
                            <img src="" />
                        </div>
                        <div className="caption">
                            <h3>Suteekshna Mishra</h3>
                            <p>Events</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/suteekshna-mishra-14b15b253/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:suteekshna.mishra@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Farhan Obaid</h3>
                            <p>Event Management</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/farhan-obaid-19b289262/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:farhan.obaid@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQHP-dp-GuUTfg/profile-displayphoto-shrink_400_400/0/1686497079426?e=1695254400&v=beta&t=jSBFbrpgT7tsdqae4NecKxGbZjtoPkTQV21k_lX_bS8" />
                        </div>
                        <div className="caption">
                            <h3>Aaditya Roy</h3>
                            <p>Marketing</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/aaditya-roy-279485233/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:aaditya.roy@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFlpOCBn7IzeA/profile-displayphoto-shrink_800_800/0/1687074281229?e=2147483647&v=beta&t=YQ-mXWG5ggj5XRlqRjsQ7YphT7BsU3zFrf7ieKIYBIU" />
                        </div>
                        <div className="caption">
                            <h3>Kavya Gotecha</h3>
                            <p>Marketing</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/kavya-gotecha-4a7a98250/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:kavya.gotecha@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQHdXOAraNlNxQ/profile-displayphoto-shrink_800_800/0/1671989348496?e=2147483647&v=beta&t=vP9nkKjbyI4DiyKMGJijfNMN8-ADEWqES1QqSEgsziw" />
                        </div>
                        <div className="caption">
                            <h3>Dhruvi Sisodiya</h3>
                            <p>Design</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/dhruvi-sisodiya-1188ab251/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:dhruvi.sisodiya@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQHP-dp-GuUTfg/profile-displayphoto-shrink_400_400/0/1686497079426?e=1695254400&v=beta&t=jSBFbrpgT7tsdqae4NecKxGbZjtoPkTQV21k_lX_bS8" />
                        </div>
                        <div className="caption">
                            <h3>Nishi Shah</h3>
                            <p>Sponsorship</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/nishi-shah-466a4424b/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:nishi.shah@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4E03AQEAvyj7x7IbzA/profile-displayphoto-shrink_800_800/0/1683809944243?e=2147483647&v=beta&t=sVq3QRuf_6Oeka6aihy5uLJgNonimCK_Yabke6jSymA" />
                        </div>
                        <div className="caption">
                            <h3>Hrriday V. Ruparel</h3>
                            <p>Sponsorship</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/hrriday-ruparel-76b019276/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:hrriday.ruparel@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Aarav Shah</h3>
                            <p>Tech Expo </p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/aarav-shah-475122259/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:aarav.shah@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFeDpFyuLYpQA/profile-displayphoto-shrink_800_800/0/1666026829261?e=2147483647&v=beta&t=-JzKqiteztXvvnVANq1TL_GZ_GxdKXWr3WRPtQzjHl8" />
                        </div>
                        <div className="caption">
                            <h3>Darshan Zala</h3>
                            <p>Conclave &amp; Symposium Coordinator</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/darshanzala/ " target="_blank">
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:darshan.zala@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="heading">WEB DEVELOPMENT &amp; DESIGN TEAM</h2>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFi6HCEW6hUVA/profile-displayphoto-shrink_400_400/0/1672486770105?e=1695254400&v=beta&t=u3nWAkOGmT2hLBDMq4ESYS_oomb7yGwhhfcWpmu_nHU" />
                        </div>
                        <div className="caption">
                            <h3>Dipesh Patidar</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/dipesh-patidar-586133256/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:dipesh.patidar@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFvotiWdujogg/profile-displayphoto-shrink_800_800/0/1688074089131?e=2147483647&v=beta&t=bqZ4S_X7LRE5lHZaOo1YGuiwxFebZPr2eDTKcUuWF4A" />
                        </div>
                        <div className="caption">
                            <h3>Parth Govale</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/parth-govale-a65120277/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:parth.govale@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Vraj Shah</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/vraj-shah-6a634a254/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:vraj.shah@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Pranav Joshi</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/guntas-singh-saran-2b8811179/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:pranav.joshi@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4E03AQHR_2OPO5q8lA/profile-displayphoto-shrink_800_800/0/1669841741186?e=2147483647&v=beta&t=4VO9-19y9QQCzB3UbdFYNgARy35Y_8eisXC5zUcBX5Y" />
                        </div>
                        <div className="caption">
                            <h3>Aashmun Gupta</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/aashmun-g-73bba6258/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:aashmun.gupta@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-container">
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFi6HCEW6hUVA/profile-displayphoto-shrink_400_400/0/1672486770105?e=1695254400&v=beta&t=u3nWAkOGmT2hLBDMq4ESYS_oomb7yGwhhfcWpmu_nHU" />
                        </div>
                        <div className="caption">
                            <h3>Kishan Ved</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/kishan-ved-506140259/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:kishan.ved@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img">
                            <img src="https://img.freepik.com/premium-photo/handsome-man-positive-male-portrait-masculine_279525-15451.jpg?size=626&ext=jpg&ga=GA1.1.1590143670.1681520467&semt=ais" />
                        </div>
                        <div className="caption">
                            <h3>Jaidev Khalane</h3>
                            <p>Developer</p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/guntas-singh-saran-2b8811179/ "
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="mailto:jaidev.khalane@iitgn.ac.in" target="_blank">
                                    <i className="fa-brands fa-message" />
                                </a>
                                <i className="fa-brands fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;