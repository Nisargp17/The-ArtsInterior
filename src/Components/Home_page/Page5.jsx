import "./Page5.css";
function Page5() {
  return (
    <>
      <div className="Project_imgs flex flex-col h-[92vh]">
        <div className="img_sec1 flex h-[46vh] w-full">
          <div className="pro_img1 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project1.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[20vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Stylish Family Appartment
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ INTERIOR ]
              </div>
            </div>
          </div>
          <div className="pro_img2 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project2.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Minimal Guests House
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ Decor ] [ INTERIOR ]
              </div>
            </div>
          </div>
          <div className="pro_img3 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project3.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Art Family Residence
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ Architecture ]
              </div>
            </div>
          </div>
        </div>
        <div className="img_sec2 flex h-[46vh] w-full">
          <div className="pro_img4 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project4.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Private House in Spain
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ Furniture ]
              </div>
            </div>
          </div>
          <div className="pro_img5 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project5.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[18vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Modern Villa in Belgium
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ Furniture ]
              </div>
            </div>
          </div>
          <div className="pro_img6 overflow-hidden">
            <img
              className="h-[50vh] z-[-50]"
              src="/src/assets/project6.jpg"
              alt=""
            />
            <div className="hidden_text bg-black z-50 relative opacity-0 h-[15vh] w-[25vw] gap-[1vw] flex flex-col justify-center p-[30px]">
              <div className="text-[#fcfcfc] font-[400] text-[1.3vw]">
                Minimalistic Style Appartment
              </div>
              <div className="text-[#8f8e8e] font-[500] text-[1vw]">
                [ Furniture ] [ Interior ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
