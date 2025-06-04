import "./Page9.css";
import { NavLink } from "react-router-dom";
function Page9() {
  return (
    <>
      <div className="overflow-hidden h-[80vh]">
        <div className="flex justify-around pt-[70px] items-center gap-[5vw]">
          <div>
            <div className="text-[#a7a6a6] text-[1.2rem] font-[500]">
              [ OUR BLOGS ]
            </div>
            <div className="text-[2.2rem] font-[400]">Read Our Latest News</div>
            <div className="font-[600]">................</div>
          </div>
          <button className=" view_all text-[0.7rem] font-[500] px-[41px] py-[18px] bg-black text-[white]">
            <NavLink to="/blog">VIEW ALL</NavLink>
          </button>
        </div>
        <div className="flex justify-center items-center gap-[2vw] py-[40px]">
          <div className="blog_articles h-[43vh] w-[21vw] border-[1px] border-[#e0e0e0] p-[20px] ">
            <div>
              <img src="/src/assets/post8.jpg" alt="" />
            </div>
            <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
              MARCH 20 , 2020
            </div>
            <div className="text-[1.5vw] font-[600]">
              Top 10 Tips For Kitchen Interior Design
            </div>
            <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
              A Faceting effects livs up....
            </div>
          </div>
          <div className="blog_articles h-[43vh] w-[21vw] border-[1px] bg-white border-[#e0e0e0] p-[20px] ">
            <div>
              <img src="/src/assets/post9.jpg" alt="" />
            </div>
            <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
              MARCH 23 , 2020
            </div>
            <div className="text-[1.5vw] font-[600]">
              The Golden Ratio Rule for Best 2D sketch
            </div>
            <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
              A Faceting effects livs up....
            </div>
          </div>
          <div className="blog_articles h-[43vh] w-[21vw] border-[1px] border-[#e0e0e0] p-[20px] ">
            <div>
              <img src="/src/assets/post1.jpg" alt="" />
            </div>
            <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
              MARCH 10 , 2020
            </div>
            <div className="text-[1.5vw] font-[600]">
              Use Pastel Colors and Natural Materials
            </div>
            <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
              A Faceting effects livs up....
            </div>
          </div>
        </div>
        <div className="page8_vertical_line relative -z-50 top-[-70vh] left-[5.5vw]"></div>
        <div className="page8_vertical_line relative -z-50 top-[-170vh] left-[93.65vw]"></div>
        <div className="page8_vertical_line relative -z-50 top-[-270vh] left-[49.6vw]"></div>
      </div>
    </>
  );
}
export default Page9;
