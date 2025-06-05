import React from "react";

import bgIconbox1 from "/src/assets/bg-iconbox1.jpg";
import bgIconbox2 from "/src/assets/bg-iconbox2.jpg";
import bgIconbox3 from "/src/assets/bg-iconbox3.jpg";

import iconbox1 from "/src/assets/iconbox1.2.png";
import iconbox2 from "/src/assets/iconbox2.png";
import iconbox3 from "/src/assets/iconbox3.png";
import iconbox4 from "/src/assets/iconbox4.png";

function Architecture_page4() {
  return (
    <>
      <section className="page_4 relative flex flex-col items-center overflow-hidden pt-[60px] h-[120vh] invert bg-white">
        <div className="font-[600] text-[14px] text-[#918c89] pb-[20px]">
          [ OUR SERVICES ]
        </div>
        <div className="font-[400] text-[2rem] pb-[15px]">
          What Can We Offer
        </div>
        <div className="font-[600] pb-[30px]">..............</div>
        <div className="flex flex-col gap-[5vh]">
          <div className="what_we_offer flex gap-6">
            <div className="we_offers h-[40vh] w-[25vw] flex flex-col items-center">
              <img
                className="h-[40vh] w-[25vw] -z-50"
                src={bgIconbox1}
                alt=""
              />
              <div className="relative top-[-35vh]">
                <img src={iconbox1} alt="" />
              </div>
              <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
                Design & Planning
              </div>
              <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
                We will help you to get the result you dreamed of.
              </div>
              <div className="relative top-[-35vh] py-[1vw] font-[500]">
                Read More
              </div>
            </div>
            <div className="we_offers h-[40vh] w-[25vw] flex flex-col items-center">
              <img
                className="h-[40vh] w-[25vw] -z-40"
                src={bgIconbox2}
                alt=""
              />
              <div className="relative top-[-35vh]">
                <img src={iconbox2} alt="" />
              </div>
              <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
                Custom Solutions
              </div>
              <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
                Individual, aesthetically stunning solutions for customers.
              </div>
              <div className="relative top-[-35vh] py-[1vw] font-[500]">
                READ MORE
              </div>
            </div>
          </div>
          <div className="what_we_offer flex gap-6">
            <div className="we_offers h-[40vh] w-[25vw] flex flex-col items-center">
              <img
                className="h-[40vh] w-[25vw] -z-50"
                src={bgIconbox3}
                alt=""
              />
              <div className="relative top-[-35vh]">
                <img src={iconbox3} alt="" />
              </div>
              <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
                Furniture & Decor
              </div>
              <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
                We create and produce our product design lines.
              </div>
              <div className="relative top-[-35vh] py-[1vw] font-[500]">
                READ MORE
              </div>
            </div>
            <div className="we_offers h-[40vh] w-[25vw] flex flex-col items-center">
              <img
                className="h-[40vh] w-[25vw] -z-50"
                src={bgIconbox3}
                alt=""
              />
              <div className="relative top-[-35vh]">
                <img src={iconbox4} alt="" />
              </div>
              <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
                Exterior Design
              </div>
              <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
                We will help you to get the result you dreamed of.
              </div>
              <div className="relative top-[-35vh] py-[1vw] font-[500]">
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Architecture_page4;
