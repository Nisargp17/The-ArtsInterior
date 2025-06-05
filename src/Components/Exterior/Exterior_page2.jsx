import React from "react";
import "./Exterior.css";

import Exterior1 from "/src/assets/Exterior1.jpg";
import Exterior2 from "/src/assets/Exterior2.jpg";
import Exterior3 from "/src/assets/Exterior3.jpg";
import Exterior4 from "/src/assets/Exterior4.jpg";
import Exterior5 from "/src/assets/Exterior5.jpg";
import Exterior6 from "/src/assets/Exterior6.jpg";

function Exterior_page2() {
  return (
    <section className="flex flex-col py-[3vh] bg-black justify-center items-center">
      <div className="text-white text-[5vh] relative right-[25.7vw]">
        Make it with passion.
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="h-[50vh] w-[40vw]">
          <img className="h-[50vh]" src={Exterior1} alt="Poolscape Villa" />
        </div>
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-start">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            Poolscape Villa
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh]">
            The Seascape Villas project constitutes one of the first urban
            interventions in this very unique context, a landscape dominated by
            mountains and sea.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-end">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            European Lard Station
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh] text-right">
            Hemicycle and offices for the Headquarters of the European
            Parliament including: a 750-seat hemicycle, 1133 offices for members
            of Parliament, 18 commission halls and catering centre and service
            areas.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
        <div className="h-[50vh] w-[40vw]">
          <img
            className="h-[50vh]"
            src={Exterior2}
            alt="European Lard Station"
          />
        </div>
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="h-[50vh] w-[40vw]">
          <img className="h-[50vh]" src={Exterior3} alt="Yabroudi Villa" />
        </div>
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-start">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            Yabroudi Villa
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh]">
            The project’s architecture expresses complementary features of a
            villa, made up of calm, quiet areas designed for family life, as
            well as reception areas, which are open and welcoming.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-end">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            Cultural Complex Centre
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh] text-right">
            Located near Muscat main entrance, the Cultural Centre emerges from
            a unique landscape, between the sea and the mountains, as an oasis
            where palm trees and mineral colonnades offer cool public spaces.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
        <div className="h-[50vh] w-[40vw]">
          <img
            className="h-[50vh]"
            src={Exterior4}
            alt="Cultural Complex Centre"
          />
        </div>
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="h-[50vh] w-[40vw]">
          <img className="h-[50vh]" src={Exterior5} alt="Dalbourne Villa" />
        </div>
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-start">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            Dalbourne Villa
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh]">
            The two Daourne villas are situated in the northern part of
            Guangzhou. The villa area is bordered by a new high speed road to
            the west, and by the famous Bai Yun mountain to the east.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
      </div>

      <div className="h-1/6 flex justify-center items-center gap-[10vh] py-[3vh]">
        <div className="w-[30vw] text-white h-[50vh] flex flex-col justify-center items-end">
          <div className="project_text_hover text-[2.5vw] font-[300] py-[1vh]">
            Amman Rotana Hotel
          </div>
          <div className="text-[20px] text-[#989898] py-[1vh] text-right">
            54-room hotel, including atrium, cafe, restaurants, swimming pool,
            spa, fitness centre, conference room, ballroom and VIP panoramic
            lounge.
          </div>
          <div className="text-[20px] font-[300] py-[1vh]">READ -{">"}</div>
        </div>
        <div className="h-[50vh] w-[40vw]">
          <img className="h-[50vh]" src={Exterior6} alt="Amman Rotana Hotel" />
        </div>
      </div>
    </section>
  );
}

export default Exterior_page2;
