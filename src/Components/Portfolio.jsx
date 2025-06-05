import pheaderServiceDetail1 from "/src/assets/pheader-service-detail1.jpg";

import project1 from "/src/assets/project1.jpg";
import project2 from "/src/assets/project2.jpg";
import project3 from "/src/assets/project3.jpg";
import project4 from "/src/assets/project4.jpg";
import project5 from "/src/assets/project5.jpg";
import project6 from "/src/assets/project6.jpg";
import project7 from "/src/assets/project7.jpg";
import project8 from "/src/assets/project8.jpg";

import cate1 from "/src/assets/cate1.jpg";
import concept4 from "/src/assets/concept4.jpg";

import Exterior1 from "/src/assets/Exterior1.jpg";
import Exterior2 from "/src/assets/Exterior2.jpg";
import Exterior3 from "/src/assets/Exterior3.jpg";
import Exterior4 from "/src/assets/Exterior4.jpg";
import Exterior5 from "/src/assets/Exterior5.jpg";
import Exterior6 from "/src/assets/Exterior6.jpg";
import Exterior7 from "/src/assets/Exterior7.jpg";
import Exterior8 from "/src/assets/Exterior8.jpg";
import Exterior9 from "/src/assets/Exterior9.jpg";
import Exterior10 from "/src/assets/Exterior10.jpg";
import Exterior11 from "/src/assets/Exterior11.jpg";
import Exterior12 from "/src/assets/Exterior12.jpg";
import Exterior13 from "/src/assets/Exterior13.jpg";
import Exterior14 from "/src/assets/Exterior14.jpg";
import Exterior15 from "/src/assets/Exterior15.jpg";

import furniture1 from "/src/assets/furniture1.webp";
import furniture2 from "/src/assets/furniture2.avif";
import furniture3 from "/src/assets/furniture3.jpg";
import furniture4 from "/src/assets/furniture4.jpg";
import furniture5 from "/src/assets/furniture5.webp";

import interiorDesign1 from "/src/assets/interior_design.jpg";
import interiorDesign2 from "/src/assets/interior-design2.jpg";
import luxuryInterior from "/src/assets/Luxury-Interior-Design-Living-Room-1080x675.webp";

function Portfolio() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[50vh]"
        style={{
          backgroundImage: `url(${pheaderServiceDetail1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-[4.5rem] text-white font-[300]">Portfolio</div>
      </div>
      <section className="flex flex-col justify-center items-center bg-black text-white">
        <div className="py-[3vh] text-[#a3a2a2] text-[20px] font-[600]">
          [ our portfolio ]
        </div>
        <div className="w-[30vw] text-[2vw] text-center ">
          Some of Our Works and Case Studies for Clients
        </div>
        <div className="font-[700] py-[1vh]">............................</div>

        <div className="Project_imgs flex flex-col pb-[5vh] py-[2vh] gap-[3vh]">
          <div className="img_sec1 flex h-[46vh] w-full gap-[2vh]">
            {[project1, project2, project3].map((src, i) => (
              <div key={i} className={`pro_img${i + 1} overflow-hidden`}>
                <img
                  className="h-[50vh] object-cover"
                  src={src}
                  alt={`Project ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {[
            [project7, project8, cate1],
            [concept4, Exterior1, Exterior2],
            [project4, project5, project6],
            [Exterior3, Exterior4, Exterior5],
            [Exterior6, Exterior7, Exterior8],
            [Exterior9, Exterior10, Exterior11],
            [Exterior12, Exterior15, Exterior14],
            [Exterior13, furniture1, furniture2],
            [furniture3, furniture4, furniture5],
            [interiorDesign1, interiorDesign2, luxuryInterior],
          ].map((group, idx) => (
            <div key={idx} className="img_sec2 flex h-[46vh] w-full gap-[2vh]">
              {group.map((src, i) => (
                <div key={i} className={`pro_img${i + 4} overflow-hidden`}>
                  <img
                    className="h-[50vh] object-cover"
                    src={src}
                    alt={`Portfolio image ${idx}-${i}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
