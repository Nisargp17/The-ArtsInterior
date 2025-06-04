import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const DefaultLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
