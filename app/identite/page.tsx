"use client";

import { motion } from 'framer-motion';
import { BsDot } from "react-icons/bs";
import Image from 'next/image';

import identite1 from "@/public/images/prestations/identite/identite1.png";
import PolygonBackground from '@/components/PolygonBackground';


export default function IdentitePage() {
  return (
    <section className='mt-14 mb-20'>
      <PolygonBackground />
      <div className="grid xl:grid-cols-2 grid-cols-1 rounded-lg pt-20 pb-20 2xl:px-[18rem] px-10 gap-2">


        <div className='flex flex-col'>
          <Image src={identite1} alt='image' />
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
            <h2 className="text-4xl text-white uppercase">  
              identité à domicile
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
              Vous manquez de temps ou vous n'avez pas la possibilité de vous déplacer.
            </p>
            <p>
            Je viens au domicile ou sur votre lieu de travail réaliser des photo d'identités, <br />
            pour carte d'identité, passeport, carte vitale, CV...
            </p>
            <p>
              Les photos vous seront envoyées par courrier à votre domicile.
            </p>
            <p>
              Déplacement à 25€
            </p>
            <div className='flex items-center'>
              <BsDot />
              <p>
                4 photos 8€
              </p>
            </div>
            <div className='flex items-center'>
              <BsDot />
              <p>
                6 photos 9€
              </p>
            </div>
            <div className='flex items-center'>
              <BsDot />
              <p>
                8 photos 11€
              </p>
            </div>
          </motion.div>          
        </div>
      </div>
    </section>
  )
}