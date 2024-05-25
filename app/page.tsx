"use client";

import Image from "next/image";
import HomePic from "@/public/images/Kevin_homepage.jpg";
import Logo from "@/public/images/kev_logo.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import About from "@/components/About";
import Prestations from "@/components/Prestations";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="h-screen">
      <Section1 />
      <Prestations />
      <Portfolio />
      <About />
    </main>
  );
}

const Section1 = () => {

  return (
    <div className="flex justify-center items-center text-white w-full h-full">
      <Image src={HomePic} alt="image"className="w-full h-full object-cover" />
      <div className="flex flex-col justify-center items-center mt-[16rem] absolute">
        <Image src={Logo} alt="img" />
        <h1 className="md:text-6xl text-2xl uppercase">
          kevin abélard
        </h1>
        <div className="flex justify-center items-center gap-4 text-xl uppercase mt-4">
          <div className="md:w-[50px] w-[20px] h-[2px] bg-white" />
          <p className="text-base md:text-2xl">photographe</p>
          <div className="md:w-[20px] w-[10px] h-[2px] bg-white" />
          <p className="text-base md:text-2xl">vidéaste</p>
          <div className="md:w-[50px] w-[20px] h-[2px] bg-white" />
        </div>
      </div>
    </div>
  );
};








// "use client";

// import Image from "next/image";
// import HomePic from "@/public/images/Kevin_homepage.jpg";
// import Logo from "@/public/images/kev_logo.png";
// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import Lenis from "lenis";
// import About from "@/components/About";

// export default function Home() {
//   return (
//     <main className="h-screen">
//       <Section1 />
//       <About />
//     </main>
//   );
// }

// const Section1 = () => {

//   return (
//     <div style={{backgroundImage: `url(${HomePic.src})`, width: '100%', height: '100%', }} 
//          className="flex flex-col justify-center items-center text-white bg-no-repeat object-cover">
//       <div className="flex flex-col justify-center items-center mt-[16rem]">
//         <Image src={Logo} alt="img" />
//         <h1 className="text-6xl uppercase">
//           kevin abélard
//         </h1>
//         <div className="flex justify-center items-center gap-4 text-xl uppercase mt-4">
//           <div className="w-[50px] h-[2px] bg-white" />
//           <p>photographe</p>
//           <div className="w-[20px] h-[2px] bg-white" />
//           <p>vidéaste</p>
//           <div className="w-[50px] h-[2px] bg-white" />
//         </div>
//       </div>
//     </div>
//   );
// };
