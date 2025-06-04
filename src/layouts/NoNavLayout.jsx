import React from "react";
import Footer from "../Components/Footer";

const NoNavLayout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default NoNavLayout;
