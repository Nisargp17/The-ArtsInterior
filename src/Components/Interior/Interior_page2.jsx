import "./Interior_page2.css";
function Interior_page2() {
  return (
    <>
      <div className="flex gap-[4vw] justify-center items-center bg-black h-[70vh]">
        <div className=" h-[57vh] w-[20vw] relative top-[-12vh]">
          <div className="features_hover">
            <img
              className="brightness-[50%]"
              src="/src/assets/features.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full absolute"
              src="/src/assets/bg-features.jpg"
              alt=""
            />
            <div className="text-[white] relative text-center text-[1.3vw] top-[1.5vw]">
              01. Quality Furniture
            </div>
          </div>
        </div>
        <div className=" h-[57vh] w-[20vw] relative top-[-12vh]">
          <div className="features_hover">
            <img
              className="brightness-[50%]"
              src="/src/assets/featured2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full absolute"
              src="/src/assets/bg-features.jpg"
              alt=""
            />
            <div className="text-[white] relative text-center text-[1.3vw] top-[1.5vw]">
              02. Unique Concept
            </div>
          </div>
        </div>
        <div className=" h-[57vh] w-[20vw] relative top-[-12vh]">
          <div className="features_hover">
            <img
              className="brightness-[50%]"
              src="/src/assets/featured3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full absolute"
              src="/src/assets/bg-features.jpg"
              alt=""
            />
            <div className="text-[white] relative text-center text-[1.3vw] top-[1.5vw]">
              03. Attention to Details
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Interior_page2;
