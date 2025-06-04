// src/components/Footer.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css"; // custom animation CSS

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.to(footerRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer bg-gray-900 text-white relative z-[50] h-[55vh] w-full flex items-center justify-center translate-y-full bg-[url(/src/assets/footer_bg.jpg)] bg-[bottom] bg-[cover] brightness-50"
      id="footer"
    >
      <div className="w-11/12 max-w-7xl flex justify-between items-center">
        {/* Left: Logo and Name */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.svg"
            alt="THE-Art Logo"
            className="w-14 h-auto object-contain"
          />
          <h2 className="text-2xl font-semibold tracking-wide">
            THE-Architectures
          </h2>
        </div>

        {/* Right: About Info */}
        <div className="max-w-md">
          <h3 className="text-xl font-medium mb-2">About Us</h3>
          <p className="text-gray-300 leading-relaxed">
            We craft sophisticated interiors with passion and precision. Every
            space tells a story—let us help you design yours.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
