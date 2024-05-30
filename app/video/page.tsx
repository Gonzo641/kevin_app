"use client";

import React from "react"
import { prestaVideo } from "@/lib/data";
import VideoPresta from "@/components/VideoPresta";
import SectionHeading from "@/components/SectionHeading";


export default function page() {
  return (
    <section>
      <SectionHeading>Vidéo</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-28 2xl:px-[27rem] py-20 md:pb-[11rem] sm:gap-4 xl:gap-0">
        {prestaVideo.map((presta, index) => (
          <React.Fragment key={index}>
            <VideoPresta {...presta} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}