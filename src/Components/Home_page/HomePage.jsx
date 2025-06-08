import "./HomePage.css";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import slider1 from "/src/assets/slider2-home1-1.jpg";
import slider2 from "/src/assets/slider3-home1.jpg";
import arrowLeft from "/src/assets/arl.svg";
import arrowRight from "/src/assets/arr.svg";

const slide = [
  {
    src: slider1,
    Title: "High-end Interior Design",
    text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    bgText: "QUALITY",
  },
  {
    src: slider2,
    Title: "Best Furniture and Decor",
    text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    bgText: "STUDIO",
  },
];

function HomePage() {
  const HeroImgRef = useRef(null);
  const HeroTitleRef = useRef(null);
  const HeroTextRef = useRef(null);
  const HeroButtonRef = useRef(null);

  const [slideIndex, SetslideIndex] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const ShowNextImg = () => {
    setPrevSlide(slideIndex);
    SetslideIndex((prev) => (prev + 1) % slide.length);
  };

  const ShowPrevImg = () => {
    setPrevSlide(slideIndex);
    SetslideIndex((prev) => (prev - 1 + slide.length) % slide.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setPrevSlide(slideIndex);
      SetslideIndex((prevIndex) => (prevIndex + 1) % slide.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [isHovered, slideIndex]);

  useEffect(() => {
    const img = HeroImgRef.current;
    const title = HeroTitleRef.current;
    const text = HeroTextRef.current;
    const button = HeroButtonRef.current;

    gsap.killTweensOf([img, title, text, button, ".bg_text", ".lines"]);

    const animate = (el, from, to) => el && gsap.fromTo(el, from, to);

    animate(
      img,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "circ.out" }
    );
    animate(
      title,
      { opacity: 0, y: "10vh" },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
    animate(
      text,
      { opacity: 0, y: "10vh" },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );
    animate(
      button,
      { opacity: 0, y: "10vh" },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );

    gsap.fromTo(
      ".bg_text",
      {
        opacity: 0,
        x: () => `${Math.random() * 200 - 100}vw`,
        y: () => `${Math.random() * 100 - 50}vh`,
        rotation: () => Math.random() * 360,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".lines",
      { opacity: 0, y: "10vh" },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.6, stagger: 0.2 }
    );
  }, [slideIndex]);

  return (
    <div
      className="Home_page flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {prevSlide !== null && prevSlide !== slideIndex && (
        <img
          key={`prev-${prevSlide}`}
          className="hero_image absolute -z-50 fade-img object-cover w-full h-full"
          src={slide[prevSlide].src}
          alt=""
          onAnimationEnd={() => setPrevSlide(null)}
        />
      )}

      <img
        ref={HeroImgRef}
        key={`current-${slideIndex}`}
        className="hero_image absolute -z-50 fade-img object-cover w-full h-full"
        src={slide[slideIndex].src}
        alt=""
      />
      <div className="hero_bg_text hidden lg:flex gap-3 sm:gap-6 md:gap-10 lg:gap-20">
        {slide[slideIndex].bgText.split("").map((char, i) => (
          <div key={i} className="bg_text relative inline-block top-[7vh]">
            {char}
          </div>
        ))}
      </div>

      <div
        ref={HeroTitleRef}
        className="relative hero_title z-20 text-center top-[-7.5vw] px-2 sm:px-4"
      >
        {slide[slideIndex].Title}
      </div>

      <div
        ref={HeroTextRef}
        className="relative hero_text w-[90vw] sm:w-[75vw] md:w-[55vw] text-center top-[-11vh] px-2 sm:px-0"
      >
        {slide[slideIndex].text}
      </div>

      <button
        ref={HeroButtonRef}
        className="relative button_main top-[-6vh] text-sm sm:text-base"
      >
        <NavLink to="/portfolio">View Projects</NavLink>
      </button>

      <div className="lines Horizontal_line relative bottom-[-15.5vh] w-full h-[1px] bg-[#918c89]"></div>
      <div className="lines Virtical_line z-50 absolute left-[4vw] sm:left-[5.5vw] h-full w-[1px] bg-[#918c89]"></div>
      <div className="lines Virtical_line z-50 absolute right-[4vw] sm:right-[5.5vw] h-full w-[1px] bg-[#918c89]"></div>

      <div className="lines arrows relative flex gap-6 sm:gap-12 bottom-[-18vh] right-[-30vw] sm:right-[-44.4vw]">
        <img
          onClick={ShowPrevImg}
          className="h-10 sm:h-12 cursor-pointer"
          src={arrowLeft}
          alt="Previous"
        />
        <img
          onClick={ShowNextImg}
          className="h-10 sm:h-12 cursor-pointer"
          src={arrowRight}
          alt="Next"
        />
      </div>
    </div>
  );
}

export default HomePage;
