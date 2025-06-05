import React from "react";
import image2 from "/src/assets/image2-home3.png";

function Studio_home2() {
  return (
    <>
      <section className="flex h-[80vh] justify-center items-center bg-black bg-[url(/src/assets/bg-slider-home3-dark.png)] text-white">
        <div className="w-[35vw]">
          <div className="text-[#a7a6a6] font-semibold py-[0.5vw]">
            [ OUR SKILLS ]
          </div>
          <div className="text-[2.5rem] pb-[0.5vw]">
            The Core Company Values
          </div>
          <div className="font-medium pb-[1vw]">.........................</div>
          <div className="w-[30vw] text-[#868686] text-[1.2rem] pb-[1vw]">
            We are constantly growing, learning, and improving and our partners
            are steadily increasing. 200 projects is a sizable number.
          </div>
          <div className="flex w-[20vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-bold text-[1rem]">INTERIOR SKETCH</div>
            <div className="font-bold text-[1rem]">65%</div>
          </div>
          <div className="flex w-[25vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-bold text-[1rem]">3D MODELING</div>
            <div className="font-bold text-[1rem]">85%</div>
          </div>
          <div className="flex w-[15vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-bold text-[1rem]">2D PLANNING</div>
            <div className="font-bold text-[1rem]">55%</div>
          </div>
        </div>
        <div className="w-[44vw]">
          <img
            className="relative left-[7vw]"
            src={image2}
            alt="Our Skills Visual"
          />
        </div>
        <div className="verticle_line_home relative h-[390vh] w-[1px] z-50 bg-[#918c89] bottom-[-70vh] left-[4.6vw]"></div>
        <div className="verticle_line_home relative h-[390vh] w-[1px] z-50 bg-[#918c89] bottom-[-70vh] right-[83.6vw]"></div>
      </section>
    </>
  );
}

export default Studio_home2;
