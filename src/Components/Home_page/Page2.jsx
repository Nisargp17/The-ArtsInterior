import "./Page2.css";
import { NavLink } from "react-router-dom";
function Page2() {
  return (
    <>
      <div className="relative About_company flex justify-center gap-[9vw] h-[60vh] items-center overflow-hidden">
        <div className="image_page2 w-[35vw]">
          <img src="src/assets/image2-home1.png" alt="" />
        </div>
        <div className="Virtical_line1 -z-50 left-[49.6vw] absolute"></div>
        <div className="About_text w-[34vw]">
          <div className="pb-[3vh] text-[#a3a2a2]">[ ABOUT COMPANY ]</div>
          <div className="font-medium text-5xl">From Sketch to Life</div>
          <div className="py-[3vh]">............</div>
          <div className="w-[27vw] text-[#7c7c7c] text-[0.9vw]">
            The basic philosophy of our studio is to create individual,
            aesthetically stunning solutions for our customers by lightning-fast
            development of projects employing unique styles and architecture.
            Even if you don’t have a ready sketch of what you want – we will
            help you to get the result you dreamed of.
          </div>
          <div className="button_hover h-[6.5vh] w-[10vw]">
            <div className="button_about flex justify-center items-center">
              <NavLink to="/portfolio">View Projects</NavLink>
            </div>
            <div className="button_lines relative"></div>
            <div className="button_lines2 relative"></div>
          </div>
        </div>
        <div className="Virtical_line1 -z-50 absolute left-[5.5vw]"></div>
        <div className="Virtical_line1 -z-50 absolute right-[5.5vw]"></div>
      </div>
    </>
  );
}

export default Page2;
