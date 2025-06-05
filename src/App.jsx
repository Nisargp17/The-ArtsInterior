import "./App.css";
// OLD: BrowserRouter (not ideal for GitHub Pages)
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// NEW: HashRouter (works with GitHub Pages)
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import AnimatedRouteWrapper from "./Components/AnimatedRouteWrapper";
import PageTransitionLoader from "./Components/PageTransitionLoader";

import Home_page from "./Components/Home_page";
import About_us from "./Components/About_us";
import Interior_page from "./Components/Interior";
import Studio from "./Components/Studio";
import Architecture from "./Components/Architecture";
import Exterior from "./Components/Exterior";
import Contact_us from "./Components/Contact_us";
import Blog from "./Components/Blog";
import Portfolio from "./Components/Portfolio";

import Design_planning from "./Components/Services/Design_Planning";
import Exterior_design from "./Components/Services/Exterior_design";
import Furniture_decor from "./Components/Services/Furniture_decor";
import Create_concept from "./Components/Services/Create_concept";

import DefaultLayout from "./layouts/DefaultLayout";
import NoNavLayout from "./layouts/NoNavLayout";

const NotFound = () => (
  <h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes WITH NavBar */}
        <Route
          path="/"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Home_page />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <About_us />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/studio"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Studio />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/exterior"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Exterior />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Contact_us />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Blog />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Portfolio />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/services/design-planning"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Design_planning />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/services/exterior-design"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Exterior_design />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/services/furniture-decor"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Furniture_decor />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/services/create-concept"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <Create_concept />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />

        {/* Routes WITHOUT NavBar */}
        <Route
          path="/interior"
          element={
            <AnimatedRouteWrapper>
              <NoNavLayout>
                <Interior_page />
              </NoNavLayout>
            </AnimatedRouteWrapper>
          }
        />
        <Route
          path="/architecture"
          element={
            <AnimatedRouteWrapper>
              <NoNavLayout>
                <Architecture />
              </NoNavLayout>
            </AnimatedRouteWrapper>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <AnimatedRouteWrapper>
              <DefaultLayout>
                <NotFound />
              </DefaultLayout>
            </AnimatedRouteWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
