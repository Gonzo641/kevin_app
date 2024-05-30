"use client";

import Image from "next/image";

import photo from "@/public/images/prest-photo.jpg";
import photo2 from "@/public/images/prest-photo2.jpg";
import video from "@/public/images/prest-video.jpg";
import loc from "@/public/images/prest-loc.jpg";
import loc2 from "@/public/images/prest-loc2.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Prestations() {
  return (
    <section id="prestations" className="pt-20 scroll-mt-6 overflow-hidden">
        <div className="flex justify-center items-center pb-4">
            <motion.h2 className="text-white text-4xl"
                       initial={{ opacity: 0, y: 100}}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{
                        once: true,
                        }}
                       transition={{
                         duration: 0.8,
                         delay: 0.6,
                         ease: [0, 0.71, 0.2, 1.01]
                       }}
            >
                Prestations
            </motion.h2>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 xl:px-[8rem] px-4 xl:py-20 py-10 pb-10">
            <motion.div initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                          }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link href="/photo">
                    <div className="flex justify-center items-center group">
                        <Image src={photo2} alt="image" className="group-hover:scale-105 group-hover:opacity-50 transition duration-500"/>
                        <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl opacity-0 group-hover:opacity-100 transition duration-500">
                            Photo
                        </h3>
                    </div>
                </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link href="/video">
                    <div className="flex justify-center items-center group">
                        <Image src={video} alt="image" className="group-hover:scale-105 group-hover:opacity-50 transition duration-500"/>
                        <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl opacity-0 group-hover:opacity-100 transition duration-500">
                            Vidéo
                        </h3>
                    </div>
                </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <Link href="/locations">
                    <div className="flex justify-center items-center group">
                        <Image src={loc2} alt="image" className="group-hover:scale-105 group-hover:opacity-50 transition duration-500" />
                        <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl opacity-0 group-hover:opacity-100 transition duration-500">
                            Locations
                        </h3>
                    </div>
                </Link>
            </motion.div>
        </div>
    </section>
  )
}