"use client";

import React from "react"
import { prestaData } from "@/lib/data";
import PhotoPresta from "@/components/PhotoPresta";
import SectionHeading from "@/components/SectionHeading";


export default function page() {
  return (
    <section>
      <SectionHeading>Photo</SectionHeading>      
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:px-28 2xl:px-64 pb-20 pt-8 md:pb-[11rem] sm:gap-4 xl:gap-0">
        {prestaData.map((presta, index) => (
          <React.Fragment key={index}>
            <PhotoPresta {...presta} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}