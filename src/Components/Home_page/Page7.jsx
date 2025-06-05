import "./Page7.css";
function Page7() {
  return (
    <>
      <section className="flex h-[80vh] justify-center items-center">
        <div className="w-[35vw]">
          <div className="text-[#a7a6a6] font-[600] py-[0.5vw] ">
            [ OUR SKILLS ]
          </div>
          <div className="text-[2.5rem] pb-[0.5vw] ">
            The Core Company Values
          </div>
          <div className="font-[500] pb-[1vw]">.........................</div>
          <div className="w-[30vw] text-[#868686] text-[1.2rem] pb-[1vw]">
            We are constantly growing, learning, and improving and our partners
            are steadily increasing. 200 projects is a sizable number.
          </div>
          <div className="flex w-[20vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-[700] text-[1rem]">INTERIOR SKETCH</div>
            <div className="font-[700] text-[1rem]">65%</div>
          </div>
          <div className="flex w-[25vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-[700] text-[1rem]">3D MODELING</div>
            <div className="font-[700] text-[1rem]">85%</div>
          </div>
          <div className="flex w-[15vw] border-b-[2.5px] justify-between pb-[0.5vw] my-[1vw]">
            <div className="font-[700] text-[1rem]">2D PLANNING</div>
            <div className="font-[700] text-[1rem]">55%</div>
          </div>
        </div>
        <div className="w-[44vw]">
          <img
            className="relative left-[7vw]"
            src="src/assets/image3-home1.png"
            alt=""
          />
        </div>
        <div className="Page7_vertical_line relative -z-50 left-[4.65vw] "></div>
        <div className="Page7_vertical_line relative -z-50 left-[-83.6vw]"></div>
        <div className="Page7_vertical_line relative -z-50 left-[-39.55vw]"></div>
      </section>
    </>
  );
}
export default Page7;
