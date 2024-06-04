"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import entreprise1 from "@/public/images/prestations/entreprise/entreprise1.png";
import { ButtonOrder } from "@/components/ButtonOrder";


export default function EntreprisePage() {
  return (
    <section className="flex flex-col sm:px-28 px-4 text-white mt-32 gap-4">
      <motion.div initial={{ opacity: 0, y: 100}}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
      >
        <div className="text-center">
          <h3 className="sm:text-7xl text-5xl uppercase pb-8 font-sans">
            entreprise
          </h3>
          <p className="text-lg font-bold">
            Mettre en valeur votre entreprise, votre équipe et votre savoir faire.
          </p>
          <p className="text-lg">
            En fonction des besoins de votre entreprises, différentes formules sont proposées.
          </p>
          <p className="text-lg font-bold text-kev">
            Toutes vos photos seront délivrés numériquement avec les droits de reproduction illimités afin 
            d'avoir le plein pouvoir sur votre communication.
          </p>
        </div>
        <div className="text-center mt-6">
          <span className="text-xl">
            Voici les différentes formules:
          </span>
        </div>
        </motion.div>

{/* -------------------------------------------Card------------------------------------------------------ */}
        <motion.div className="flex items-center justify-center mt-10 mb-6 xl:w-[89rem] xl:h-[25rem] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="relative flex items-center justify-center hover:scale-95 transition duration-500">
            <Image src={entreprise1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Shooting 30 min + 6 photos numérique</span>
            <p className="lg:text-xl text-sm">
              Le shooting comprend une prise de vue de 30min<br/> avec 6 photos numériques et les droits de reproduction illimités.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 100€
            </span>
          </div>
        </motion.div>
{/* -------------------------------------------Card------------------------------------------------------ */}

        <motion.div className="flex items-center justify-center mt-10 mb-6 xl:w-[89rem] xl:h-[25rem] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="relative flex items-center justify-center hover:scale-95 transition duration-500">
            <Image src={entreprise1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Shooting 1h + 12 photos numérique</span>
            <p className="lg:text-xl text-sm">
              Le shooting comprend une prise de vue de 1h<br/> avec 12 photos numériques et les droits de reproduction illimités.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 190€
            </span>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-center mt-10 mb-6 xl:w-[89rem] xl:h-[25rem] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="relative flex items-center justify-center hover:scale-95 transition duration-500">
            <Image src={entreprise1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Shooting 1h + numérique</span>
            <p className="lg:text-xl text-sm">
              Le shooting comprend une prise de vue de 1h <br /> avec toutes les photos numériques, triées, retouchées et les droits de reproduction illimités.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 250€
            </span>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-center mt-10 mb-20 xl:w-[89rem] xl:h-[25rem] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="relative flex items-center justify-center hover:scale-95 transition duration-500">
            <Image src={entreprise1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Shooting 1/2 journée + numérique</span>
            <p className="lg:text-xl text-sm">
              Le shooting comprend 1/2 journée de prise de vue<br />
              avec, le déplacement, toute la série triée, retouchée et livrée <br />
              numériquement avec les droits de reproduction illimités.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 750€
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center ">
          <p>
            Vous pouvez commander le shooting de votre choix.
            Il sera livré à votre domicile sous forme de chèque cadeau.
          </p>
          <ButtonOrder />
        </div>
    </section>
  )
}