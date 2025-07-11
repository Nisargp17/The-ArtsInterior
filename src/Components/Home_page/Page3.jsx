import "./Page3.css";

import cate1 from "/src/assets/cate1.jpg";
import cate2 from "/src/assets/cate2.jpg";
import cate3 from "/src/assets/cate3.jpg";

function Page3() {
  return (
    <>
      <div className="flex h-[38vh] relative">
        <div className="image1 w-1/3">
          <img className="h-[38vh] w-fit" src={cate1} alt="Office Space" />
          <div className="relative z-40 top-[-16vh] left-[3vw]">
            Office Space
          </div>
          <div className="relative z-30 top-[-40vh] left-[12vw]">01</div>
          <div className="vertical_line z-60 top-[-74vh] left-[32vw]"></div>
          <div className="horizontal_line z-60 top-[-76vh] left-[1vw]"></div>
        </div>

        <div className="image2 w-1/3">
          <img className="h-[38vh] w-fit" src={cate2} alt="Public Space" />
          <div className="relative z-40 top-[-16vh] left-[3vw]">
            Public Space
          </div>
          <div className="relative z-30 top-[-40vh] left-[12vw]">02</div>
          <div className="vertical_line z-60 top-[-74vh] left-[32vw]"></div>
          <div className="horizontal_line z-60 top-[-76vh] left-[1vw]"></div>
        </div>

        <div className="image3 w-1/3">
          <img className="h-[38vh] w-fit" src={cate3} alt="Residential Space" />
          <div className="relative z-40 top-[-16vh] left-[3vw] w-[20vw]">
            Residential Space
          </div>
          <div className="relative z-30 top-[-40vh] left-[12vw] w-[17vw]">
            03
          </div>
          <div className="vertical_line1 relative z-60 h-[33vh] w-[2px] top-[-74vh] left-[32vw] bg-black"></div>
          <div className="horizontal_line1 relative z-60 h-[2px] w-[32vw] top-[-76vh] left-[1vw] bg-black"></div>
        </div>
      </div>
    </>
  );
}

export default Page3;
