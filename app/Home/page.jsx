// import React from "react";
// import HeroContent from "./_components/Hero";

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col h-full w-full" id="about-me">
//     <div className="absolute inset-0 -z-10">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 h-full w-full object-cover"
//       >
//         <source src="/blackhole.mp4" type="video/webm" />
//       </video>
//     </div>
//     <HeroContent />
//   </div>
  
//   );
// };

// export default Hero;


import React from "react";
import HeroContent from "./_components/Hero";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;