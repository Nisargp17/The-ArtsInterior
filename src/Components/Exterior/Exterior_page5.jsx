import "./Exterior.css";
function Exterior_page5() {
  return (
    <>
      <section className="h-[60vh] flex justify-center items-center">
        <div className="bg-[url(/src/assets/Exterior_bg.jpg)] h-[60vh] w-[50vw] bg-black">
          <div>
            <div className="text-[3vw] font-[700] relative left-[15vw] top-[13vh]">
              Architecture
            </div>
            <div className="text-[3vw] font-[300] relative left-[33vw] top-[4.5vh]">
              and
            </div>
            <div className="text-[3vw] font-[700] relative left-[34vw] top-[1.5vh]">
              design
            </div>
            <div className="text-[3vw] font-[300] relative left-[20vw] top-[-7vh]">
              Interaction
            </div>
          </div>
        </div>
        <div className="relative py-[2vh] h-[50vh] w-[10vw] bg-black flex flex-col justify-center items-center text-[#a0a0a0] font-[600] text-[20px] left-[4.5vw]">
          <div className="h-1/4 flex justify-center items-center flex-col gap-[10px]">
            <div>
              <img src="/src/assets/if-resize-2193379.png" alt="" />
            </div>
            <div>1826 sqft</div>
          </div>
          <div className="h-1/4 flex justify-center items-center flex-col gap-[10px]">
            <div>
              <img src="/src/assets/bed.png" alt="" />
            </div>
            <div>3 room</div>
          </div>
          <div className="h-1/4 flex justify-center items-center flex-col gap-[10px]">
            <div>
              <img
                src="/src/assets/if-thin-0957-bathtub-shower-388459.png"
                alt=""
              />
            </div>
            <div>2 baths</div>
          </div>
          <div className="h-1/4 flex justify-center items-center flex-col gap-[10px]">
            <div>
              <img src="/src/assets/if-vehicle-2167844.png" alt="" />
            </div>
            <div>2 garages</div>
          </div>
        </div>
        <div className="h-[60vh] w-[40vw] exterior_scroll_background1"></div>
      </section>
    </>
  );
}
export default Exterior_page5;
