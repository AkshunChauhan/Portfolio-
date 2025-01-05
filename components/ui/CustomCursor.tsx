// "use client";
// import { useEffect, useRef, useState } from "react";

// const CustomCursor = () => {
//   const [isClient, setIsClient] = useState(false); // State to track client-side rendering
//   const cursorRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Ensure this only runs on the client-side
//     setIsClient(true);

//     // Cursor animation to follow mouse
//     const handleMouseMove = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX - 8}px`; // Subtract half the cursor size to center it
//         cursorRef.current.style.top = `${e.clientY - 8}px`;
//       }
//     };

//     const handleMouseEnter = () => {
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = "scale(1)";
//         cursorRef.current.style.opacity = "1";
//       }
//     };

//     const handleMouseLeave = () => {
//       if (cursorRef.current) {
//         cursorRef.current.style.transform = "scale(0)";
//         cursorRef.current.style.opacity = "0";
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   // Only render the cursor on the client side
//   if (!isClient) {
//     return null;
//   }

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2"
//       style={{
//         position: "absolute",
//         left: "-9999px", // Start off-screen, update dynamically
//         top: "-9999px",  // Start off-screen, update dynamically
//         pointerEvents: "none",
//         transition: "transform 0.1s ease, opacity 0.1s ease",
//       }}
//     />
//   );
// };

// export default CustomCursor;
