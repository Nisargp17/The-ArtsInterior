// // // // // // src/Components/AnimatedRouteWrapper.js
// // // // // import React, { useState, useEffect } from "react";
// // // // // import PageTransitionLoader from "./PageTransitionLoader";
// // // // // import { useLocation } from "react-router-dom";

// // // // // const AnimatedRouteWrapper = ({ children }) => {
// // // // //   const location = useLocation();
// // // // //   const [showLoader, setShowLoader] = useState(false);
// // // // //   const [ready, setReady] = useState(true);

// // // // //   useEffect(() => {
// // // // //     setShowLoader(true);
// // // // //     setReady(false);
// // // // //   }, [location]);

// // // // //   const handleLoaderComplete = () => {
// // // // //     setShowLoader(false);
// // // // //     setReady(true);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {showLoader && <PageTransitionLoader onComplete={handleLoaderComplete} />}
// // // // //       {ready && children}
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default AnimatedRouteWrapper;

// // // // // src/Components/AnimatedRouteWrapper.js
// // // // import React, { useEffect, useState } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import ShapeLoader from "./ShapeLoader";

// // // // const AnimatedRouteWrapper = ({ children }) => {
// // // //   const location = useLocation();
// // // //   const [showLoader, setShowLoader] = useState(false);
// // // //   const [ready, setReady] = useState(true);

// // // //   useEffect(() => {
// // // //     setShowLoader(true);
// // // //     setReady(false);
// // // //   }, [location]);

// // // //   const handleComplete = () => {
// // // //     setShowLoader(false);
// // // //     setReady(true);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {showLoader && <ShapeLoader onComplete={handleComplete} />}
// // // //       {ready && children}
// // // //     </>
// // // //   );
// // // // };

// // // // export default AnimatedRouteWrapper;

// // // // src/Components/AnimatedRouteWrapper.js
// // // import React, { useEffect, useState, useRef } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import FancyPageTransition from "./FancyPageTransition";
// // // import { gsap } from "gsap";

// // // const AnimatedRouteWrapper = ({ children }) => {
// // //   const location = useLocation();
// // //   const [showTransition, setShowTransition] = useState(false);
// // //   const [ready, setReady] = useState(true);
// // //   const contentRef = useRef();

// // //   useEffect(() => {
// // //     setShowTransition(true);
// // //     setReady(false);
// // //   }, [location]);

// // //   const handleComplete = () => {
// // //     setShowTransition(false);
// // //     setReady(true);

// // //     // Animate in content
// // //     gsap.fromTo(
// // //       contentRef.current,
// // //       { opacity: 0, y: 40 },
// // //       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 }
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       {showTransition && <FancyPageTransition onComplete={handleComplete} />}
// // //       <div ref={contentRef} style={{ opacity: 0 }}>
// // //         {ready && children}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default AnimatedRouteWrapper;

// // // src/Components/AnimatedRouteWrapper.js
// // import React, { useEffect, useState, useRef } from "react";
// // import { useLocation } from "react-router-dom";
// // import { gsap } from "gsap";
// // import PageTransition from "./PageTransition";

// // const AnimatedRouteWrapper = ({ children }) => {
// //   const location = useLocation();
// //   const [showTransition, setShowTransition] = useState(false);
// //   const [ready, setReady] = useState(true);
// //   const contentRef = useRef();

// //   useEffect(() => {
// //     setShowTransition(true);
// //     setReady(false);
// //   }, [location]);

// //   const handleComplete = () => {
// //     setShowTransition(false);
// //     setReady(true);

// //     // Fade-in content smoothly after the transition
// //     gsap.fromTo(
// //       contentRef.current,
// //       { opacity: 0, y: 40 },
// //       { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
// //     );
// //   };

// //   return (
// //     <>
// //       {showTransition && <PageTransition onComplete={handleComplete} />}
// //       <div ref={contentRef} style={{ opacity: 0 }}>
// //         {ready && children}
// //       </div>
// //     </>
// //   );
// // };

// // export default AnimatedRouteWrapper;
// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import PageTransition from "./PageTransition";

// const AnimatedRouteWrapper = ({ children }) => {
//   const location = useLocation();
//   const [showTransition, setShowTransition] = useState(false);
//   const [ready, setReady] = useState(true);
//   const contentRef = useRef();

//   useEffect(() => {
//     // Trigger the page transition on location change
//     setShowTransition(true);
//     setReady(false);
//   }, [location]);

//   const handleTransitionComplete = () => {
//     setShowTransition(false);
//     setReady(true);

//     // Fade in the new content
//     if (contentRef.current) {
//       gsap.fromTo(
//         contentRef.current,
//         { opacity: 0, y: 20 },
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
//       );
//     }
//   };

//   return (
//     <>
//       {showTransition && (
//         <PageTransition onComplete={handleTransitionComplete} />
//       )}

//       {/* This avoids layout shifting or fixed-background issues */}
//       <div ref={contentRef} style={{ minHeight: "100vh" }}>
//         {ready && children}
//       </div>
//     </>
//   );
// };

// export default AnimatedRouteWrapper;
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";

const AnimatedRouteWrapper = ({ children }) => {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [ready, setReady] = useState(true);
  const contentRef = useRef();

  useEffect(() => {
    setShowTransition(true);
    setReady(false);
  }, [location]);

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setReady(true);
  };

  return (
    <div style={{ position: "relative" }}>
      {showTransition && (
        <PageTransition onComplete={handleTransitionComplete} />
      )}
      <div ref={contentRef}>{ready && children}</div>
    </div>
  );
};

export default AnimatedRouteWrapper;
