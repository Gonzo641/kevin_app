"use client";

import Image from "next/image";

import photo from "@/public/images/prest-photo.jpg";
import photo2 from "@/public/images/prest-photo2.jpg";
import video from "@/public/images/prest-video.jpg";
import loc from "@/public/images/prest-loc.jpg";
import loc2 from "@/public/images/prest-loc2.jpg";
import Link from "next/link";

export default function Prestations() {
  return (
    <section className="pt-20">
        <div className="flex justify-center items-center pb-4">
            <h2 className="text-white text-4xl">
                Prestations
            </h2>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6 xl:px-[8rem] px-4 xl:py-20 py-10 pb-10">
            <Link href="/photo">
                <div className="flex justify-center items-center">
                    <Image src={photo2} alt="image" className="hover:scale-105 hover:opacity-50 transition duration-500"/>
                    <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl">
                        Photo
                    </h3>
                </div>
            </Link>
            <Link href="/video">
                <div className="flex justify-center items-center">
                    <Image src={video} alt="image" className="hover:scale-105 hover:opacity-50 transition duration-500"/>
                    <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl">
                        Vidéo
                    </h3>
                </div>
            </Link>
            <Link href="/locations">
                <div className="flex justify-center items-center">
                    <Image src={loc2} alt="image" className="hover:scale-105 hover:opacity-50 transition duration-500" />
                    <h3 className="absolute text-white text-6xl sm:text-8xl xl:text-6xl">
                        Locations
                    </h3>
                </div>
            </Link>
        </div>
    </section>
  )
}