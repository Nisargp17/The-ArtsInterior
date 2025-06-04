import "./Page4.css";
function Page4() {
  return (
    <>
      <section className=" page_4 relative flex flex-col items-center overflow-hidden pt-[60px] h-[91.1vh] ">
        <div className="font-[600] text-[14px] text-[#918c89] pb-[20px]">
          [ OUR SERVICES ]
        </div>
        <div className="font-[400] text-[2rem] pb-[15px]">
          What Can We Offer
        </div>
        <div className="font-[600] pb-[30px]">..............</div>
        <div className="what_we_offer flex gap-6">
          <div className=" we_offers h-[40vh] w-[25vw]  flex flex-col items-center">
            <img
              className="h-[40vh] w-[25vw] -z-50"
              src="/src/assets/bg-iconbox1.jpg"
              alt=""
            />
            <div className="relative top-[-35vh]">
              <img src="/src/assets/iconbox1.2.png" alt="" />
            </div>
            <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
              Design & Planning
            </div>
            <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
              We will help you to get the result you dreamed of.
            </div>
            <div className="relative top-[-35vh] py-[1vw] font-[500]">
              Read More
            </div>
          </div>
          <div className=" we_offers h-[40vh] w-[25vw]  flex flex-col items-center">
            <img
              className="h-[40vh] w-[25vw] -z-40"
              src="/src/assets/bg-iconbox2.jpg"
              alt=""
            />
            <div className="relative top-[-35vh]">
              <img src="/src/assets/iconbox2.png" alt="" />
            </div>
            <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
              Custom Solutions
            </div>
            <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
              Individual, aesthetically stunning solutions for customers.
            </div>
            <div className="relative top-[-35vh] py-[1vw] font-[500]">
              READ MORE
            </div>
          </div>
          <div className=" we_offers h-[40vh] w-[25vw] flex flex-col items-center">
            <img
              className="h-[40vh] w-[25vw] -z-50"
              src="/src/assets/bg-iconbox3.jpg"
              alt=""
            />
            <div className="relative top-[-35vh]">
              <img src="/src/assets/iconbox3.png" alt="" />
            </div>
            <div className="relative top-[-35vh] text-[2rem] py-[1vw]">
              Furniture & Decor
            </div>
            <div className="relative top-[-35vh] w-[30vh] text-center text-[1.2rem] text-[#918c89] font-[400]">
              We create and produce our product design lines.
            </div>
            <div className="relative top-[-35vh] py-[1vw] font-[500]">
              READ MORE
            </div>
          </div>
        </div>
        <div className="flex gap-[10vw] py-[10vh]">
          <div className="flex flex-col items-center">
            <div className="font-[300] text-[3rem] text-[#9f9e9e]">
              [ 180 +]
            </div>
            <div className="font-[400] text-[1.3rem]">CURRENT CLIENTS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-[300] text-[3rem] text-[#9f9e9e]">[ 10 +]</div>
            <div className="font-[400] text-[1.3rem]">YEARS OF EXPERIENCE</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-[300] text-[3rem] text-[#9f9e9e]">[ 35 +]</div>
            <div className="font-[400] text-[1.3rem]">AWARDS WINNING</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-[300] text-[3rem] text-[#9f9e9e]">[ 5 +]</div>
            <div className="font-[400] text-[1.3rem]">OFFICES WORLDWIDE</div>
          </div>
        </div>
        <div className="virticalLines relative top-[-100vh] -z-50"></div>
        <div className="virticalLines relative top-[-10000000vh] -z-50 left-[44.1vw]"></div>
        <div className="virticalLines relative -z-50 top-[-1000000000vw] right-[44.1vw]"></div>
      </section>
    </>
  );
}

export default Page4;
