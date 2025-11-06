import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import gsap from "gsap";

gsap.to(".gsap-img", {
    left:90
})

const GsapImages = () => {
  return (
    <div className="relative">
      <div className="flex flex-col w-full gsap-img">
        <img className="absolute h-[300px] w-[300px] object-cover top-0 left-40" src={img1} />
        <img className="absolute h-[300px] w-[300px] object-cover top-80  right-40" src={img2} />
        <img className="absolute h-[300px] w-[300px] object-cover top-140  left-80" src={img3} />
        <img className="absolute h-[300px] w-[300px] object-cover top-200  right-80" src={img4} />
      </div>
    </div>
  );
};

export default GsapImages;
