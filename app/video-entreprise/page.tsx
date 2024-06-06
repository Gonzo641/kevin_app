"use client";

import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import PolygonBackground from '@/components/PolygonBackground';

export default function VideoEntreprisePage() {
  const videoIds = ['76RXyB2ncqQ', 'v_voqJVdZq0','YR-uGwDhSvU', '9BK_1wuAsxo'];


  return (
    <section className='mt-10'>
      <PolygonBackground />
      <div className="grid xl:grid-cols-2 grid-cols-1 rounded-lg pt-20 pb-20 2xl:px-40 px-10 gap-2">
        <div className='flex flex-col gap-4'>
          {videoIds.map((videoId) => (
            <div key={videoId}>
              <YouTube
                videoId={videoId}
                opts={{
                  playerVars: {
                    autoplay: 0,
                    controls: 1,
                    rel: 0,
                    showinfo: 0,
                  },
                }}
              />
            </div>
          ))}
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
              Entreprise
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
              Mettre en valeur votre entreprise, votre équipe et votre savoir faire.
            </p>
            <p>
              En fonction des besoins de votre entreprises, différentes formules sont proposées.
            </p>
            <p>
              Afin d'avoir une vidéo qui vous ressemble, le projet sera coconstruit en amont.
            </p>
            <p className='font-semibold'>
              Voici les différentes formules:
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
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Vidéo d'1h</span>
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
                  Le shooting comprend 1h de prise de vue avec, le déplacement et le montage.
                </p>
                <span className='font-semibold'>
                  Prix: 350€
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
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Vidéo 1/2 journée</span>
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
                Le shooting comprend 1/2 journée de prise de vue avec, le déplacement et le montage.
              </p>
              <span>
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
                <span className="text-6xl relative text-gray-900">03</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Vidéo journée complète</span>
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
                  Le shooting comprend 1 journée de prise de vue avec, le déplacement et le montage.
                </p>
                <span>
                  Prix: 1790€
                </span>
            </motion.div>

        </div>
      </div>
    </section>
  )
}