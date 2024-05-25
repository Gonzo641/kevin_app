"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

export default function CarouselMobile() {
  return (
    <div className="flex lg:hidden justify-center items-center px-12">
      <Carousel className="max-w-[500px] pt-12 lg:pt-[9rem]">
          <CarouselContent>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio1.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio2.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio4.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio5.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio6.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio7.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio8.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio9.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio10.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio11.png"
                    width={500}
                    height={200}
                    alt="image"
                    className="object-cover rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    src="/images/Kev_Portfolio13.png"
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
  )
}