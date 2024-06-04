"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import immobilier1 from "@/public/images/prestations/immobilier/immobilier1.png";
import { ButtonOrder } from "@/components/ButtonOrder";


export default function ImmobilierPage() {
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
            immobilier
          </h3>
          <p className="text-lg">
            Pour les professionnelles et particuliers, 
            des prises de vue de détail et grand angle pour un maximum d'informations sur une seule photo.
          </p>
          <p className="text-lg pt-6">
            Je saurai mettre en avant votre bien immobilier.
          </p>
          <p className="text-lg">
            Prise de vue immobilière à <span className="font-bold text-kev">seulement 100€</span> 
          </p>
          <p className="text-lg pt-6">
            1 heure de prestation sur place avec déplacement et toute la série triée, retouchée et livrée numériquement.
          </p>
        </div>
        </motion.div>

        <motion.div className="flex items-center justify-center mt-10 mb-24 xl:w-[89rem] xl:h-[25rem] overflow-hidden rounded-xl"
                    initial={{ opacity: 0, x: 100}}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="relative flex items-center justify-center hover:scale-95 transition duration-500">
            <Image src={immobilier1} alt="image" className=" object-cover"/>
          </div>
          {/* <div className="flex flex-col absolute p-10 gap-2">
            <span className="mt-1 sm:text-2xl lg:text-4xl text-base font-bold font-sans text-white">Shooting 30 min + 6 photos numérique</span>
            <p className="lg:text-xl text-sm">
              Le shooting comprend une prise de vue de 30min<br/> avec 6 photos téléchargeables sur votre galerie privée.
            </p>
            <span className="lg:text-xl text-sm font-bold font-sans">
              Prix : 100€
            </span>
          </div> */}
        </motion.div>
    </section>
  )
}