function Design_planning() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[50vh] bg-[url(/src/assets/pheader-service-detail1.jpg)]">
        <div className="text-[4.5rem] text-[white] font-[300]">
          Design & Planning
        </div>
      </div>
      <section className="flex justify-center gap-[30px] py-[10vh]">
        <div>
          <ol>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[800] text-[20px] bg-[#1a1a1a] text-[white] my-[2vh]">
              Design And Planning
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-[white] hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700 ">
              Exterior Design
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-[white] hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700 ">
              Furniture and Decor
            </li>
            <li className="h-[5vh] w-[15vw] pl-[25px] flex justify-start items-center font-[700] text-[2vh] bg-[#f4f4f4] text-[#343434] my-[2vh] hover:text-[white] hover:cursor-pointer hover:bg-[#1a1a1a] transition-all duration-700 ">
              Creating Concept
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center items-start w-[53vw]">
          <div className="text-[#a3a2a2] text-[15px] font-[600] py-[1vh]">
            [ WHAT WE OFFER ]
          </div>
          <div className="text-[5vh] w-[45vw] font-[400] py-[1vh]">
            Our Goal is to Create Incredible Custom Interior Design
          </div>
          <div className="text-[20px] text-[#acacac] py-[1vh]">
            The interior design of your dream begins with a concept that is
            reflected in the blueprints, project plans, in 3D visualizations. It
            is possible to make any place more interesting, attractive and
            functional, for this it is worth to trust the real professionals and
            then the money will not be spent in a vain.
          </div>
          <div className="flex justify-center items-center gap-[3vh] py-[4vh]">
            <div className="h-[45vh] w-[25vw] ">
              <img src="/src/assets/service-silder1.jpg" alt="" />
            </div>
            <div className="h-[45vh] w-[25vw] ">
              <img src="/src/assets/service-silder2.jpg" alt="" />
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
                className="h-[35vh]"
                src="/src/assets/interior_design.jpg"
                alt=""
              />
              <img
                className="h-[35vh]"
                src="/src/assets/11smallhomeinteriordesignideas3123644.jpgv=1711455681"
                alt=""
              />
            </div>
            <div className="flex gap-[2vh]">
              <img
                className="h-[47.5vh]"
                src="/src/assets/interior-design2.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-[2vh]">
              <img
                className="h-[38.2vh]"
                src="/src/assets/Luxury-Interior-Design-Living-Room-1080x675.webp"
                alt=""
              />
              <img
                className="h-[38.2vh]"
                src="/src/assets/11-small-home-interior-design-ideas-11.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Design_planning;
