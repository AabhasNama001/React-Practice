import React from "react";
import img1 from "../assets/img1.jpg";
import "./slider.css"; // we’ll add animation here
// make sure to create this file

const Slider = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-blue-400 mb-6">
        Basic Infinite Slider
      </h1>

      {/* Outer container - hides overflow */}
      <div className="slider-container bg-gray-800 overflow-hidden">
        {/* Track - this will move continuously */}
        <div className="slider-track">
          {/* Repeat slides twice for infinite loop */}
          <div className="slide">
            <img src={img1} alt="slide1" />
            <p>This is the desc for slider 1.</p>
          </div>
          <div className="slide">
            <img src={img1} alt="slide2" />
            <p>This is the desc for slider 2.</p>
          </div>
          <div className="slide">
            <img src={img1} alt="slide3" />
            <p>This is the desc for slider 3.</p>
          </div>

          {/* duplicate the same slides for looping */}
          <div className="slide">
            <img src={img1} alt="slide1" />
            <p>This is the desc for slider 1.</p>
          </div>
          <div className="slide">
            <img src={img1} alt="slide2" />
            <p>This is the desc for slider 2.</p>
          </div>
          <div className="slide">
            <img src={img1} alt="slide3" />
            <p>This is the desc for slider 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
