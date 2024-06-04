"use client";

import Image from "next/image";
import Link from "next/link";
import { storeData } from "@/lib/data";

type PrestaProps = (typeof storeData)[number];

export default function PhotoPresta({ title, imageUrl, price }: PrestaProps) {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* <Link href={link}> */}
        <div className="flex flex-col justify-center items-center text-center group">  
          <Image 
            src={imageUrl} 
            alt="image" 
            className="rounded-t-lg transition duration-500 group-hover:scale-105 group-hover:opacity-70" 
          />
          <div className="w-full text-xl uppercase bg-white p-4 font-sans font-semibold rounded-b-lg group-hover:scale-105 transition duration-500 ">
            <h4 className="">
                {title}
            </h4>
            <span>
                {price}€
            </span>
          </div>          
        </div>
      {/* </Link> */}
    </div>
  );
}
