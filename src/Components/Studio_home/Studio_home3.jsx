import React from "react";

// Import images
import bgIconBox1 from "/src/assets/bg-iconbox1.jpg";
import bgIconBox2 from "/src/assets/bg-iconbox2.jpg";
import bgIconBox3 from "/src/assets/bg-iconbox3.jpg";

import iconBox1 from "/src/assets/iconbox1.2.png";
import iconBox2 from "/src/assets/iconbox2.png";
import iconBox3 from "/src/assets/iconbox3.png";
import iconBox4 from "/src/assets/iconbox4.png";

function OfferCard({ bgSrc, iconSrc, title, description }) {
  return (
    <div className="we_offers h-[40vh] w-[25vw] flex flex-col items-center relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={bgSrc}
        alt={`${title} background`}
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      />
      <div className="relative mt-6">
        <img src={iconSrc} alt={`${title} icon`} className="mx-auto" />
      </div>
      <div className="relative text-[2rem] py-[1vw] font-semibold">{title}</div>
      <div className="relative w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
        {description}
      </div>
      <div className="relative py-[1vw] font-[500] cursor-pointer text-[#555] hover:text-[#000]">
        Read More
      </div>
    </div>
  );
}

function Studio_home3() {
  return (
    <section className="page_4 relative flex flex-col items-center overflow-hidden pt-[60px] h-[140vh] invert bg-white">
      <div className="font-[600] text-[14px] text-[#918c89] pb-[20px]">
        [ OUR SERVICES ]
      </div>
      <div className="font-[400] text-[2rem] pb-[15px]">What Can We Offer</div>
      <div className="font-[600] pb-[30px]">..............</div>

      <div className="flex flex-col gap-[5vh]">
        <div className="what_we_offer flex gap-6 justify-center">
          <OfferCard
            bgSrc={bgIconBox1}
            iconSrc={iconBox1}
            title="Design & Planning"
            description="We will help you to get the result you dreamed of."
          />
          <OfferCard
            bgSrc={bgIconBox2}
            iconSrc={iconBox2}
            title="Custom Solutions"
            description="Individual, aesthetically stunning solutions for customers."
          />
        </div>

        <div className="what_we_offer flex gap-6 justify-center">
          <OfferCard
            bgSrc={bgIconBox3}
            iconSrc={iconBox3}
            title="Furniture & Decor"
            description="We create and produce our product design lines."
          />
          <OfferCard
            bgSrc={bgIconBox3}
            iconSrc={iconBox4}
            title="Exterior Design"
            description="We will help you to get the result you dreamed of."
          />
        </div>
      </div>

      <div className="flex gap-[10vw] py-[10vh]">
        {[
          { count: "180 +", label: "CURRENT CLIENTS" },
          { count: "10 +", label: "YEARS OF EXPERIENCE" },
          { count: "35 +", label: "AWARDS WINNING" },
          { count: "5 +", label: "OFFICES WORLDWIDE" },
        ].map(({ count, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="font-[300] text-[3rem] text-[#9f9e9e]">
              [{count}]
            </div>
            <div className="font-[400] text-[1.3rem]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studio_home3;
