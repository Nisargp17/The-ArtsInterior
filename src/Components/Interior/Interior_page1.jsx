import "./Interior_page1.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "/src/assets/slider3-home2.jpg";

function Interior_page1() {
  const textRefs = useRef([]);
  const vLineRefs = useRef([]);
  const hLineRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      {
        opacity: 0,
        y: "10vh",
      },
      {
        opacity: 1,
        y: "0vh",
        duration: 3,
        delay: 0.5,
        ease: "back.inOut",
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      vLineRefs.current,
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: "40vh",
        duration: 3,
        delay: 1,
        ease: "back.inOut",
        stagger: 1,
      }
    );

    gsap.fromTo(
      hLineRefs.current,
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: "35vw",
        duration: 3,
        delay: 2,
        ease: "back.inOut",
        stagger: 1,
      }
    );
  }, []);

  return (
    <div className="interior_bg relative bg-black flex flex-col justify-center items-center overflow-hidden">
      <img
        className="absolute interior_hero_image"
        src={heroImage}
        alt="Interior Hero"
      />

      <div
        ref={(el) => (textRefs.current[0] = el)}
        className="interior_text text-white text-[8rem] font-[200]"
      >
        Dream House
      </div>

      <div className="text-white text-[18px] font-[200] flex gap-[25px] flex-wrap justify-center">
        {[
          "O U R",
          "P H I L I S O P H Y",
          "I N",
          "S I M P L E",
          "A N D",
          "Q U A L I T Y",
          "D E S I G N",
        ].map((word, index) => (
          <div
            key={index}
            ref={(el) => (textRefs.current[index + 1] = el)}
            className="interior_text"
          >
            {word}
          </div>
        ))}
      </div>

      <div
        ref={(el) => (vLineRefs.current[0] = el)}
        className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[20vw]"
      ></div>
      <div
        ref={(el) => (hLineRefs.current[0] = el)}
        className="interior_vline absolute bg-[#989898] h-[1px] w-[35vw] left-[17.5vw] top-[25vh]"
      ></div>
      <div
        ref={(el) => (vLineRefs.current[1] = el)}
        className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[50vw]"
      ></div>
      <div
        ref={(el) => (hLineRefs.current[1] = el)}
        className="interior_vline absolute bg-[#989898] h-[1px] w-[35vw] left-[47.5vw] top-[60vh]"
      ></div>
      <div
        ref={(el) => (vLineRefs.current[2] = el)}
        className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[80vw]"
      ></div>
    </div>
  );
}

export default Interior_page1;
