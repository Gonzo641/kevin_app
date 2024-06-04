"use client";

import React from "react"
import { storeData } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Boutique from "@/components/Boutique";


export default function OnlineStore() {
  return (
    <section className="mt-20">  
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:px-28 2xl:px-64 pb-20 pt-8 md:pb-[11rem] sm:gap-4 xl:gap-0">
        {storeData.map((store, index) => (
          <React.Fragment key={index}>
            <Boutique {...store} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}