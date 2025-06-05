import React from "react";
import "./Architecture.css";

import gallery1 from "/src/assets/gallery1.jpg";
import gallery2 from "/src/assets/gallery2.jpg";
import gallery3 from "/src/assets/gallery3.jpg";
import gallery4 from "/src/assets/gallery4.jpg";
import gallery5 from "/src/assets/gallery5.jpg";

function Architecture_page3() {
  return (
    <>
      <section className="h-[70vh] bg-black flex gap-[20px] justify-center items-center">
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src={gallery1} alt="Gallery 1" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white relative top-[5vh]">
          <img src={gallery2} alt="Gallery 2" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src={gallery3} alt="Gallery 3" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white relative top-[5vh]">
          <img src={gallery4} alt="Gallery 4" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src={gallery5} alt="Gallery 5" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Architecture_page3;
