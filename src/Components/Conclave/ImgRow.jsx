import React from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";

const ImgRow = ({ speed }) => {
  const imagesList = [
    {
      id: 1,
      src: img1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: img2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: img3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: img4,
      alt: "Image 4",
    },
    {
      id: 5,
      src: img5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: img6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: img7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: img8,
      alt: "Image 8",
    },
    {
      id: 9,
      src: img9,
      alt: "Image 9",
    },
  ];

  return (
    <div className="imgRow">
      {imagesList.map(img => {
        return (
          <img
            style={{ animationDuration: speed }}
            className="carImg"
            src={img.src}
            alt="img"
          />
        );
      })}
    </div>
  );
};

export default ImgRow;
