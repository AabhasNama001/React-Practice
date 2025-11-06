import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const lines = headingRef.current.children;

    // set all lines invisible first
    gsap.set(lines, { opacity: 0 });

    // create individual animations for each line
    gsap.fromTo(
      lines[0],
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lines[0],
          start: "top 80%",
          toggleActions: "play reverse play reverse", // replay when scrolling back
        },
      }
    );

    gsap.fromTo(
      lines[1],
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lines[1],
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      lines[2],
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: lines[2],
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-40">
      <div ref={headingRef} className="text-6xl text-center heading space-y-2">
        <h1 className="text-blue-300">This is the</h1>
        <h1 className="text-blue-500">Starting of the</h1>
        <h1 className="text-blue-800">GSAP page.</h1>
      </div>
    </div>
  );
};

export default Gsap;
