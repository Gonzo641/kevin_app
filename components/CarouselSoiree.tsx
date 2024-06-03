"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

export default function CarouselSoiree() {
  return (
    <section className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-[#8c705a] w-[21rem] sm:w-[25rem] h-12 rounded-t-lg">
            <h3 className="text-white text-3xl font-semibold">
                Soirée
            </h3>
        </div>
        <div className="flex justify-center items-center px-12">
            <Carousel className="max-w-[400px] pt-4">
                <CarouselContent>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree1.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree2.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree3.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree4.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree5.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/images/prestations/mariage/mariage-soiree6.png"
                        width={500}
                        height={200}
                        alt="image"
                        className="object-cover rounded-xl"
                    />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </section>
  )
}