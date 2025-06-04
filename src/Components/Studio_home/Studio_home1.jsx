function Studio_home1() {
  return (
    <>
      <section className="flex justify-center items-center h-[80vh] bg-black text-[white] gap-[5vh]">
        <div>
          <img src="/src/assets/image1-home3.png" alt="" />
        </div>
        <div className="w-[40vw] flex flex-col">
          <div className="text-[17px] font-[700] text-[#999898] py-[1vh]">
            [ MAIN PRINCIPLES ]
          </div>
          <div className="text-[5vh] py-[1vh]">A Sketch of Each Detail</div>
          <div className=" font-[600] py-[1vh]">
            .................................
          </div>
          <div className="text-[20px] text-[#999898] py-[1vh]">
            The basic philosophy of our studio is to create individual,
            aesthetically stunning solutions for our customers by lightning-fast
            development of projects employing unique styles.
          </div>
          <div className="flex w-[30vw] gap-[2vh] py-[1vh]">
            <div className="flex flex-col justify-center items-start w-1/2 py-[1vh]">
              <div>
                <img src="/src/assets/icons8-3d-100.png" alt="" />
              </div>
              <div className="text-[3vh] py-[1vh]">3D Visualization</div>
              <div className=" text-[#999898] text-[20px] py-[1vh]">
                3D sketch of each detail of your future interior.
              </div>
              <div className="py-[1vh] font-[600] ">READ MORE</div>
            </div>
            <div className="flex flex-col justify-center items-start w-1/2 py-[1vh]">
              <div>
                <img src="/src/assets/icons8-blueprint-100.png" alt="" />
              </div>
              <div className="text-[3vh] py-[1vh]">Individual Project</div>
              <div className=" text-[#999898] text-[20px] py-[1vh]">
                The basic philosophy of studio is to create individual design.
              </div>
              <div className="py-[1vh] font-[600] ">READ MORE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Studio_home1;
