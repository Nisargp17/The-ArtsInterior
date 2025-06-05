import "./Interior_page4.css";
function Interior_page4() {
  return (
    <>
      <div className="bg-[url(/src/assets/bg1-home2.jpg)] h-[130vh] flex flex-col justify-center items-center gap-[1vh]">
        <div className="text-[#a3a2a2] text-[20px] font-[500]">
          [ Our Portfolio ]
        </div>
        <div className="text-[white] text-[3vw]">Introduce Our Projects</div>
        <div className="text-[white] font-[600] text-[20px]">
          ...............
        </div>
        <div className="flex flex-col gap-[2vh]">
          <div className="h-[40vh] flex gap-[2vh]">
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project1.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Stylish Family Appartment
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Interior ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project2.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Minimal Guests House
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Interior ] [ Decor ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project3.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Art Family Residence
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Architecture ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project4.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Private House in Spain
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Furniture ]
              </div>
            </div>
          </div>
          <div className="h-[40vh] flex gap-[2vh]">
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project5.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Modern Villa in Belgium
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Furniture ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project6.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Minimalistic Style Appartment
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Interior ] [ Furniture ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project7.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Luxury Bathroom Interior
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Decor ] [ Furniture ]
              </div>
            </div>
            <div className="projext_hover h-full w-[20vw] flex flex-col gap-[2vh] justify-center items-center bg-[url(/src/assets/project8.jpg)] bg-[cover] bg-[center]">
              <div className="text-[white] show_text_projects text-[1.5vw] opacity-0">
                Loft Kitchen Interior
              </div>
              <div className="text-[#a3a2a2] show_text_projects text-[20px] font-[500] opacity-0">
                [ Architecture ]
              </div>
            </div>
          </div>
        </div>
        <div className="button_hover h-[6.5vh] w-[10vw] invert">
          <div className="button_about flex justify-center items-center">
            All Projects
          </div>
          <div className="button_lines relative"></div>
          <div className="button_lines2 relative"></div>
        </div>
      </div>
    </>
  );
}
export default Interior_page4;
