import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import "./slider.css";

const images = [img1, img2, img3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="arrow left">
        ❮
      </button>

      <div className="carousel-slide">
        <img src={images[current]} alt="slide" />
        <p>This is slide {current + 1}</p>
      </div>

      <button onClick={nextSlide} className="arrow right">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
