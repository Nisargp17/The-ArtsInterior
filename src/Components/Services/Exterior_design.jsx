import pheaderServiceDetail2 from "/src/assets/pheader-service-detail2.jpg";
import serviceSlider3 from "/src/assets/service-silder3.jpg";
import serviceSlider4 from "/src/assets/service-silder4.jpg";
import image1Service2 from "/src/assets/image1-service2.jpg";
import exteriorDesign3 from "/src/assets/exterior-design3.jpg";
import exteriorDesign148 from "/src/assets/EXTERIOR-DESIGN-148.jpg";
import coolHomeExterior from "/src/assets/Exterior_home1.jpg";
import exteriorDesign from "/src/assets/exterior-design.jpg";

function Exterior_design() {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-[50vh]"
        style={{
          backgroundImage: `url(${pheaderServiceDetail2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-[4.5rem] text-white font-[300]">
          Exterior Design
        </div>
      </div>
      <section className="flex justify-center gap-[30px] py-[10vh]">
        <div>
          <ol>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-white hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700">
              Design And Planning
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[800] text-[20px] bg-[#1a1a1a] text-white my-[2vh]">
              Exterior Design
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-white hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700">
              Furniture and Decor
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-white hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700">
              Creating Concept
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center items-start w-[53vw]">
          <div className="text-[#a3a2a2] text-[15px] font-[600] py-[1vh]">
            [ WHAT WE OFFER ]
          </div>
          <div className="text-[5vh] w-[45vw] font-[400] py-[1vh]">
            All Kinds of Buildings in Chematic or Working Design
          </div>
          <div className="text-[20px] text-[#acacac] py-[1vh]">
            The interior design of your dream begins with a concept that is
            reflected in the blueprints, project plans, in 3D visualizations. It
            is possible to make any place more interesting, attractive and
            functional, for this it is worth to trust the real professionals and
            then the money will not be spent in a vain.
          </div>
          <div className="flex justify-center items-center gap-[3vh] py-[4vh]">
            <div className="h-[45vh] w-[25vw]">
              <img
                src={serviceSlider3}
                alt="Service Slider 3"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[45vh] w-[25vw]">
              <img
                src={serviceSlider4}
                alt="Service Slider 4"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="text-[20px] text-[#acacac] py-[1vh]">
            In design, we bring characteristics of the natural world into built
            spaces, such as water, greenery, and natural light, or elements like
            wood and stone. Encouraging the use of natural systems and processes
            in design allows for exposure to nature, and in turn, these design
            approaches improve health and wellbeing. There are a number of
            possible benefits, including reduced heart rate variability and
            pulse rates, decreased blood pressure, and increased activity in our
            nervous systems, to name a few.
          </div>
          <div className="text-[20px] text-[#acacac] py-[1vh]">
            Over time, our connections to the natural world diverged in parallel
            with technological developments. Advances in the 19th and 20th
            centuries fundamentally changed how people interact with nature.
            Sheltered from the elements, we spent more and more time indoors.
            Today, the majority of people spend almost 80-90% of their time
            indoors, moving between their homes and workplaces. As interior
            designers embrace biophilia.
          </div>
          <div className="flex flex-col justify-center items-center gap-[3vh] py-[4vh]">
            <div className="flex gap-[2vh]">
              <img
                className="h-[38.5vh] object-cover"
                src={image1Service2}
                alt="Interior design example 1"
              />
              <img
                className="h-[38.5vh] object-cover"
                src={exteriorDesign3}
                alt="Exterior design example 2"
              />
            </div>
            <div className="flex gap-[2vh]">
              <img
                className="h-[50vh] object-cover"
                src={exteriorDesign148}
                alt="Exterior design example 3"
              />
            </div>
            <div className="flex gap-[2vh]">
              <img
                className="h-[38.2vh] object-cover"
                src={coolHomeExterior}
                alt="Cool home exterior design"
              />
              <img
                className="h-[38.2vh] object-cover"
                src={exteriorDesign}
                alt="Exterior design example 4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Exterior_design;
