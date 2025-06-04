// src/Components/FancyPageTransition.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FancyPageTransition = ({ onComplete }) => {
  const overlayRef = useRef();
  const blobRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: onComplete,
    });

    // Set initial state
    gsap.set(overlayRef.current, { y: "100%" });

    // Slide in overlay
    tl.to(overlayRef.current, { y: "0%", duration: 0.7 });

    // Morph the blob
    tl.fromTo(
      blobRef.current,
      { scale: 0, rotation: 0 },
      { scale: 1.5, rotation: 360, duration: 1.4 },
      "-=0.4"
    );

    // Slide out overlay
    tl.to(overlayRef.current, { y: "-100%", duration: 0.7, delay: 0.2 });

    return () => {
      gsap.set(overlayRef.current, { y: "100%" });
      gsap.set(blobRef.current, { scale: 0 });
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0f0f0f",
        zIndex: 9999,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        ref={blobRef}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transformOrigin: "center", transform: "scale(0)" }}
      >
        <path d="M49.1,-59.2C62.5,-47.6,72.9,-31.2,72.7,-15.9C72.6,-0.7,61.8,13.4,51.2,25.9C40.6,38.4,30.2,49.4,17.3,55.9C4.5,62.4,-10.7,64.3,-25.4,59.4C-40.1,54.4,-54.3,42.7,-61.9,27.8C-69.5,13,-70.6,-4.9,-63.5,-19.7C-56.3,-34.5,-40.8,-46.2,-25.1,-56.3C-9.4,-66.4,6.4,-74.9,21.5,-72.4C36.7,-69.8,49.1,-56.8,49.1,-59.2Z" />
      </svg>
    </div>
  );
};

export default FancyPageTransition;
