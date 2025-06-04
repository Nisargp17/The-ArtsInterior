import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

function Exterior_page6() {
  const data = [
    {
      id: 1,
      src: "/src/assets/Exterior1.jpg",
      Title: "Poolscape Villa",
      type: "Civic & Cultural",
    },
    {
      id: 2,
      src: "/src/assets/Exterior2.jpg",
      Title: "European Lard Station",
      type: "Civic & Cultural, Residential & Villas",
    },
    {
      id: 3,
      src: "/src/assets/Exterior3.jpg",
      Title: "Yabroudi Villa",
      type: "Residential & Villas",
    },
    {
      id: 4,
      src: "/src/assets/Exterior4.jpg",
      Title: "Cultural Complex Centre",
      type: "Civic & Cultural, Residential & Villas",
    },
    {
      id: 5,
      src: "/src/assets/Exterior5.jpg",
      Title: "Dalbourne Villa",
      type: "Residential & Villas",
    },
    {
      id: 6,
      src: "/src/assets/Exterior6.jpg",
      Title: "Amman Rotana Hotel",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 7,
      src: "/src/assets/Exterior7.jpg",
      Title: "Hilltop Villa",
      type: "Residential & Villas",
    },
    {
      id: 8,
      src: "/src/assets/Exterior10.jpg",
      Title: "Lakeside Villa",
      type: "Residential & Villas",
    },
    {
      id: 9,
      src: "/src/assets/Exterior11.jpg",
      Title: "Hower Cafe",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 10,
      src: "/src/assets/Exterior12.jpg",
      Title: "Evo Grand Hall",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 11,
      src: "/src/assets/Exterior13.jpg",
      Title: "Lard Station",
      type: "CIVIC & CULTURAL",
    },
    {
      id: 12,
      src: "/src/assets/Exterior14.jpg",
      Title: "Simplestic Villa",
      type: "Residential & Villas",
    },
    {
      id: 13,
      src: "/src/assets/Exterior15.jpg",
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
    if (dir === "right") {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % data.length);
      setDirection("right");
    } else if (dir === "left") {
      setPrev(current);
      setCurrent((prev) => (prev - 1 + data.length) % data.length);
      setDirection("left");
    }
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
