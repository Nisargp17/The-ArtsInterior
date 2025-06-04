function Interior_page3() {
  return (
    <>
      <div className="h-[70vh] bg-black flex justify-center items-center gap-[3vw]">
        <div className="w-[25vw] h-full text-white">
          <div className="pb-[1vh] text-[#a3a2a2]">[ our benefits ]</div>
          <div className="text-[2.5vw] w-[23vw]">
            Ambitious Studio with a Successful Concept & Ideas
          </div>
          <div className="button_hover h-[6.5vh] w-[10vw] invert">
            <div className="button_about flex justify-center items-center">
              View Projects
            </div>
            <div className="button_lines relative"></div>
            <div className="button_lines2 relative"></div>
          </div>
        </div>
        <div className="w-[50vw] h-full flex gap-5 text-[white] ">
          <div className="w-1/2  flex flex-col gap-1">
            <div className=" h-1/2  ">
              <div>
                <img
                  className="h-[4vw]"
                  src="/src/assets/sphere-svgrepo-com.png"
                  alt=""
                />
              </div>
              <div className="text-[1.5vw] py-[2vh]">Customer Focus</div>
              <div className="text-[20px] text-[#818181] w-[22vw]">
                Customers choose us for the simplicity of communication and an
                understanding of what it’s necessary to receive in the end.
              </div>
            </div>
            <div className=" h-1/2 ">
              <div>
                <img
                  className="h-[4vw]"
                  src="/src/assets/icons8-home-100.png"
                  alt=""
                />
              </div>
              <div className="text-[1.5vw] py-[2vh]">Professionalism</div>
              <div className="text-[20px] text-[#818181] w-[22vw]">
                We develop a full cycle of project documentation: an outline
                sketch, a design project, working documentation.
              </div>
            </div>
          </div>
          <div className="w-1/2  flex flex-col gap-1">
            <div className="h-1/2  ">
              <div>
                <img
                  className="h-[4vw]"
                  src="/src/assets/icons8-triangle-100.png"
                  alt=""
                />
              </div>
              <div className="text-[1.5vw] py-[2vh]">Multi Experience</div>
              <div className="text-[20px] text-[#818181] w-[22vw]">
                We provide a wide range of services, we work in different
                styles, we project commercial and residential properties.
              </div>
            </div>
            <div className="h-1/2  ">
              <div>
                <img
                  className="h-[4vw]"
                  src="/src/assets/icons8-surface-100.png"
                  alt=""
                />
              </div>
              <div className="text-[1.5vw] py-[2vh]">Author`s Supervision</div>
              <div className="text-[20px] text-[#818181] w-[22vw]">
                We develop an attractive and convenient space for work and
                leisure time, working on units, selecting materials,
                manufacturers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Interior_page3;
