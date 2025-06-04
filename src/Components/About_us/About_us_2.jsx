// function About_us_2() {
//   return (
//     <>
//       <div className="h-[80vh] flex justify-center items-center gap-[6vw]">
//         <div className="w-[40vw]">
//           <img src="src/assets/image1-aboutus.png" alt="" />
//         </div>
//         <div className="w-[30vw]">
//           <div className="font-[600] text-[#9f9e9e] text-[14px] pb-[1vh]">
//             [ ABOUT COMPANY ]
//           </div>
//           <div className=" text-[3rem] pb-[0.7vh]">Best Interior Solutions</div>
//           <div className="font-[600] pb-[1vh]">.............</div>
//           <div className="text-[#737373] text-[20px] ">
//             The basic philosophy of our studio is to create individual,
//             aesthetically stunning solutions for our customers by lightning-fast
//             development of projects employing unique styles and architecture.
//             Even if you don’t have a ready sketch of what you want – we will
//             help you to get the result you dreamed of.
//           </div>
//           <div className="button_hover h-[6.5vh] w-[10vw]">
//             <div className="button_about flex justify-center items-center">
//               View Projects
//             </div>
//             <div className="button_lines relative"></div>
//             <div className="button_lines2 relative"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default About_us_2;

//new code

import image1 from "/src/assets/image1-aboutus.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function About_us_2() {
  const imageRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: 100,
      },
      { opacity: 1, x: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="h-[80vh] flex justify-center items-center gap-[6vw]">
      <div ref={imageRef} className="w-[40vw]">
        <img src={image1} alt="About us design" />
      </div>
      <div ref={contentRef} className="w-[30vw]">
        <div className="font-semibold text-[#9f9e9e] text-sm pb-[1vh]">
          [ ABOUT COMPANY ]
        </div>
        <div className="text-[3rem] pb-[0.7vh]">Best Interior Solutions</div>
        <div className="font-semibold pb-[1vh]">.............</div>
        <div className="text-[#737373] text-xl">
          The basic philosophy of our studio is to create individual,
          aesthetically stunning solutions for our customers by lightning-fast
          development of projects employing unique styles and architecture. Even
          if you don’t have a ready sketch of what you want – we will help you
          to get the result you dreamed of.
        </div>
        <div className="button_hover h-[6.5vh] w-[10vw]">
          <div className="button_about flex justify-center items-center">
            View Projects
          </div>
          <div className="button_lines relative"></div>
          <div className="button_lines2 relative"></div>
        </div>
      </div>
    </div>
  );
}

export default About_us_2;
