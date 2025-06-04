import "../NavBar.css";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
function Interior_navbar() {
  const navbarRef = useRef(null);
  const [showPages, setShowPages] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const el = navbarRef.current;
    gsap.set(el, {
      borderBottom: "black",
    });

    ScrollTrigger.create({
      trigger: navbarRef.current,
      start: "bottom -8vh",
      onEnter: () => {
        gsap.from(el, {
          y: -250,
        });
        gsap.to(el, {
          y: -150,
          position: "fixed",
          borderBottom: "black",
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.from(el, {
          y: "15vh",
        });
        gsap.to(el, {
          y: "0vh",
          position: "absolute",
          duration: 1,
        });
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className="absolute NavBar_header z-50 flex justify-around items-center bg-black"
      >
        {/* Logo */}
        <div className="logo">
          <div className="w-[3rem]">THE ART INTERIORS</div>
        </div>

        {/* Navigation Items */}
        <div className="nav_titles flex gap-15">
          <h1 className="header_item h-[9vh] flex items-center justify-center">
            <NavLink to="/" exact="true">
              Home
            </NavLink>
          </h1>

          {/* Pages Dropdown */}
          <div
            className="hidden_header_list2 h-[9vh] flex items-center justify-center relative"
            onMouseEnter={() => setShowPages(true)}
            onMouseLeave={() => setShowPages(false)}
          >
            <h1 className="header_item2">Pages</h1>
            {showPages && (
              <div className="item2_list h-[25vh] w-[20vw] flex flex-col gap-4 justify-center items-center absolute top-[9vh] bg-black text-white z-50 transition-all duration-300">
                <ul>
                  <NavLink to="/Interior">Interior</NavLink>
                </ul>
                <ul>
                  <NavLink to="/Exterior">Exterior</NavLink>
                </ul>
                <ul>
                  <NavLink to="/Studio">Studio Room</NavLink>
                </ul>
                <ul>
                  <NavLink to="/Architecture">Architecture</NavLink>
                </ul>
                <ul>
                  <NavLink to="/about">About Us</NavLink>
                </ul>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="hidden_header_list3 h-[9vh] flex items-center justify-center relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <h1 className="header_item3">Services</h1>
            {showServices && (
              <div className="item3_list h-[25vh] w-[20vw] flex flex-col gap-4 justify-center items-center absolute top-[9vh] bg-black text-white z-50 transition-all duration-300">
                <ul>
                  <NavLink to="/services/design-planning">
                    Design & Planning
                  </NavLink>
                </ul>
                <ul>
                  <NavLink to="/services/exterior-design">
                    Exterior Design
                  </NavLink>
                </ul>
                <ul>
                  <NavLink to="/services/furniture-decor">
                    Furniture & Decor
                  </NavLink>
                </ul>
                <ul>
                  <NavLink to="/services/create-concept">
                    Creating Concept
                  </NavLink>
                </ul>
              </div>
            )}
          </div>

          <h1 className="header_item h-[9vh] flex items-center justify-center">
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </h1>
          <h1 className="header_item h-[9vh] flex items-center justify-center">
            <NavLink to="/Blog">Blog</NavLink>
          </h1>
          <h1 className="header_item h-[9vh] flex items-center justify-center">
            <NavLink to="/Contact">Contact</NavLink>
          </h1>
        </div>

        {/* Search */}
        <div className="search">
          <img className="h-5" src="src/assets/search.svg" alt="Search" />
        </div>

        {/* Decoration Lines */}
        <div className="nav_vertical_line absolute z-50 right-[5.5vw]"></div>
        <div className="nav_vertical_line absolute z-50 left-[5.5vw]"></div>
      </header>
    </>
  );
}
export default Interior_navbar;
