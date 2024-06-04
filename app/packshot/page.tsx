"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import packshot1 from "@/public/images/prestations/packshot/packshot1.png";
import { ButtonOrder } from "@/components/ButtonOrder";


export default function PackshotPage() {
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
            packshot
          </h3>
          <p className="text-lg font-bold">
            Mettre en valeur vos produits et votre savoir faire.
          </p>
          <p className="text-lg">
            En fonction des besoins de votre entreprises, différentes formules sont proposées.
          </p>
          <p className="text-lg font-bold text-kev">
            Je suis attentif à vos demandes et je serait mettre en avant vos produits et votre savoir faire.
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
            <Image src={packshot1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Packshot bouteille</span>
            <p className="lg:text-xl text-sm">
              Le packshot bouteille comprend une prise de vue ainsi que le cliché numérique avec les droits de reproduction illimités.<br />
              Chaque bouteille sera livrée avec deux versions, une en JPG et une détourée au format PNG.<br />
              Profiter de la remise de 10% à partir de 10 bouteilles.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 19€/unité
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
            <Image src={packshot1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Packshot produit 1h</span>
            <p className="lg:text-xl text-sm">
              Le packshot produit comprend la prise de vue et la retouche des images.<br/>
              les Images seront sur un fond uni de votre choix.
              Vos produits peuvent être pris en photo seul ou en composition<br/>
              Chaque fichier choisi en version numérique sera facturé
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              8€ unité
            </span>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 55€
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
            <Image src={packshot1} alt="image" className=" object-cover"/>
          </div>
          <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Packshot produit 1h + clichés numériques</span>
            <p className="lg:text-xl text-sm">
              Le packshot produit comprend la prise de vue et la retouche des images ainsi que toutes les photos<br/>
              délivrées numériquement avec les droits de reproduction illimités.<br/>
              Les Images seront sur un fond uni de votre choix.<br/>
              Vos produits peuvent être pris en photo seul ou en composition.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 250€
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