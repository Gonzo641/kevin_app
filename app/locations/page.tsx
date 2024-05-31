"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Projecteur from "@/public/images/video-proj.png";
import EcranGeant from "@/public/images/ecran-geant.png";
import SectionHeading from "@/components/SectionHeading";

export default function page() {
  return (
    <section>
      <SectionHeading>Locations</SectionHeading>
      <div className="grid xl:grid-cols-2 grid-cols-1 rounded-lg pt-20 pb-20 2xl:px-80 px-10 gap-2">
        <motion.div className="bg-white flex flex-col rounded-xl p-10 gap-2 text-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-semibold text-2xl">
              Vidéoprojecteur Acer 4000 lumens
            </h3>
            <Image src={Projecteur} alt="image" className="w-44" />
          </div>
          <p>
            <span className="font-semibold">Vidéoprojecteur Acer</span> parfait pour vos soirées privées, mariage, anniversaire, soirée cinéma entre amis ou réunion d'entreprise...
          </p>
          <p>
            Le projecteur possède une puissance de 4000 lumens permettant de projeter à une distance de 10m et pas forcement dans l'obscurité.
          </p>
          <p>
            Qualité d'image Haute définition.
            Prise HDMI, VGA, RS232, USB, VIDEO, AUDIO IN, AUDIO OUT.
            Il est possible de connecter sans fil votre téléphone, tablette ou ordinateur au vidéo projecteur.
          </p>
          <p className="font-semibold">
            Prix de la location Weekend 69€ 
          </p>
        </motion.div>
        
        <motion.div className="bg-white flex flex-col rounded-xl p-10 gap-2 text-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}        
        >
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-semibold text-2xl">
              Écran de vidéoprojection XXL gonflable
            </h3>
            <Image src={EcranGeant} alt="image" className="w-44" />
          </div>
          <p>
            <span className="font-semibold">Écran de projection géant gonflable</span> parfait pour vos soirées privées, mariage, anniversaire, soirée cinéma entre amis ou réunion d'entreprise...
          </p>
          <p>
            L'écran géant ce gonfle en moins de 10 secondes grâce à son gonfleur ultra puissant.
          </p>
          <p>
            Taille de l'écran: 2,43m de haut par 3,95m de large.
            Taille total: 3,25m de haut par 4,85m de large et 2m de profondeur
          </p>
          <p>
            La toile permet de projeter par l'avant mais aussi par l'arrière de la toile.
          </p>
          <p className="font-semibold">
            Prix de la location Weekend 119€ 
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center items-center mb-20 text-center px-6 lg:px-0">
        <span className="text-white text-xl">
          REMISE: Si vous cumuler les deux locations, bénéficiez du pack projection pour seulement 150€ le weekend.
        </span>
      </div>
    </section>
  )
}