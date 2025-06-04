// // // // // // // src/Components/PageTransition.js
// // // // // // import React, { useEffect, useRef } from "react";
// // // // // // import { gsap } from "gsap";

// // // // // // const PageTransition = ({ onComplete }) => {
// // // // // //   const overlayRef = useRef();
// // // // // //   const shapeRef = useRef();

// // // // // //   useEffect(() => {
// // // // // //     const tl = gsap.timeline({
// // // // // //       defaults: { ease: "power4.inOut" },
// // // // // //       onComplete: onComplete,
// // // // // //     });

// // // // // //     // Set the initial state of the overlay to be off-screen (hidden)
// // // // // //     gsap.set(overlayRef.current, { y: "100%" });

// // // // // //     // Slide in the full-screen overlay
// // // // // //     tl.to(overlayRef.current, { y: "0%", duration: 0.7 });

// // // // // //     // Animate the shape (morphing effect)
// // // // // //     tl.fromTo(
// // // // // //       shapeRef.current,
// // // // // //       { scale: 0, opacity: 0 },
// // // // // //       { scale: 2, opacity: 1, duration: 1.2 },
// // // // // //       "-=0.4"
// // // // // //     );

// // // // // //     // Morph the shape from a circle to a rectangle
// // // // // //     tl.to(shapeRef.current, {
// // // // // //       borderRadius: "10%",
// // // // // //       width: "100%",
// // // // // //       height: "100%",
// // // // // //       duration: 1.4,
// // // // // //       ease: "power4.out",
// // // // // //     });

// // // // // //     // Slide the overlay out to complete the transition
// // // // // //     tl.to(overlayRef.current, { y: "-100%", duration: 0.7, delay: 0.5 });

// // // // // //     return () => {
// // // // // //       gsap.set(overlayRef.current, { y: "100%" });
// // // // // //       gsap.set(shapeRef.current, { scale: 0, opacity: 0 });
// // // // // //     };
// // // // // //   }, [onComplete]);

// // // // // //   return (
// // // // // //     <div
// // // // // //       ref={overlayRef}
// // // // // //       style={{
// // // // // //         position: "fixed",
// // // // // //         inset: 0,
// // // // // //         backgroundColor: "#111",
// // // // // //         zIndex: 9999,
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "center",
// // // // // //         overflow: "hidden",
// // // // // //       }}
// // // // // //     >
// // // // // //       <div
// // // // // //         ref={shapeRef}
// // // // // //         style={{
// // // // // //           width: "200px",
// // // // // //           height: "200px",
// // // // // //           backgroundColor: "#fff",
// // // // // //           borderRadius: "50%",
// // // // // //           transform: "scale(0)",
// // // // // //           opacity: 0,
// // // // // //           transformOrigin: "center",
// // // // // //         }}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PageTransition;

// // // // // // src/Components/PageTransition.js
// // // // // import React, { useEffect, useRef } from "react";
// // // // // import { gsap } from "gsap";

// // // // // const PageTransition = ({ onComplete }) => {
// // // // //   const overlayRef = useRef();
// // // // //   const shapeRef = useRef();
// // // // //   const blobRef = useRef();

// // // // //   useEffect(() => {
// // // // //     const tl = gsap.timeline({
// // // // //       defaults: { ease: "power4.inOut" },
// // // // //       onComplete: onComplete,
// // // // //     });

// // // // //     // Initial hidden states
// // // // //     gsap.set(overlayRef.current, { y: "100%" });
// // // // //     gsap.set(blobRef.current, { scale: 0 });

// // // // //     // Slide overlay in
// // // // //     tl.to(overlayRef.current, { y: "0%", duration: 0.6 });

// // // // //     // Animate circle scale and morph
// // // // //     tl.fromTo(
// // // // //       shapeRef.current,
// // // // //       { scale: 0, opacity: 1, borderRadius: "50%" },
// // // // //       {
// // // // //         scale: 2.5,
// // // // //         borderRadius: "10%",
// // // // //         duration: 1.2,
// // // // //         ease: "power3.out",
// // // // //       },
// // // // //       "-=0.3"
// // // // //     );

// // // // //     // Show animated blob while shape is scaled in
// // // // //     tl.fromTo(
// // // // //       blobRef.current,
// // // // //       { scale: 0, rotation: 0 },
// // // // //       { scale: 1, rotation: 360, duration: 1.1, ease: "expo.out" },
// // // // //       "-=1"
// // // // //     );

