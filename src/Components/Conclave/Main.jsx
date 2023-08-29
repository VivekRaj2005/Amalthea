import React from "react";
import ImgRow from "./ImgRow";

const Main = () => {
  return (
    <div className="Carousel">
      <div id="C">
        <ImgRow speed="10000ms" />
        <ImgRow speed="13000ms" />
        <ImgRow speed="8000ms" />
      </div>
    </div>
  );
};

export default Main;
