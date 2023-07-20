// import React, { useState } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";
// import { ArrowIcon } from "../Icons";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export const ScrollButton = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300) {
//       setVisible(true);
//     } else if (scrolled <= 300) {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//       /* you can also use 'auto' behaviour
//          in place of 'smooth' */
//     });
//   };

//   window.addEventListener("scroll", toggleVisible);

//   return (
//     <>
//       {" "}
//       <FaArrowCircleUp
//         className="scrolltotopBtn pe-4"
//         onClick={scrollToTop}
//         style={{
//           display: visible ? "inline" : "none",
//           // width: "100px",
//           height: "30px",
//         }}
//       />
//     </>
//   );
// };
