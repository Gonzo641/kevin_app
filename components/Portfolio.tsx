"use client";

import Image from "next/image";
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import useDimension from "@/hook/useDimension";
import CarouselMobile from "./CarouselMobile";
import { Dancing_Script } from "next/font/google";

const inter2 = Dancing_Script({ subsets: ["latin"] });

const images: string[] = [
    "Kev_Portfolio1.png",
    "Kev_Portfolio2.png",
    "Kev_Portfolio3.png",
    "Kev_Portfolio4.png",
    "Kev_Portfolio5.png",
    "Kev_Portfolio6.png",
    "Kev_Portfolio7.png",
    "Kev_Portfolio8.png",
    "Kev_Portfolio9.png",
    "Kev_Portfolio10.png",
    "Kev_Portfolio13.png",
    "Kev_Portfolio14.png",
];

export default function Portfolio() {
    const container = useRef<HTMLDivElement>(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);

    return (
        <section id="portfolio" className="scroll-mt-20">
            <div className="flex justify-center items-center py-24">
                <h2 className={`${inter2.className} text-6xl text-white`}>
                    Portfolio
                </h2>
            </div>
            <div ref={container} className="sm:h-[117rem] h-[97rem] w-full relative lg:flex justify-center items-center flex-wrap md:flex-nowrap gap-4 p-12 box-border overflow-hidden hidden">
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                {/* <Column images={[images[9], images[10], images[11]]} y={y4}/> */}
            </div>
            <CarouselMobile />
        </section>
    );
}

interface ColumnProps {
    images: string[];
    y: any; 
    className?: string; 
}

const Column: React.FC<ColumnProps> = ({ images, y, className = "" }) => {
    return (
        <motion.div style={{ y }} className={`group relative h-full w-full md:w-[25%] flex flex-col gap-4 ${className}`}>
            {images.map((src, i) => (
                <div key={i} className="h-full w-full relative rounded-md overflow-hidden 
                                        group-[:nth-of-type(1)_&]:top-[-95%]
                                        group-[:nth-of-type(2)_&]:top-[-65%]
                                        group-[:nth-of-type(3)_&]:top-[-95%]
                                        group-[:nth-of-type(4)_&]:top-[-65%]">
                    <Image
                        src={`/images/${src}`}
                        fill
                        alt="image"
                        className="object-cover"
                    />
                </div>
            ))}
        </motion.div>
    );
}






// "use client";

// import Image from "next/image";
// import { useTransform, useScroll, motion } from 'framer-motion';
// import Lenis from "lenis";
// import { useEffect, useRef } from 'react';
// import useDimension from "@/hook/useDimension";

// const images: string[] = [
//     "Kev_Portfolio1.png",
//     "Kev_Portfolio2.png",
//     "Kev_Portfolio3.png",
//     "Kev_Portfolio4.png",
//     "Kev_Portfolio5.png",
//     "Kev_Portfolio6.png",
//     "Kev_Portfolio7.png",
//     "Kev_Portfolio8.png",
//     "Kev_Portfolio9.png",
//     "Kev_Portfolio10.png",
//     "Kev_Portfolio13.png",
//     "Kev_Portfolio14.png",
// ];

// export default function Portfolio() {
//     const container = useRef<HTMLDivElement>(null);
//     const { height } = useDimension();
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start end', 'end start']
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//     const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
//     const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//     const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);

//     useEffect(() => {
//         const lenis = new Lenis();
    
//         function raf(time: number) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }
    
//         requestAnimationFrame(raf);
//     }, []);

//     return (
//         <section>
//             <div ref={container} className="h-[140rem] relative flex gap-4 p-12 box-border overflow-hidden">
//                 <Column images={[images[0], images[1], images[2]]} y={y} />
//                 <Column images={[images[3], images[4], images[5]]} y={y2} />
//                 <Column images={[images[6], images[7], images[8]]} y={y3} />
//                 <Column images={[images[9], images[10], images[11]]} y={y4} />
//             </div>
//         </section>
//     );
// }

// interface ColumnProps {
//     images: string[];
//     y: any;
// }

// const Column: React.FC<ColumnProps> = ({ images, y }) => {
//     return (
//         <motion.div style={{ y }} className="group relative h-full w-[25%] flex flex-col gap-4">
//             {images.map((src, i) => (
//                 <div key={i} className="h-full w-full relative rounded-md overflow-hidden 
//                                         group-[:nth-of-type(1)_&]:top-[-95%]
//                                         group-[:nth-of-type(2)_&]:top-[-45%]
//                                         group-[:nth-of-type(3)_&]:top-[-95%]
//                                         group-[:nth-of-type(4)_&]:top-[-45%]">
//                     <Image
//                         src={`/images/${src}`}
//                         fill
//                         alt="image"
//                         className="object-cover"
//                     />
//                 </div>
//             ))}
//         </motion.div>
//     );
// }