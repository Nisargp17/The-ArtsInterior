import { useState } from "react";
import image2AboutUs from "/src/assets/image2-aboutus.png";

function About_us_5() {
  const [expandedId, setExpandedId] = useState(1);
  const handleToggle = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };
  const data = [
    {
      id: 1,
      question: "What is 3D design and how it work?",
      answer:
        "The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.",
    },
    {
      id: 2,
      question: "How interior design is cost?",
      answer:
        "The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.",
    },
    {
      id: 3,
      question: "How much time I will spend on planning?",
      answer:
        "The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.",
    },
    {
      id: 4,
      question: "Can I create custom design?",
      answer:
        "The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.",
    },
  ];
  return (
    <>
      <div className="h-[80vh] flex justify-center items-center gap-[6vw]">
        <div className="w-[30vw]">
          <div className="font-[600] text-[#9f9e9e] text-[14px] pb-[1vh]">
            [ HOW IT WORKS ]
          </div>
          <div className=" text-[3rem] pb-[0.7vh]">From Sketch to Life</div>
          <div className="font-[600] pb-[1vh]">.............</div>
          {data.map((item) => (
            <div key={item.id} className="box border-b-[1px] pb-[10px]">
              <div
                className="question flex justify-between text-[22px] pt-[20px] cursor-pointer"
                onClick={() => handleToggle(item.id)}
              >
                {item.question}
                <div>{expandedId === item.id ? "−" : "+"}</div>
              </div>
              <div
                className={`answer ${expandedId === item.id ? "expanded" : ""}`}
                style={{
                  height: expandedId === item.id ? "auto" : "0px",
                  overflow: "hidden",
                  color: "#8e8e8e",
                  paddingTop: expandedId === item.id ? "10px" : "0",
                  transition: "height 0.3s ease",
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40vw]">
          <img src={image2AboutUs} alt="About Us" />
        </div>
      </div>
    </>
  );
}

export default About_us_5;
