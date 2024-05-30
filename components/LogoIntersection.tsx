"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/kev_logo.png";
import GoogleAvis from "@/public/images/avis-google.png";
import Wedding from "@/public/images/badge-weddingawards.jpg";

export default function LogoIntersection() {
  return (
    <div className="flex flex-col justify-center items-center pt-8">
        <Image src={Logo} alt="image" />
        <div className="flex gap-2">
          <Link href="https://www.google.com/search?q=kevin+abelard&rlz=1C1CHBF_frFR918&sxsrf=APq-WBsu6IIMFgir1yURjn9BW6gqUToBeQ%3A1644581277027&ei=nVEGYveNAc-4abr1tbAL&ved=0ahUKEwi30MjWzvf1AhVPXBoKHbp6DbYQ4dUDCA4&uact=5&oq=kevin+abelard&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyAggmOgcIIxDqAhAnSgQIQRgASgQIRhgAUI8RWNIXYK0aaAFwAHgAgAFfiAG7AZIBATKYAQCgAQGwAQrAAQE&sclient=gws-wiz#lrd=0x12addd6cf7d55785:0x614dd0d591e9fe71,3,,,">
            <Image src={GoogleAvis} alt="image" />
          </Link>
          <Link href="https://www.mariages.net/photo-mariage/kevin-abelard-photographe--e260865">
            <Image src={Wedding} alt="image" className="w-32" />
          </Link>
        </div>
    </div>
  )
}