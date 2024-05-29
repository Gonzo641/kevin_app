"use client";

import Image from "next/image";
import Logo from "@/public/images/kev_logo.png";

export default function LogoIntersection() {
  return (
    <div className="flex justify-center pt-8">
        <Image src={Logo} alt="image" />
    </div>
  )
}