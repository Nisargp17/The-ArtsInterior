function Studio_home() {
  return (
    <>
      <section className="h-[100vh] bg-[url(/src/assets/bg-slider-home3-dark.png)] bg-[black] flex justify-center items-center gap-[5vh]">
        <div className="flex flex-col text-left justify-center items-start w-[30vw]">
          <div className="text-[white] text-[4rem] w-[27vw] font-[400] py-[1vh]">
            Simple. Authentic. Close to Nature
          </div>
          <div className="text-[22px] text-[#999999] py-[1vh]">
            Our goal is to create reliable with customers, that is why, from the
            first day of the activity of the studio
          </div>
          <div className="button_hover h-[6.5vh] w-[10vw] invert py-[1vh]">
            <div className="button_about flex justify-center items-center">
              View Projects
            </div>
            <div className="button_lines relative"></div>
            <div className="button_lines2 relative"></div>
          </div>
        </div>
        <div>
          <img
            className="w-[43.5vw]"
            src="/src/assets/slider1-home3.jpg"
            alt=""
          />
        </div>
        <div className="verticle_line_home relative h-[100vh] w-[1px] bg-[#918c89] left-[6.05vw]"></div>
        <div className="verticle_line_home relative h-[100vh] w-[1px] bg-[#918c89] right-[84.8vw]"></div>
      </section>
    </>
  );
}
export default Studio_home;
