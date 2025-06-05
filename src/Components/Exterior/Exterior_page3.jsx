import React from "react";
import BgImage from "/src/assets/bg1-home2.jpg";
import Exterior7 from "/src/assets/Exterior7.jpg";

function Exterior_page3() {
  return (
    <section
      className="h-[65vh] bg-black text-[white] flex justify-center items-center gap-[5vh]"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-[40vw] justify-center items-end">
        <div className="text-[3vw] py-[2vh]">Reimagine Your Outdoors.</div>
        <div className="text-[20px] py-[2vh] w-[30vw] text-right">
          Unlock the full potential of your property with expert exterior
          design. We blend innovative concepts with meticulous craftsmanship to
          transform your outdoor spaces into breathtaking extensions of your
          lifestyle.
        </div>
      </div>
      <div className="h-[60vh] w-[60vw] rounded-l-full overflow-hidden">
        <img src={Exterior7} alt="Reimagined Outdoor Space" />
      </div>
    </section>
  );
}

export default Exterior_page3;