// // // // //     // Slide overlay out
// // // // //     tl.to(overlayRef.current, { y: "-100%", duration: 0.6, delay: 0.3 });

// // // // //     return () => {
// // // // //       gsap.set(overlayRef.current, { y: "100%" });
// // // // //       gsap.set(shapeRef.current, { scale: 0 });
// // // // //       gsap.set(blobRef.current, { scale: 0 });
// // // // //     };
// // // // //   }, [onComplete]);

// // // // //   return (
// // // // //     <div
// // // // //       ref={overlayRef}
// // // // //       style={{
// // // // //         position: "fixed",
// // // // //         inset: 0,
// // // // //         backgroundColor: "#111",
// // // // //         zIndex: 9999,
// // // // //         display: "flex",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "center",
// // // // //         overflow: "hidden",
// // // // //       }}
// // // // //     >
// // // // //       {/* Morphing Circle */}
// // // // //       <div
// // // // //         ref={shapeRef}
// // // // //         style={{
// // // // //           position: "absolute",
// // // // //           width: "200px",
// // // // //           height: "200px",
// // // // //           backgroundColor: "#fff",
// // // // //           borderRadius: "50%",
// // // // //           transform: "scale(0)",
// // // // //         }}
// // // // //       />

// // // // //       {/* Spinning Blob (SVG) */}
// // // // //       <svg
// // // // //         ref={blobRef}
// // // // //         width="200"
// // // // //         height="200"
// // // // //         viewBox="0 0 200 200"
// // // // //         fill="#111"
// // // // //         xmlns="http://www.w3.org/2000/svg"
// // // // //         style={{
// // // // //           position: "absolute",
// // // // //           transformOrigin: "center",
// // // // //           transform: "scale(0)",
// // // // //           zIndex: 2,
// // // // //         }}
// // // // //       >
// // // // //         <path d="M49.1,-59.2C62.5,-47.6,72.9,-31.2,72.7,-15.9C72.6,-0.7,61.8,13.4,51.2,25.9C40.6,38.4,30.2,49.4,17.3,55.9C4.5,62.4,-10.7,64.3,-25.4,59.4C-40.1,54.4,-54.3,42.7,-61.9,27.8C-69.5,13,-70.6,-4.9,-63.5,-19.7C-56.3,-34.5,-40.8,-46.2,-25.1,-56.3C-9.4,-66.4,6.4,-74.9,21.5,-72.4C36.7,-69.8,49.1,-56.8,49.1,-59.2Z" />
// // // // //       </svg>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PageTransition;

// // // // // src/Components/PageTransition.js
// // // // import React, { useEffect, useRef } from "react";
// // // // import { gsap } from "gsap";

// // // // const PageTransition = ({ onComplete }) => {
// // // //   const overlayRef = useRef();
// // // //   const shapeRef = useRef();
// // // //   const blobRef = useRef();
// // // //   const textRef = useRef();
// // // //   const flashRef = useRef();

// // // //   useEffect(() => {
// // // //     const tl = gsap.timeline({
// // // //       defaults: { ease: "power4.inOut" },
// // // //       onComplete: onComplete,
// // // //     });

// // // //     // Optional sound effect
// // // //     const playSound = () => {
// // // //       const audio = new Audio("/sounds/whoosh.mp3"); // Add your sound file
// // // //       audio.volume = 0.4;
// // // //       audio.play().catch(() => {}); // avoid error on silent autoplay
// // // //     };

// // // //     gsap.set(overlayRef.current, { y: "100%" });
// // // //     gsap.set(blobRef.current, { scale: 0 });
// // // //     gsap.set(flashRef.current, { opacity: 0 });

// // // //     // Slide overlay in
// // // //     tl.to(overlayRef.current, { y: "0%", duration: 0.6 });

// // // //     // Play sound (optional)
// // // //     tl.call(playSound, [], "-=0.6");

// // // //     // Morphing circle in
// // // //     tl.fromTo(
// // // //       shapeRef.current,
// // // //       { scale: 0, opacity: 1, borderRadius: "50%" },
// // // //       {
// // // //         scale: 2.5,
// // // //         borderRadius: "10%",
// // // //         duration: 1.3,
// // // //         ease: "power3.out",
// // // //         background:
// // // //           "radial-gradient(circle at center, #ffffff 0%, #dddddd 100%)",
// // // //       },
// // // //       "-=0.3"
// // // //     );

