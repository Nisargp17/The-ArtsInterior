// import "./HomePage.css";
// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";
// const slide = [
//   {
//     src: "src/assets/slider2-home1-1.jpg",
//     Title: "High-end Interior Design",
//     text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
//   },
//   {
//     src: "src/assets/slider3-home1.jpg",
//     Title: "Best Furniture and Decor",
//     text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
//   },
// ];
// function HomePage() {
//   const [isHovered, setIsHovered] = useState(false);

//   const HeroImgRef = useRef(null);
//   const HeroTitleRef = useRef(null);
//   const HeroTextRef = useRef(null);
//   const HeroButtonRef = useRef(null);
//   const [slideIndex, SetslideIndex] = useState(0);
//   function ShowNextImg() {
//     SetslideIndex((slideIndex) => {
//       if (slideIndex === slide.length - 1) return 0;
//       return slideIndex + 1;
//     });
//   }
//   function ShowPrevImg() {
//     SetslideIndex((slideIndex) => {
//       if (slideIndex === 0) return slide.length - 1;
//       return slideIndex - 1;
//     });
//   }
//   // useEffect(() => {
//   //   const img = HeroImgRef.current;
//   //   const title = HeroTitleRef.current;
//   //   const text = HeroTextRef.current;
//   //   const button = HeroButtonRef.current;
//   //   gsap.fromTo(
//   //     img,
//   //     {
//   //       opacity: 0,
//   //     },
//   //     {
//   //       opacity: 1,
//   //       yoyo: true,
//   //       ease: "circ.out",
//   //       duration: 2,
//   //     }
//   //   );
//   //   gsap.fromTo(
//   //     title,
//   //     {
//   //       opacity: 0,
//   //       y: "10vh",
//   //     },
//   //     {
//   //       opacity: 1,
//   //       y: "0vh",
//   //       duration: 1,
//   //       delay: 2,
//   //       ease: "back.in",
//   //       yoyo: true,
//   //     }
//   //   );
//   //   gsap.fromTo(
//   //     text,
//   //     {
//   //       opacity: 0,
//   //       y: "10vh",
//   //     },
//   //     {
//   //       opacity: 1,
//   //       y: "0vh",
//   //       duration: 1,
//   //       delay: 2.5,
//   //       ease: "back.in",
//   //       yoyo: true,
//   //     }
//   //   );
//   //   gsap.fromTo(
//   //     button,
//   //     {
//   //       opacity: 0,
//   //       y: "10vh",
//   //     },
//   //     {
//   //       opacity: 1,
//   //       y: "0vh",
//   //       duration: 1,
//   //       delay: 3,
//   //       ease: "back.in",
//   //       yoyo: true,
//   //     }
//   //   );
//   //   gsap.fromTo(
//   //     ".bg_text",
//   //     {
//   //       opacity: 0,
//   //       y: "10vh",
//   //       rotate: 40,
//   //     },
//   //     {
//   //       opacity: 1,
//   //       y: "0vh",
//   //       duration: 2,
//   //       delay: 2,
//   //       ease: "back.in",
//   //       yoyo: true,
//   //       stagger: 0.3,
//   //       rotate: 0,
//   //     }
//   //   );
//   //   gsap.fromTo(
//   //     ".lines",
//   //     {
//   //       opacity: 0,
//   //       y: "10vh",
//   //     },
//   //     {
//   //       opacity: 1,
//   //       y: "0vh",
//   //       duration: 2,
//   //       delay: 2,
//   //       ease: "back.in",
//   //       yoyo: true,
//   //       stagger: 0.3,
//   //     }
//   //   );
//   // }, [slideIndex]);
//   useEffect(() => {
//     const img = HeroImgRef.current;
//     const title = HeroTitleRef.current;
//     const text = HeroTextRef.current;
//     const button = HeroButtonRef.current;

//     gsap.killTweensOf([img, title, text, button, ".bg_text", ".lines"]);

//     const animate = (el, from, to) => {
//       if (el) gsap.fromTo(el, from, to);
//     };

//     animate(img, { opacity: 0 }, { opacity: 1, duration: 2, ease: "circ.out" });
//     animate(
//       title,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 2 }
//     );
//     animate(
//       text,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 2.5 }
//     );
//     animate(
//       button,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 3 }
//     );

//     gsap.fromTo(
//       ".bg_text",
//       { opacity: 0, y: "10vh", rotate: 40 },
//       { opacity: 1, y: 0, rotate: 0, duration: 2, delay: 2, stagger: 0.3 }
//     );

//     gsap.fromTo(
//       ".lines",
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 2, delay: 2, stagger: 0.3 }
//     );
//   }, [slideIndex]);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     SetslideIndex((prevIndex) => (prevIndex + 1) % slide.length);
//   //   }, 20000);

//   //   return () => clearInterval(interval);
//   // }, [slide.length]);
//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       SetslideIndex((prevIndex) => (prevIndex + 1) % slide.length);
//     }, 15000);

