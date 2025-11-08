import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TiltCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const ctx = gsap.context(() => {
      // smooth gsap updater
      const rotateX = gsap.quickTo(card, "rotationX", {
        duration: 0.4,
        ease: "power3",
      });
      const rotateY = gsap.quickTo(card, "rotationY", {
        duration: 0.4,
        ease: "power3",
      });
      const scale = gsap.quickTo(card, "scale", {
        duration: 0.3,
        ease: "power3",
      });

      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateAmountX = ((y - centerY) / centerY) * 30; // tilt up/down
        const rotateAmountY = ((x - centerX) / centerX) * 30; // tilt left/right

        rotateX(-rotateAmountX);
        rotateY(rotateAmountY);
        scale(1.05);
      };

      const handleLeave = () => {
        rotateX(0);
        rotateY(0);
        scale(1);
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={cardRef}
        className="w-[300px] h-[400px] bg-purple-600 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white text-center"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <h2 className="text-2xl font-bold mb-2">3D GSAP Card</h2>
        <p className="text-lg">Hover me to see the motion!</p>
      </div>
    </div>
  );
};

export default TiltCard;