// // // //     // Brand/logo/text fade in
// // // //     tl.fromTo(
// // // //       textRef.current,
// // // //       { opacity: 0, y: 30, letterSpacing: "0.05em" },
// // // //       { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
// // // //       "-=1"
// // // //     );

// // // //     // Blob animation (hide white flash)
// // // //     tl.fromTo(
// // // //       blobRef.current,
// // // //       { scale: 0, rotation: 0 },
// // // //       {
// // // //         scale: 1.1,
// // // //         rotation: 360,
// // // //         duration: 1.2,
// // // //         ease: "expo.out",
// // // //         transformOrigin: "center",
// // // //       },
// // // //       "-=1.2"
// // // //     );

// // // //     // White flash for portal feel
// // // //     tl.to(
// // // //       flashRef.current,
// // // //       { opacity: 1, duration: 0.2, ease: "power2.inOut" },
// // // //       "-=0.8"
// // // //     );
// // // //     tl.to(
// // // //       flashRef.current,
// // // //       { opacity: 0, duration: 0.2, ease: "power2.inOut" },
// // // //       "-=0.4"
// // // //     );

// // // //     // Slide overlay out
// // // //     tl.to(overlayRef.current, { y: "-100%", duration: 0.6, delay: 0.2 });

// // // //     return () => {
// // // //       gsap.set(overlayRef.current, { y: "100%" });
// // // //       gsap.set(shapeRef.current, { scale: 0 });
// // // //       gsap.set(blobRef.current, { scale: 0 });
// // // //       gsap.set(textRef.current, { opacity: 0 });
// // // //     };
// // // //   }, [onComplete]);

// // // //   return (
// // // //     <div
// // // //       ref={overlayRef}
// // // //       style={{
// // // //         position: "fixed",
// // // //         inset: 0,
// // // //         backgroundColor: "#111",
// // // //         zIndex: 9999,
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         overflow: "hidden",
// // // //       }}
// // // //     >
// // // //       {/* Light Flash Overlay */}
// // // //       <div
// // // //         ref={flashRef}
// // // //         style={{
// // // //           position: "absolute",
// // // //           inset: 0,
// // // //           background: "white",
// // // //           opacity: 0,
// // // //           zIndex: 5,
// // // //           pointerEvents: "none",
// // // //         }}
// // // //       />

// // // //       {/* Morphing Shape */}
// // // //       <div
// // // //         ref={shapeRef}
// // // //         style={{
// // // //           width: "200px",
// // // //           height: "200px",
// // // //           background: "white",
// // // //           borderRadius: "50%",
// // // //           transform: "scale(0)",
// // // //           position: "absolute",
// // // //           zIndex: 1,
// // // //         }}
// // // //       />

// // // //       {/* Logo or Text Reveal */}
// // // //       <h1
// // // //         ref={textRef}
// // // //         style={{
// // // //           color: "#fff",
// // // //           fontSize: "2.2rem",
// // // //           fontWeight: "600",
// // // //           opacity: 0,
// // // //           zIndex: 3,
// // // //           position: "absolute",
// // // //           letterSpacing: "0.1em",
// // // //           fontFamily: "sans-serif",
// // // //           textAlign: "center",
// // // //         }}
// // // //       >
// // // //         Crafting Experience...
// // // //       </h1>

// // // //       {/* Animated Blob */}
// // // //       <svg
// // // //         ref={blobRef}
// // // //         width="200"
// // // //         height="200"
// // // //         viewBox="0 0 200 200"
// // // //         fill="#fff"
// // // //         xmlns="http://www.w3.org/2000/svg"
// // // //         style={{
// // // //           transform: "scale(0)",
// // // //           zIndex: 2,
// // // //           position: "absolute",
// // // //         }}
// // // //       >
// // // //         <path d="M49.1,-59.2C62.5,-47.6,72.9,-31.2,72.7,-15.9C72.6,-0.7,61.8,13.4,51.2,25.9C40.6,38.4,30.2,49.4,17.3,55.9C4.5,62.4,-10.7,64.3,-25.4,59.4C-40.1,54.4,-54.3,42.7,-61.9,27.8C-69.5,13,-70.6,-4.9,-63.5,-19.7C-56.3,-34.5,-40.8,-46.2,-25.1,-56.3C-9.4,-66.4,6.4,-74.9,21.5,-72.4C36.7,-69.8,49.1,-56.8,49.1,-59.2Z" />
// // // //       </svg>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PageTransition;

