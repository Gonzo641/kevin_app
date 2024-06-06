"use client";

import { motion } from 'framer-motion';
import CarouselScolaire from "@/components/CarouselScolaire";
import { BsDot } from "react-icons/bs";
import PolygonBackground from '@/components/PolygonBackground';


export default function ScolairePage() {
  return (
    <section className='mt-10 mb-20'>
      <PolygonBackground />
      <div className="grid xl:grid-cols-2 grid-cols-1 rounded-lg pt-20 pb-20 2xl:px-40 px-10 gap-2">


        <div className='flex flex-col gap-4'>
          <CarouselScolaire />
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
              Scolaire
            </h2>
            <div className="w-[20px] h-[2px] bg-white" />
          </motion.div>

          <motion.div className='flex flex-col gap-4 pt-8'
                      initial={{ opacity: 0, x: 100}}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                          duration: 0.8,
                          delay: 0.8,
                          ease: [0, 0.71, 0.2, 1.01]
                      }}
          >
            <p className="font-bold text-kev">
              Des photos scolaires de qualité et originales.
            </p>
            <p>
              Prises de vues avec des torches de studio professionnelles pour une qualité<br/> 
              optimale et un rendu supérieur à la simple photo scolaire
            </p>
            <p>
              J'interviens dans les crèches, les écoles maternelles, élémentaires, collèges et lycées.
            </p>
            <p>
              Afin d'être réactif, les photos sont tirées dans le Tarn.
            </p>
            <p>
              Deux modes de gestions des commandes :
            </p>
            <div className='flex items-center'>
              <BsDot />
              <p>
                L'établissement gère les commandes et les paiements
              </p>
            </div>
            <div className='flex items-center'>
              <BsDot />
              <p>
              Les parents commandent et paient via internet (avec code sécurisé par élève)
              </p>
            </div>
            <p className='font-semibold font-sans'>
              Pour plus d'informations contacter moi.
            </p>
          </motion.div>          
        </div>
      </div>
    </section>
  )
}