import "./Architecture.css";
function Architecture_page3() {
  return (
    <>
      <section className="h-[70vh] bg-black flex gap-[20px] justify-center items-center">
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src="/src/assets/gallery1.jpg" alt="" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white relative top-[5vh]">
          <img src="/src/assets/gallery2.jpg" alt="" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src="/src/assets/gallery3.jpg" alt="" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white relative top-[5vh]">
          <img src="/src/assets/gallery4.jpg" alt="" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
        <div className="architecture_img_hover h-[50vh] w-[19vw] bg-white">
          <img src="/src/assets/gallery5.jpg" alt="" />
          <div className="h-[6vh] architecture_img_plus text-[white] opacity-0 text-[2vw] text-center w-[3.2vw] bg-black relative top-[-27vh] left-[8vw] rounded-[100%]">
            <div className="relative bottom-[0.4vh]">+</div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Architecture_page3;