// // // import React, { useEffect, useRef } from "react";
// // // import { gsap } from "gsap";

// // // const PageTransition = ({ onComplete }) => {
// // //   const overlayRef = useRef();
// // //   const shapeRef = useRef();
// // //   const blobRef = useRef();
// // //   const textRef = useRef();
// // //   const glowRef = useRef();

// // //   useEffect(() => {
// // //     const tl = gsap.timeline({
// // //       defaults: { ease: "power4.inOut" },
// // //       onComplete: onComplete,
// // //     });

// // //     const playSound = () => {
// // //       const audio = new Audio("/sounds/whoosh.mp3"); // Optional
// // //       audio.volume = 0.3;
// // //       audio.play().catch(() => {});
// // //     };

// // //     gsap.set(overlayRef.current, { y: "100%" });
// // //     gsap.set(blobRef.current, { scale: 0 });
// // //     gsap.set(glowRef.current, { scale: 0, opacity: 0.6 });

// // //     // Slide in overlay
// // //     tl.to(overlayRef.current, { y: "0%", duration: 0.6 });

// // //     tl.call(playSound, [], "-=0.5");

// // //     // Morph shape
// // //     tl.fromTo(
// // //       shapeRef.current,
// // //       { scale: 0, borderRadius: "50%" },
// // //       {
// // //         scale: 2.5,
// // //         borderRadius: "8%",
// // //         duration: 1.3,
// // //         ease: "power3.out",
// // //       },
// // //       "-=0.3"
// // //     );

// // //     // Text reveal
// // //     tl.fromTo(
// // //       textRef.current,
// // //       { opacity: 0, y: 30 },
// // //       { opacity: 1, y: 0, duration: 1.1, ease: "power2.out" },
// // //       "-=1.2"
// // //     );

// // //     // Glow ring pulse
// // //     tl.fromTo(
// // //       glowRef.current,
// // //       { scale: 0 },
// // //       {
// // //         scale: 2.8,
// // //         opacity: 0,
// // //         duration: 1.2,
// // //         ease: "power3.out",
// // //       },
// // //       "-=1.1"
// // //     );

// // //     // Blob effect
// // //     tl.fromTo(
// // //       blobRef.current,
// // //       { scale: 0, rotation: 0 },
// // //       { scale: 1.1, rotation: 360, duration: 1.2, ease: "expo.out" },
// // //       "-=1.1"
// // //     );

// // //     // Slide out overlay
// // //     tl.to(overlayRef.current, { y: "-100%", duration: 0.6, delay: 0.2 });

// // //     return () => {
// // //       gsap.set(overlayRef.current, { y: "100%" });
// // //       gsap.set(shapeRef.current, { scale: 0 });
// // //       gsap.set(blobRef.current, { scale: 0 });
// // //       gsap.set(glowRef.current, { scale: 0 });
// // //       gsap.set(textRef.current, { opacity: 0 });
// // //     };
// // //   }, [onComplete]);

// // //   return (
// // //     <div
// // //       ref={overlayRef}
// // //       style={{
// // //         position: "fixed",
// // //         inset: 0,
// // //         backgroundColor: "#111",
// // //         zIndex: 9999,
// // //         display: "flex",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         overflow: "hidden",
// // //       }}
// // //     >
// // //       {/* Morphing Shape */}
// // //       <div
// // //         ref={shapeRef}
// // //         style={{
// // //           width: "200px",
// // //           height: "200px",
// // //           backgroundColor: "#f5f5f5",
// // //           borderRadius: "50%",
// // //           transform: "scale(0)",
// // //           position: "absolute",
// // //           zIndex: 1,
// // //         }}
// // //       />

// // //       {/* Glow Ring */}
// // //       <div
// // //         ref={glowRef}
// // //         style={{
// // //           width: "200px",
// // //           height: "200px",
// // //           borderRadius: "50%",
// // //           border: "4px solid #fff",
// // //           position: "absolute",
// // //           zIndex: 1,
// // //           transform: "scale(0)",
// // //           opacity: 0,
// // //           mixBlendMode: "soft-light",
// // //           filter: "blur(4px)",
// // //         }}
// // //       />

