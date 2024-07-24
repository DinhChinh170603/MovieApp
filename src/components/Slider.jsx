// import React, { useEffect, useState } from "react";

// const Slider = ({ children: slides, autoSlides = false, interval = 5000 }) => {
//   const [curr, setCurr] = useState(0);

//   const next = () => {
//     // setCurr((curr + 1) % slides.length);
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//   };

//   useEffect(() => {
//       if (!autoSlides) return;
//       const slideInterval = setInterval(next, interval);

//       return () => clearInterval(slideInterval);
//   }, [])

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-out"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides}
//       </div>
//     </div>
//   );
// };

// export default Slider;
