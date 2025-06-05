import "./Page5.css";

import project1 from "/src/assets/project1.jpg";
import project2 from "/src/assets/project2.jpg";
import project3 from "/src/assets/project3.jpg";
import project4 from "/src/assets/project4.jpg";
import project5 from "/src/assets/project5.jpg";
import project6 from "/src/assets/project6.jpg";

function Page5() {
  return (
    <>
      <div className="Project_imgs flex flex-col h-[92vh]">
        <div className="img_sec1 flex h-[46vh] w-full">
          <div className="pro_img1 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project1} alt="Project 1" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[20vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Stylish Family Apartment
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ INTERIOR ]
              </div>
            </div>
          </div>

          <div className="pro_img2 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project2} alt="Project 2" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Minimal Guests House
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ DECOR ] [ INTERIOR ]
              </div>
            </div>
          </div>

          <div className="pro_img3 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project3} alt="Project 3" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Art Family Residence
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ ARCHITECTURE ]
              </div>
            </div>
          </div>
        </div>

        <div className="img_sec2 flex h-[46vh] w-full">
          <div className="pro_img4 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project4} alt="Project 4" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Private House in Spain
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ FURNITURE ]
              </div>
            </div>
          </div>

          <div className="pro_img5 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project5} alt="Project 5" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Modern Villa in Belgium
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ FURNITURE ]
              </div>
            </div>
          </div>

          <div className="pro_img6 overflow-hidden">
            <img className="h-[50vh] z-[-50]" src={project6} alt="Project 6" />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[25vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Minimalistic Style Apartment
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ FURNITURE ] [ INTERIOR ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