//     return () => clearInterval(interval);
//   }, [isHovered]);

//   return (
//     <>
//       <div
//         className="Home_page flex flex-col justify-center items-center overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <img
//           ref={HeroImgRef}
//           className="-z-50 absolute hero_image"
//           src={slide[slideIndex].src}
//           alt=""
//         />
//         <div className="hero_bg_text flex gap-20">
//           <div className="bg_text relative inline-block top-[7vh]">Q</div>
//           <div className="bg_text relative inline-block top-[7vh]">U</div>
//           <div className="bg_text relative inline-block top-[7vh]">A</div>
//           <div className="bg_text relative inline-block top-[7vh]">L</div>
//           <div className="bg_text relative inline-block top-[7vh]">I</div>
//           <div className="bg_text relative inline-block top-[7vh]">T</div>
//           <div className="bg_text relative inline-block top-[7vh]">Y</div>
//         </div>
//         <div
//           ref={HeroTitleRef}
//           className="relative hero_title top-[-14.5vh] z-20 "
//         >
//           {slide[slideIndex].Title}
//         </div>
//         <div
//           ref={HeroTextRef}
//           className="relative hero_text w-[45vw] text-center top-[-11vh]"
//         >
//           {slide[slideIndex].text}
//         </div>
//         <button ref={HeroButtonRef} className="relative button_main top-[-6vh]">
//           View Projects
//         </button>
//         <div className="lines Horizontal_line relative bottom-[-15.5vh]"></div>
//         <div className="lines Virtical_line z-50 absolute left-[5.5vw]"></div>
//         <div className="lines Virtical_line z-50 absolute right-[5.5vw]"></div>
//         <div className="lines arrows relative flex gap-12 bottom-[-18vh] right-[-44.4vw]">
//           <img
//             onClick={ShowPrevImg}
//             className="h-12 "
//             src="src/assets/arl.svg"
//             alt=""
//           />
//           <img
//             onClick={ShowNextImg}
//             className="h-12 "
//             src="src/assets/arr.svg"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

// import "./HomePage.css";
// import gsap from "gsap";
// import React, { useEffect, useRef, useState } from "react";

// // ✅ Moved outside for performance
// const slide = [
//   {
//     src: "src/assets/slider2-home1-1.jpg",
//     Title: "High-end Interior Design",
//     text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
//     bgText: "QUALITY",
//   },
//   {
//     src: "src/assets/slider3-home1.jpg",
//     Title: "Best Furniture and Decor",
//     text: "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
//     bgText: "STUDIO",
//   },
// ];

// function HomePage() {
//   const HeroImgRef = useRef(null);
//   const HeroTitleRef = useRef(null);
//   const HeroTextRef = useRef(null);
//   const HeroButtonRef = useRef(null);

//   const [slideIndex, SetslideIndex] = useState(0);
//   const [prevSlide, setPrevSlide] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const ShowNextImg = () => {
//     setPrevSlide(slideIndex);
//     SetslideIndex((prev) => (prev + 1) % slide.length);
//   };

//   const ShowPrevImg = () => {
//     setPrevSlide(slideIndex);
//     SetslideIndex((prev) => (prev - 1 + slide.length) % slide.length);
//   };

//   // ✅ Auto image change every 5s
//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       setPrevSlide(slideIndex);
//       SetslideIndex((prevIndex) => (prevIndex + 1) % slide.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isHovered, slideIndex]);

//   // ✅ Animate content when slide changes
//   useEffect(() => {
//     const img = HeroImgRef.current;
//     const title = HeroTitleRef.current;
//     const text = HeroTextRef.current;
//     const button = HeroButtonRef.current;

//     const animate = (el, from, to) => {
//       if (el) gsap.fromTo(el, from, to);
//     };

//     // Kill previous animations
//     gsap.killTweensOf([img, title, text, button, ".bg_text", ".lines"]);

//     animate(
//       img,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.2, ease: "circ.out" }
//     );
//     animate(
//       title,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 0.4 }
//     );
//     animate(
//       text,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 0.6 }
//     );
//     animate(
//       button,
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1, delay: 0.8 }
//     );

//     gsap.fromTo(
//       ".bg_text",
//       { opacity: 0, y: "10vh", rotate: 40 },
//       { opacity: 1, y: 0, rotate: 0, duration: 1.5, delay: 0.5, stagger: 0.2 }
//     );

//     gsap.fromTo(
//       ".lines",
//       { opacity: 0, y: "10vh" },
//       { opacity: 1, y: 0, duration: 1.5, delay: 0.6, stagger: 0.2 }
//     );
//   }, [slideIndex]);

//   return (
//     <div
//       className="Home_page flex flex-col justify-center items-center overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* ✅ Smooth fade transition between slides */}
//       {prevSlide !== null && prevSlide !== slideIndex && (
//         <img
//           key={`prev-${prevSlide}`}
//           className="hero_image absolute -z-50 fade-img"
//           src={slide[prevSlide].src}
//           alt=""
//           onAnimationEnd={() => setPrevSlide(null)}
//         />
//       )}