// // //       {/* Text */}
// // //       <h1
// // //         ref={textRef}
// // //         style={{
// // //           color: "#111",
// // //           fontSize: "2.4rem",
// // //           fontWeight: "600",
// // //           zIndex: 3,
// // //           position: "absolute",
// // //           letterSpacing: "0.05em",
// // //           fontFamily: "sans-serif",
// // //           textAlign: "center",
// // //           opacity: 0,
// // //         }}
// // //       >
// // //         Crafting Experience...
// // //       </h1>

// // //       {/* Blob */}
// // //       <svg
// // //         ref={blobRef}
// // //         width="200"
// // //         height="200"
// // //         viewBox="0 0 200 200"
// // //         fill="#fff"
// // //         xmlns="http://www.w3.org/2000/svg"
// // //         style={{
// // //           transform: "scale(0)",
// // //           zIndex: 2,
// // //           position: "absolute",
// // //         }}
// // //       >
// // //         <path d="M49.1,-59.2C62.5,-47.6,72.9,-31.2,72.7,-15.9C72.6,-0.7,61.8,13.4,51.2,25.9C40.6,38.4,30.2,49.4,17.3,55.9C4.5,62.4,-10.7,64.3,-25.4,59.4C-40.1,54.4,-54.3,42.7,-61.9,27.8C-69.5,13,-70.6,-4.9,-63.5,-19.7C-56.3,-34.5,-40.8,-46.2,-25.1,-56.3C-9.4,-66.4,6.4,-74.9,21.5,-72.4C36.7,-69.8,49.1,-56.8,49.1,-59.2Z" />
// // //       </svg>
// // //     </div>
// // //   );
// // // };

// // // export default PageTransition;

// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";

// // const PageTransition = ({ onComplete }) => {
// //   const overlayRef = useRef();
// //   const shapeRef = useRef();
// //   const blobRef = useRef();
// //   const textRef = useRef();
// //   const glowRef = useRef();

// //   useEffect(() => {
// //     const tl = gsap.timeline({
// //       defaults: { ease: "power4.inOut" },
// //       onComplete: onComplete,
// //     });

// //     const playSound = () => {
// //       const audio = new Audio("/sounds/whoosh.mp3");
// //       audio.volume = 0.3;
// //       audio.play().catch(() => {});
// //     };

// //     gsap.set(overlayRef.current, { y: "100%" });
// //     gsap.set(blobRef.current, { scale: 0 });
// //     gsap.set(glowRef.current, { scale: 0, opacity: 0.6 });

// //     tl.to(overlayRef.current, { y: "0%", duration: 0.6 });

// //     tl.call(playSound, [], "-=0.5");

// //     // 🔲 Circle to square morph with dark background, longer duration
// //     tl.fromTo(
// //       shapeRef.current,
// //       { scale: 0, borderRadius: "50%" },
// //       {
// //         scale: 3,
// //         borderRadius: "12%",
// //         duration: 2.8, // ⏱️ Longer and smoother
// //         ease: "power2.out",
// //         backgroundColor: "#111", // Dark shape now
// //       },
// //       "-=0.3"
// //     );

// //     // Text reveal (dark text)
// //     tl.fromTo(
// //       textRef.current,
// //       { opacity: 0, y: 30 },
// //       { opacity: 1, y: 0, duration: 1.6, ease: "power2.out" },
// //       "-=2"
// //     );

// //     // Glow ring
// //     tl.fromTo(
// //       glowRef.current,
// //       { scale: 0 },
// //       {
// //         scale: 3.3,
// //         opacity: 0,
// //         duration: 1.5,
// //         ease: "power3.out",
// //       },
// //       "-=1.8"
// //     );

// //     // Blob animation
// //     tl.fromTo(
// //       blobRef.current,
// //       { scale: 0, rotation: 0 },
// //       {
// //         scale: 1.1,
// //         rotation: 720,
// //         duration: 2.3,
// //         ease: "expo.out",
// //         transformOrigin: "center",
// //       },
// //       "-=2"
// //     );

// //     tl.to(overlayRef.current, { y: "-100%", duration: 0.6, delay: 0.2 });

// //     return () => {
// //       gsap.set(overlayRef.current, { y: "100%" });
// //       gsap.set(shapeRef.current, { scale: 0 });
// //       gsap.set(blobRef.current, { scale: 0 });
// //       gsap.set(glowRef.current, { scale: 0 });
// //       gsap.set(textRef.current, { opacity: 0 });
// //     };
// //   }, [onComplete]);

