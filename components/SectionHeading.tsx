import React from "react"


type SectionHeadingPorps = {
    children: React.ReactNode;
}

export default function SectionHeading({
    children }: SectionHeadingPorps) {
  return (
    <h2 className=" text-5xl font-medium 
                   uppercase mt-36 text-center text-white">
        {children}
    </h2>
  )
}