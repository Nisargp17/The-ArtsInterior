function Exterior_page1() {
  return (
    <>
      <section className="h-[100vh] bg-[url(/src/assets/Exterior_home1.jpg)] bg-[center] bg-[cover] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute z-[0] h-[100vh] w-[99.2vw] bg-[#000000ab]"></div>
        <div className="z-10 text-[8vh] font-[600] text-[white]">
          Awesome Design for the Exterior
        </div>
        <div className="z-10 text-white text-[2vh] w-[70vh]">
          Witness breathtaking exterior transformations that redefine curb
          appeal and elevate outdoor living to an art form. Discover the perfect
          blend of style and functionality for your dream home.
        </div>
        <div className="button_hover z-10 h-[6.5vh] w-[10vw] invert">
          <div className="button_about flex justify-center items-center">
            Get In Touch
          </div>
          <div className="button_lines relative"></div>
          <div className="button_lines2 relative"></div>
        </div>
      </section>
    </>
  );
}
export default Exterior_page1;
