import React from "react";
import post8 from "/src/assets/post8.jpg";
import post9 from "/src/assets/post9.jpg";
import post1 from "/src/assets/post1.jpg";

const blogPosts = [
  {
    image: post8,
    date: "MARCH 20 , 2020",
    title: "Top 10 Tips For Kitchen Interior Design",
    snippet: "A Faceting effects livs up....",
  },
  {
    image: post9,
    date: "MARCH 23 , 2020",
    title: "The Golden Ratio Rule for Best 2D sketch",
    snippet: "A Faceting effects livs up....",
  },
  {
    image: post1,
    date: "MARCH 10 , 2020",
    title: "Use Pastel Colors and Natural Materials",
    snippet: "A Faceting effects livs up....",
  },
];

function Interior_page7() {
  return (
    <div className="overflow-hidden h-[80vh] bg-[url(/assets/bg3-home2.png)] bg-black">
      <div className="flex justify-around pt-[70px] items-center gap-[5vw] invert">
        <div>
          <div className="text-[#a7a6a6] text-[1.2rem] font-[500]">
            [ OUR BLOGS ]
          </div>
          <div className="text-[2.2rem] font-[400]">Read Our Latest News</div>
          <div className="font-[600]">................</div>
        </div>
        <button className="view_all text-[0.7rem] font-[500] px-[41px] py-[18px] bg-black text-white">
          VIEW ALL
        </button>
      </div>

      <div className="flex justify-center items-center gap-[2vw] py-[40px]">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog_articles h-[43vh] w-[21vw] border-[1px] border-[#e0e0e0] p-[20px] bg-black text-white"
          >
            <img src={post.image} alt={post.title} />
            <div className="font-[600] text-[17px] text-[#a7a6a6] py-[10px]">
              {post.date}
            </div>
            <div className="text-[1.5vw] font-[600]">{post.title}</div>
            <div className="text-[#898989] text-[1vw] font-[400] py-[10px]">
              {post.snippet}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interior_page7;
