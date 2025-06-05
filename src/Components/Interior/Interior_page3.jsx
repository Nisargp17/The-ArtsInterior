import React from "react";
import sphereIcon from "/src/assets/sphere-svgrepo-com.png";
import homeIcon from "/src/assets/icons8-home-100.png";
import triangleIcon from "/src/assets/icons8-triangle-100.png";
import surfaceIcon from "/src/assets/icons8-surface-100.png";

const benefits = [
  {
    icon: sphereIcon,
    title: "Customer Focus",
    desc: "Customers choose us for the simplicity of communication and an understanding of what it’s necessary to receive in the end.",
  },
  {
    icon: homeIcon,
    title: "Professionalism",
    desc: "We develop a full cycle of project documentation: an outline sketch, a design project, working documentation.",
  },
  {
    icon: triangleIcon,
    title: "Multi Experience",
    desc: "We provide a wide range of services, we work in different styles, we project commercial and residential properties.",
  },
  {
    icon: surfaceIcon,
    title: "Author`s Supervision",
    desc: "We develop an attractive and convenient space for work and leisure time, working on units, selecting materials, manufacturers.",
  },
];

function Interior_page3() {
  return (
    <div className="h-[70vh] bg-black flex justify-center items-center gap-[3vw]">
      <div className="w-[25vw] h-full text-white">
        <div className="pb-[1vh] text-[#a3a2a2]">[ our benefits ]</div>
        <div className="text-[2.5vw] w-[23vw]">
          Ambitious Studio with a Successful Concept & Ideas
        </div>
        <div className="button_hover h-[6.5vh] w-[10vw] invert">
          <div className="button_about flex justify-center items-center">
            View Projects
          </div>
          <div className="button_lines relative"></div>
          <div className="button_lines2 relative"></div>
        </div>
      </div>

      <div className="w-[50vw] h-full flex flex-wrap gap-y-4 text-white">
        {benefits.map((benefit, index) => (
          <div key={index} className="w-1/2 h-1/2 px-3">
            <img
              className="h-[4vw]"
              src={benefit.icon}
              alt={benefit.title + " Icon"}
            />
            <div className="text-[1.5vw] py-[2vh]">{benefit.title}</div>
            <div className="text-[20px] text-[#818181] w-[22vw]">
              {benefit.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interior_page3;
