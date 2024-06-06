"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import BadgeWedding from "@/public/images/badge-weddingawards.jpg";
import CarouselPrepa from "@/components/CarouselPrepa";
import CarouselCouple from "@/components/CarouselCouple";
import CarouselMairie from "@/components/CarouselMairie";
import CarouselCeremonie from "@/components/CarouselCeremonie";
import CarouselGroupe from "@/components/CarouselGroupe";
import CarouselVin from "@/components/CarouselVin";
import CarouselSoiree from "@/components/CarouselSoiree";
import Link from "next/link";
import PolygonBackground from "@/components/PolygonBackground";

// import { mariageCarouselPreparatif } from "@/lib/data";
// import { mariageCarouselCouple } from "@/lib/data";
// import { mariageCarouselMairie } from "@/lib/data";
// import { mariageCarouselCeremonie } from "@/lib/data";
// import { mariageCarouselGroupe } from "@/lib/data";
// import { mariageCarouselVin } from "@/lib/data";
// import { mariageCarouselSoiree } from "@/lib/data";

// type PrepaProps = (typeof mariageCarouselPreparatif)[number];
// type CoupleProps = (typeof mariageCarouselCouple)[number];
// type MairieProps = (typeof mariageCarouselMairie)[number];
// type CeremonieProps = (typeof mariageCarouselCeremonie)[number];
// type GroupeProps = (typeof mariageCarouselGroupe)[number];
// type VinProps = (typeof mariageCarouselVin)[number];
// type SoireeProps = (typeof mariageCarouselSoiree)[number];

export default function MariagePage() {
  return (
    <section className='mt-10'>
      <PolygonBackground />
      <div className="grid xl:grid-cols-2 grid-cols-1 rounded-lg pt-20 pb-20 2xl:px-40 px-10 gap-2">


        <div className='flex flex-col gap-4'>
          <CarouselPrepa />
          <CarouselCouple />
          <CarouselMairie />
          <CarouselCeremonie />
          <CarouselGroupe />
          <CarouselVin />
          <CarouselSoiree />
        </div>


        <div className='text-white pt-10'>
          <motion.div initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
          >
            <h2 className="text-4xl text-white ">  
              Mariage
            </h2>
            <div className="w-[20px] h-[2px] bg-white" />
          </motion.div>

          <motion.div className='flex flex-col gap-2 pt-8'
                      initial={{ opacity: 0, x: 100}}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                          duration: 0.8,
                          delay: 0.8,
                          ease: [0, 0.71, 0.2, 1.01]
                      }}
          >
            <p>
              Je vous propose différentes formules.
              Elles peuvent être modifiées ou modulées en fonction de vos besoins.
            </p>
            <p>
              Toutes les formules comprennent la prise de vue, le déplacement et la retouche des images.
            </p>
            <p>
               Tout les albums et tirages sont made in France
            </p>
            <p>
              Toutes vos photos seront disponibles un an sur la galerie privée et archivée à vie .
            </p>
            <p className='font-semibold'>
              Voici les différentes formules avec album:
            </p>
          </motion.div>          

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <span className="text-6xl relative text-gray-900">01</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Spécial</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
            >
                <p className=" text-white">
                  Album premium 30 pages 30x30 (montage Photoshop unique, environ 130 photos)
                  (Couple, mairie, église, groupe, vin d'honneur, décoration, début de soirée).
                </p>
                <span className='font-semibold'>
                  Prix: 990€
                </span>
            </motion.div>

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <span className="text-6xl relative text-gray-900">02</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Prestige</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
          >
              <p className=" text-white">
                Album Luxe 40 pages 30x40 (montage Photoshop et choix de la finition de l'album et de la box, environ 250 photos)
                (Préparatifs, couple, mairie, cérémonie, groupe, vin d'honneur, décoration, soirée).
              </p>
              <span>
                Prix: 1890€
              </span>
              <p className='text-xl font-semibold pt-6'>
                Voici les différentes formules numériques:
              </p>
          </motion.div>

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <span className="text-6xl relative text-gray-900">01</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Numérique Spécial</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
            >
                <p className=" text-white">
                  Clé USB avec droit de reproduction
                  (Accès au tarif des tirages numérique)
                  (Couple, mairie, cérémonie, groupe, vin d'honneur, décoration).
                </p>
                <span>
                  Prix: 890€
                </span>
            </motion.div>

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <span className="text-6xl relative text-gray-900">02</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Numérique Prestige</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
            >
                <p className=" text-white">
                  Clé USB avec droit de reproduction
                  (Accès au tarif des tirages numérique)
                  (Préparatifs, couple, mairie, cérémonie, groupe, vin d'honneur, décoration, soirée).
                </p>
                <span>
                  Prix: 1290€
                </span>
            </motion.div>

            <motion.div className="mt-8 "
                        initial={{ opacity: 0, x: 100}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
              <p className="mb-8">
                Contactez moi pour plus de renseignements et voir les différentes options :
                clé USB, album parents, tirage photo, shooting studio, location vidéo projecteur, location écran géant gonflable, séance engagement, trash the dress...
              </p>
              <Link href="https://www.mariages.net/photo-mariage/kevin-abelard-photographe--e260865">
                <Image 
                  src={BadgeWedding}
                  alt="image"
                  width={250}
                  height={250}
                />
              </Link>
            </motion.div>

        </div>
      </div>
    </section>
  )
}