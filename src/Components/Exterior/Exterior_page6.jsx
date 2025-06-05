import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// Import images
import Exterior1 from "/src/assets/Exterior1.jpg";
import Exterior2 from "/src/assets/Exterior2.jpg";
import Exterior3 from "/src/assets/Exterior3.jpg";
import Exterior4 from "/src/assets/Exterior4.jpg";
import Exterior5 from "/src/assets/Exterior5.jpg";
import Exterior6 from "/src/assets/Exterior6.jpg";
import Exterior7 from "/src/assets/Exterior7.jpg";
import Exterior10 from "/src/assets/Exterior10.jpg";
import Exterior11 from "/src/assets/Exterior11.jpg";
import Exterior12 from "/src/assets/Exterior12.jpg";
import Exterior13 from "/src/assets/Exterior13.jpg";
import Exterior14 from "/src/assets/Exterior14.jpg";
import Exterior15 from "/src/assets/Exterior15.jpg";

function Exterior_page6() {
  const data = [
    {
      id: 1,
      src: Exterior1,
      Title: "Poolscape Villa",
      type: "Civic & Cultural",
    },
    {
      id: 2,
      src: Exterior2,
      Title: "European Lard Station",
      type: "Civic & Cultural, Residential & Villas",
    },
    {
      id: 3,
      src: Exterior3,
      Title: "Yabroudi Villa",
      type: "Residential & Villas",
    },
    {
      id: 4,
      src: Exterior4,
      Title: "Cultural Complex Centre",
      type: "Civic & Cultural, Residential & Villas",
    },
    {
      id: 5,
      src: Exterior5,
      Title: "Dalbourne Villa",
      type: "Residential & Villas",
    },
    {
      id: 6,
      src: Exterior6,
      Title: "Amman Rotana Hotel",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 7,
      src: Exterior7,
      Title: "Hilltop Villa",
      type: "Residential & Villas",
    },
    {
      id: 8,
      src: Exterior10,
      Title: "Lakeside Villa",
      type: "Residential & Villas",
    },
    { id: 9, src: Exterior11, Title: "Hower Cafe", type: "CIVIC & CULTURAL" },
    {
      id: 10,
      src: Exterior12,
      Title: "Evo Grand Hall",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 11,
      src: Exterior13,
      Title: "Lard Station",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 12,
      src: Exterior14,
      Title: "Simplestic Villa",
      type: "Residential & Villas",
    },
    {
      id: 13,
      src: Exterior15,
      Title: "Sidepool Villa",
      type: "Residential & Villas",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState("right");

  const prevImageRef = useRef(null);
  const currentImageRef = useRef(null);

  const getIndex = (offset) => (current + offset + data.length) % data.length;

  const handleClick = (dir) => {
    setPrev(current);
    setCurrent((prev) =>
      dir === "right"
        ? (prev + 1) % data.length
        : (prev - 1 + data.length) % data.length
    );
    setDirection(dir);
  };

  useEffect(() => {
    const fromX = direction === "right" ? 100 : -100;
    const toX = direction === "right" ? -100 : 100;

    if (prevImageRef.current) {
      gsap.fromTo(
        prevImageRef.current,
        { x: 0, opacity: 1 },
        { x: toX, opacity: 0, duration: 1, ease: "power2.inOut" }
      );
    }

    if (currentImageRef.current) {
      gsap.fromTo(
        currentImageRef.current,
        { x: fromX, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    }
  }, [current]);

  return (
    <section className="h-screen w-full bg-black flex justify-center items-center relative overflow-hidden">
      <img
        src={data[getIndex(-1)].src}
        alt=""
        className="absolute left-[-10vw] top-[50%] w-[25vw] h-[50vh] -translate-y-1/2 opacity-70 object-cover rounded-xl shadow-lg cursor-pointer"
        onClick={() => handleClick("left")}
      />
      <img
        src={data[getIndex(1)].src}
        alt=""
        className="absolute right-[-10vw] top-[50%] w-[25vw] h-[50vh] -translate-y-1/2 opacity-70 object-cover rounded-xl shadow-lg cursor-pointer"
        onClick={() => handleClick("right")}
      />

      {prev !== null && (
        <div
          ref={prevImageRef}
          className="absolute w-[60vw] h-[70vh] top-[49vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <img
            src={data[prev].src}
            alt={data[prev].Title}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      )}

      <div
        ref={currentImageRef}
        className="absolute w-[60vw] h-[70vh] top-[49vh] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <img
          src={data[current].src}
          alt={data[current].Title}
          className="w-full h-full object-cover rounded-xl shadow-xl"
        />
        <div className="flex flex-col justify-center items-center py-[2vh]">
          <div className="text-white text-[4vh] font-[600]">
            {data[current].Title}
          </div>
          <div className="text-white text-[20px] font-[600]">
            {data[current].type}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exterior_page6;