// //   return (
// //     <div
// //       ref={overlayRef}
// //       style={{
// //         position: "fixed",
// //         inset: 0,
// //         backgroundColor: "black", // Page background
// //         zIndex: 9999,
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         overflow: "hidden",
// //       }}
// //     >
// //       {/* Morphing Dark Shape */}
// //       <div
// //         ref={shapeRef}
// //         style={{
// //           width: "200px",
// //           height: "200px",
// //           backgroundColor: "white",
// //           borderRadius: "50%",
// //           transform: "scale(0)",
// //           position: "absolute",
// //           zIndex: 1,
// //         }}
// //       />

// //       {/* Glow Ring */}
// //       <div
// //         ref={glowRef}
// //         style={{
// //           width: "200px",
// //           height: "200px",
// //           borderRadius: "50%",
// //           border: "4px solid #000",
// //           position: "absolute",
// //           zIndex: 1,
// //           transform: "scale(0)",
// //           opacity: 0,
// //           mixBlendMode: "soft-light",
// //           filter: "blur(4px)",
// //         }}
// //       />

// //       {/* Text */}
// //       <h1
// //         ref={textRef}
// //         style={{
// //           color: "white",
// //           fontSize: "2.4rem",
// //           fontWeight: "600",
// //           zIndex: 3,
// //           position: "absolute",
// //           letterSpacing: "0.05em",
// //           fontFamily: "sans-serif",
// //           textAlign: "center",
// //           opacity: 0,
// //         }}
// //       >
// //         Crafting Experience...
// //       </h1>

// //       {/* Blob */}
// //       <svg
// //         ref={blobRef}
// //         width="200"
// //         height="200"
// //         viewBox="0 0 200 200"
// //         fill="white"
// //         xmlns="http://www.w3.org/2000/svg"
// //         style={{
// //           transform: "scale(0)",
// //           zIndex: 2,
// //           position: "absolute",
// //         }}
// //       >
// //         <path d="M49.1,-59.2C62.5,-47.6,72.9,-31.2,72.7,-15.9C72.6,-0.7,61.8,13.4,51.2,25.9C40.6,38.4,30.2,49.4,17.3,55.9C4.5,62.4,-10.7,64.3,-25.4,59.4C-40.1,54.4,-54.3,42.7,-61.9,27.8C-69.5,13,-70.6,-4.9,-63.5,-19.7C-56.3,-34.5,-40.8,-46.2,-25.1,-56.3C-9.4,-66.4,6.4,-74.9,21.5,-72.4C36.7,-69.8,49.1,-56.8,49.1,-59.2Z" />
// //       </svg>
// //     </div>
// //   );
// // };

// // export default PageTransition;
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const PageTransition = ({ onComplete }) => {
//   const overlayRef = useRef();
//   const circleRef = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete,
//     });

//     // Start with the overlay visible
//     gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "auto" });
//     gsap.set(circleRef.current, { scale: 0.6, opacity: 0 });

//     tl.to(overlayRef.current, {
//       opacity: 1,
//       duration: 0.6,
//       ease: "power2.inOut",
//     });

//     tl.fromTo(
//       circleRef.current,
//       { scale: 0.6, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
//       "-=0.3"
//     );

//     tl.to(overlayRef.current, {
//       opacity: 0,
//       duration: 0.6,
//       ease: "power2.inOut",
//       delay: 0.4,
//     });

//     return () => {
//       gsap.killTweensOf(overlayRef.current);
//     };
//   }, [onComplete]);

//   return (
//     <div
//       ref={overlayRef}
//       style={{
//         position: "absolute",
//         inset: 0,
//         backgroundColor: "#111",
//         zIndex: 9999,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         pointerEvents: "none",
//       }}
//     >
//       <div
//         ref={circleRef}
//         style={{
//           width: "80px",
//           height: "80px",
//           backgroundColor: "#fff",
//           borderRadius: "50%",
//           boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
//         }}
//       />
//     </div>
//   );
// };

// export default PageTransition;
import React, { useEffect, useState } from "react";
import "./PageTransition.css";

const PageTransition = ({ onComplete }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(false);
      onComplete();
    }, 700); // Duration of fade-out

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return active && <div className="page-fade-transition" />;
};

export default PageTransition;
