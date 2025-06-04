import "./Page6.css";
import { NavLink } from "react-router-dom";

function Page6() {
  return (
    <>
      <div className="Get_in_touch flex h-[30vh] justify-center gap-[10vw] items-center">
        <div className="w-[45vw]">
          <div className="text-[white] text-[4vh]">
            Get Incredible Interior Design Right Now!
          </div>
          <div className="text-[#a2a2a2] text-[1.8vh]">
            At every stage, we could supervise your project – controlling all
            the details and consulting the builders.
          </div>
        </div>
        <div className="w-[10vw]">
          <button className="Get_in_touch_button bg-white text-[0.7vw] font-[600] py-[18px] px-[41px]">
            <NavLink to="/contact">GET IN TOUCH</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
export default Page6;
