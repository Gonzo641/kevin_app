"use client";

import Image from "next/image";
import Link from "next/link";
import { prestaData } from "@/lib/data";

type PrestaProps = (typeof prestaData)[number];

export default function PhotoPresta({ title, imageUrl, link }: PrestaProps) {
  return (
    <div className="flex justify-center items-center mt-10">
      <Link href={link}>
        <div className="relative flex justify-center items-center group">  
          <Image 
            src={imageUrl} 
            alt="image" 
            className="rounded-lg transition duration-500 group-hover:opacity-50 group-hover:scale-105" 
          />          
          <h4 className="text-white text-2xl uppercase absolute opacity-0 group-hover:opacity-100 transition duration-500 border p-4">
            {title}
          </h4>
        </div>
      </Link>
    </div>
  );
}
