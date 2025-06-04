import "./Interior_page1.css";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
function Interior_page1() {
  useEffect(() => {
    gsap.fromTo(
      ".interior_text",
      {
        opacity: 0,
        y: "10vh",
      },
      {
        opacity: 1,
        y: "0vh",
        duration: 3,
        delay: 0.5,
        ease: "back.in",
        yoyo: true,
        stagger: 0.3,
      }
    );
    gsap.fromTo(
      ".interior_line",
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: "40vh",
        duration: 3,
        delay: 1,
        ease: "back.in",
        yoyo: true,
        stagger: 1,
      }
    );
    gsap.fromTo(
      ".interior_vline",
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: "35vw",
        duration: 3,
        delay: 2,
        ease: "back.in",
        yoyo: true,
        stagger: 1,
      }
    );
  }, []);
  return (
    <>
      <div className="interior_bg relative bg-black  flex flex-col justify-center items-center overflow-hidden">
        <img
          className=" top-[5vh] absolute interior_hero_image"
          src="/src/assets/slider3-home2.jpg"
          alt=""
        />
        <div className="interior_text text-[white] text-[8rem] font-[200]">
          Dream House
        </div>
        <div className=" text-[white] text-[18px] font-[200] flex gap-[25px]">
          <div className="interior_text">O U R</div>
          <div className="interior_text">P H I L I S O P H Y</div>
          <div className="interior_text">I N</div>
          <div className="interior_text">S I M P L E</div>
          <div className="interior_text">A N D</div>
          <div className="interior_text">Q U A L I T Y</div>
          <div className="interior_text">D E S I G N</div>
        </div>
        <div className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[20vw]"></div>
        <div className="interior_vline absolute bg-[#989898] h-[1px] w-[35vw] left-[17.5vw] top-[25vh]"></div>
        <div className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[50vw]"></div>
        <div className="interior_vline absolute bg-[#989898] h-[1px] w-[35vw] left-[47.5vw] top-[60vh]"></div>
        <div className="interior_line absolute bg-[#989898] h-[40vh] w-[1px] left-[80vw]"></div>
      </div>
    </>
  );
}
export default Interior_page1;
