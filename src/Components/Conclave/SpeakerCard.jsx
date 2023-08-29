import React from "react";

const SpeakerCard = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={data.imgSrc} alt="profile pic" />
        </div>
        <div className="team-content">
          <h3 className="name">{data.name}</h3>
          <h4 className="title">{data.title}</h4>
          <h4 className="title">Topic: {data.topic}</h4>
          <h4 className="title">{data.time}</h4>
        </div>
        <ul className="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-facebook"
              aria-hidden="true"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-twitter"
              aria-hidden="true"></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-google-plus"
              aria-hidden="true"></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-linkedin"
              aria-hidden="true"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpeakerCard;
