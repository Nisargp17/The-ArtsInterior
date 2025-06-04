// src/Components/ShapeLoader.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ShapeLoader = ({ onComplete }) => {
  const overlayRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: onComplete,
    });

    // Slide in overlay
    tl.set(overlayRef.current, { y: "100%" });
    tl.to(overlayRef.current, { y: 0, duration: 0.6 });

    // Animate circle
    tl.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 },
      "-=0.3"
    );

    tl.to(circleRef.current, {
      scale: 1.5,
      duration: 0.4,
      yoyo: true,
      repeat: 1,
    });

    // Slide out overlay
    tl.to(overlayRef.current, { y: "-100%", duration: 0.6, delay: 0.3 });

    return () => {
      gsap.set(overlayRef.current, { y: "100%" });
      gsap.set(circleRef.current, { scale: 0 });
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <div
        ref={circleRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#f5f5f5",
          borderRadius: "50%",
          transform: "scale(0)",
        }}
      />
    </div>
  );
};

export default ShapeLoader;
