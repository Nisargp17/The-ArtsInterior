import "./Page2.css";
import { NavLink } from "react-router-dom";
import image2 from "/src/assets/image2-home1.png";

function Page2() {
  return (
    <div className="relative About_company flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[9vw] overflow-hidden px-4 py-12">
      {/* Image */}
      <div className="image_page2 w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] mb-8 lg:mb-0">
        <img src={image2} alt="Interior sketch" className="w-full h-auto" />
      </div>

      {/* Vertical Line (center, only on large screens) */}
      <div className="Virtical_line1 hidden lg:block absolute -z-50 left-[49.6vw]"></div>

      {/* Text Section */}
      <div className="About_text w-[90vw] sm:w-[80vw] md:w-[65vw] lg:w-[34vw] text-center lg:text-left">
        <div className="pb-4 text-[#a3a2a2] text-sm md:text-base">
          [ ABOUT COMPANY ]
        </div>
        <div className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          From Sketch to Life
        </div>
        <div className="py-4 text-xl">............</div>
        <div className="text-[#7c7c7c] text-base sm:text-lg leading-relaxed max-w-[100%] lg:w-[27vw] mx-auto lg:mx-0">
          The basic philosophy of our studio is to create individual,
          aesthetically stunning solutions for our customers by lightning-fast
          development of projects employing unique styles and architecture. Even
          if you don’t have a ready sketch of what you want – we will help you
          to get the result you dreamed of.
        </div>

        <div className="button_hover h-[6.5vh] w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[10vw] mt-6 mx-auto lg:mx-0">
          <div className="button_about flex justify-center items-center text-sm md:text-base">
            <NavLink to="/portfolio">View Projects</NavLink>
          </div>
          <div className="button_lines relative"></div>
          <div className="button_lines2 relative"></div>
        </div>
      </div>

      {/* Side Vertical Lines (large only) */}
      <div className="Virtical_line1 -z-50 absolute left-[5.5vw] hidden lg:block"></div>
      <div className="Virtical_line1 -z-50 absolute right-[5.5vw] hidden lg:block"></div>
    </div>
  );
}

export default Page2;
