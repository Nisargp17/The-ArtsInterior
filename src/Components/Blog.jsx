import post8 from "/src/assets/post8.jpg";
import post9 from "/src/assets/post9.jpg";
import post1 from "/src/assets/post1.jpg";
import exteriorDesign148 from "/src/assets/EXTERIOR-DESIGN-148.jpg";
import headerImage from "/src/assets/pheader-service-detail1.jpg";

function Blog() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[50vh]"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-[4.5rem] text-[white] font-[300]">BLOG</div>
      </div>
      <sectiont className="flex flex-col justify-center items-center gap-[2vw] py-[40px]">
        <div className="blog_articles h-[75vh] w-[42vw] border-[1px] border-[#e0e0e0] p-[20px] ">
          <div>
            <img src={post8} alt="" />
          </div>
          <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
            MARCH 20 , 2020
          </div>
          <div className="text-[1.5vw] font-[600]">
            Top 10 Tips For Kitchen Interior Design
          </div>
          <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
            A faceting effect livens up and interrupts the cubism that sets the
            morphology of the West system apart from the cliches of modern
            design. Characterised by its suitability for use in a wide range of
            different…
          </div>
        </div>
        <div className="blog_articles h-[75vh] w-[42vw] border-[1px] bg-white border-[#e0e0e0] p-[20px] ">
          <div>
            <img src={post9} alt="" />
          </div>
          <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
            MARCH 23 , 2020
          </div>
          <div className="text-[1.5vw] font-[600]">
            The Golden Ratio Rule for Best 2D sketch
          </div>
          <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
            A faceting effect livens up and interrupts the cubism that sets the
            morphology of the West system apart from the cliches of modern
            design. Characterised by its suitability for use in a wide range of
            different…
          </div>
        </div>
        <div className="blog_articles h-[75vh] w-[42vw] border-[1px] border-[#e0e0e0] p-[20px] ">
          <div>
            <img src={post1} alt="" />
          </div>
          <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
            MARCH 10 , 2020
          </div>
          <div className="text-[1.5vw] font-[600]">
            Use Pastel Colors and Natural Materials
          </div>
          <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
            A faceting effect livens up and interrupts the cubism that sets the
            morphology of the West system apart from the cliches of modern
            design. Characterised by its suitability for use in a wide range of
            different…
          </div>
        </div>
        <div className="blog_articles h-[70vh] w-[42vw] border-[1px] border-[#e0e0e0] p-[20px] ">
          <div>
            <img src={exteriorDesign148} alt="" />
          </div>
          <div className=" font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
            MARCH 12 , 2020
          </div>
          <div className="text-[1.5vw] font-[600]">
            Incredible Urban Architecture & Landscapes
          </div>
          <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
            A faceting effect livens up and interrupts the cubism that sets the
            morphology of the West system apart from the cliches of modern
            design. Characterised by its suitability for use in a wide range of
            different…
          </div>
        </div>
      </sectiont>
    </>
  );
}

export default Blog;
