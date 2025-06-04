// src/Components/PageTransitionLoader.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransitionLoader = ({ onComplete }) => {
  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Slide in
    tl.to(loaderRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Slide out
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 0.6,
      delay: 0.3,
      ease: "power3.in",
    });

    return () => {
      gsap.set(loaderRef.current, { y: "100%" });
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transform: "translateY(100%)",
      }}
    >
      <h2>Loading...</h2>
    </div>
  );
};

export default PageTransitionLoader;