//       <img
//         ref={HeroImgRef}
//         key={`current-${slideIndex}`}
//         className="hero_image absolute -z-50 fade-img"
//         src={slide[slideIndex].src}
//         alt=""
//       />

//       {/* ✅ Background Text */}
//       <div className="hero_bg_text flex gap-20">
//         {slide[slideIndex].bgText.split("").map((char, i) => (
//           <div key={i} className="bg_text relative inline-block top-[7vh]">
//             {char}
//           </div>
//         ))}
//       </div>

//       {/* ✅ Title / Text / Button */}
//       <div
//         ref={HeroTitleRef}
//         className="relative hero_title top-[-14.5vh] z-20 "
//       >
//         {slide[slideIndex].Title}
//       </div>
//       <div
//         ref={HeroTextRef}
//         className="relative hero_text w-[45vw] text-center top-[-11vh]"
//       >
//         {slide[slideIndex].text}
//       </div>
//       <button ref={HeroButtonRef} className="relative button_main top-[-6vh]">
//         View Projects
//       </button>

//       {/* ✅ Lines */}
//       <div className="lines Horizontal_line relative bottom-[-15.5vh]"></div>
//       <div className="lines Virtical_line z-50 absolute left-[5.5vw]"></div>
//       <div className="lines Virtical_line z-50 absolute right-[5.5vw]"></div>

//       {/* ✅ Navigation Arrows */}
//       <div className="lines arrows relative flex gap-12 bottom-[-18vh] right-[-44.4vw]">
//         <img
//           onClick={ShowPrevImg}
//           className="h-12 cursor-pointer"
//           src="src/assets/arl.svg"
//           alt="Previous"
//         />
//         <img
//           onClick={ShowNextImg}
//           className="h-12 cursor-pointer"
//           src="src/assets/arr.svg"
//           alt="Next"
//         />
//       </div>
//     </div>
//   );
// }

// export default HomePage;

//New code
import "./HomePage.css";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// ✅ Image Imports
import slider1 from "/src/assets/slider2-home1-1.jpg";
import slider2 from "/src/assets/slider3-home1.jpg";
import arrowLeft from "/src/assets/arl.svg";
import arrowRight from "/src/assets/arr.svg";
// ✅ Slide data using imports
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

  // Auto slide change
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setPrevSlide(slideIndex);
      SetslideIndex((prevIndex) => (prevIndex + 1) % slide.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isHovered, slideIndex]);

  // Animate content on slide change
  useEffect(() => {
    const img = HeroImgRef.current;
    const title = HeroTitleRef.current;
    const text = HeroTextRef.current;
    const button = HeroButtonRef.current;

    const animate = (el, from, to) => {
      if (el) gsap.fromTo(el, from, to);
    };

    // Kill previous animations
    gsap.killTweensOf([img, title, text, button, ".bg_text", ".lines"]);

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
        x: "100vw",
      },
      {
        opacity: 1,
        x: 0,
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
  }, [slideIndex]);

  return (
    <div
      className="Home_page flex flex-col justify-center items-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {prevSlide !== null && prevSlide !== slideIndex && (
        <img
          key={`prev-${prevSlide}`}
          className="hero_image absolute -z-50 fade-img"
          src={slide[prevSlide].src}
          alt=""
          onAnimationEnd={() => setPrevSlide(null)}
        />
      )}

      <img
        ref={HeroImgRef}
        key={`current-${slideIndex}`}
        className="hero_image absolute -z-50 fade-img"
        src={slide[slideIndex].src}
        alt=""
      />

      <div className="hero_bg_text flex gap-20">
        {slide[slideIndex].bgText.split("").map((char, i) => (
          <div key={i} className="bg_text relative inline-block top-[7vh]">
            {char}
          </div>
        ))}
      </div>

      <div
        ref={HeroTitleRef}
        className="relative hero_title top-[-14.5vh] z-20"
      >
        {slide[slideIndex].Title}
      </div>

      <div
        ref={HeroTextRef}
        className="relative hero_text w-[45vw] text-center top-[-11vh]"
      >
        {slide[slideIndex].text}
      </div>

      <button ref={HeroButtonRef} className="relative button_main top-[-6vh]">
        <NavLink to="/portfolio">View Projects</NavLink>
      </button>

      <div className="lines Horizontal_line relative bottom-[-15.5vh]"></div>
      <div className="lines Virtical_line z-50 absolute left-[5.5vw]"></div>
      <div className="lines Virtical_line z-50 absolute right-[5.5vw]"></div>

      <div className="lines arrows relative flex gap-12 bottom-[-18vh] right-[-44.4vw]">
        <img
          onClick={ShowPrevImg}
          className="h-12 cursor-pointer"
          src={arrowLeft}
          alt="Previous"
        />
        <img
          onClick={ShowNextImg}
          className="h-12 cursor-pointer"
          src={arrowRight}
          alt="Next"
        />
      </div>
    </div>
  );
}

export default HomePage;
