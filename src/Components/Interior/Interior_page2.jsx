import "./Interior_page2.css";
import React from "react";
import feature1 from "/src/assets/features.jpg";
import feature2 from "/src/assets/featured2.jpg";
import feature3 from "/src/assets/featured3.jpg";
import bgFeature from "/src/assets/bg-features.jpg";

const features = [
  {
    id: "01",
    title: "Quality Furniture",
    img: feature1,
  },
  {
    id: "02",
    title: "Unique Concept",
    img: feature2,
  },
  {
    id: "03",
    title: "Attention to Details",
    img: feature3,
  },
];

function Interior_page2() {
  return (
    <div className="flex gap-[4vw] justify-center items-center bg-black h-[70vh]">
      {features.map((feature, index) => (
        <div key={index} className="h-[57vh] w-[20vw] relative top-[-12vh]">
          <div className="features_hover">
            <img
              className="brightness-[50%]"
              src={feature.img}
              alt={feature.title}
            />
          </div>
          <div>
            <img className="w-full absolute" src={bgFeature} alt="Background" />
            <div className="text-white relative text-center text-[1.3vw] top-[1.5vw]">
              {feature.id}. {feature.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Interior_page2;
