// import "./About_us_1.css";
// function About_us_1() {
//   return (
//     <>
//       <div className="">
//         <div className="about_background_img flex flex-col justify-center items-center">
//           <div className="text-[4rem] text-[white] font-[300]">About Us</div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About_us_1;

//new code
import "./About_us_1.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function About_us_1() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div className="about_background_img flex flex-col justify-center items-center">
      <div ref={titleRef} className="text-[4rem] text-white font-light">
        About Us
      </div>
    </div>
  );
}
export default About_us_1;
