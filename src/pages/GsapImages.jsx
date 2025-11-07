import React, { useEffect, useRef } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = containerRef.current.querySelectorAll("img");

    images.forEach((img, index) => {
      const isLeft = img.classList.contains("left-img");
      const fromX = isLeft ? 200 : -200; // left images slide from right, right images from left

      gsap.fromTo(
        img,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // replay when scrolling back
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative flex justify-center">
      <div ref={containerRef} className="w-full relative">
        {/* LEFT IMAGES (slide from right) */}
        <img
          src={img1}
          alt="img1"
          className="absolute left-img h-[300px] w-[300px] object-cover top-0 left-40 rounded-xl shadow-lg"
        />
        <img
          src={img3}
          alt="img3"
          className="absolute left-img h-[300px] w-[300px] object-cover top-[800px] left-80 rounded-xl shadow-lg"
        />

        {/* RIGHT IMAGES (slide from left) */}
        <img
          src={img2}
          alt="img2"
          className="absolute right-img h-[300px] w-[300px] object-cover top-[400px] right-40 rounded-xl shadow-lg"
        />
        <img
          src={img4}
          alt="img4"
          className="absolute right-img h-[300px] w-[300px] object-cover top-[1200px] right-80 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default GsapImages;
