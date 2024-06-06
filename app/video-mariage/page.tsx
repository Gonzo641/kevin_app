"use client";

import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import MariageNet from '@/public/images/mariageNet.png';
import PolygonBackground from '@/components/PolygonBackground';

const VideoMariagePage = () => {
  const videoIds = ['VwwC0kByjAM', 'RLM0N3FhBUU'];

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
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
          >
            <h2 className="text-4xl text-white ">  
              Vidéo Mariage
            </h2>
            <div className="w-[20px] h-[2px] bg-white" />
          </motion.div>

          <motion.div className='flex flex-col gap-2 pt-8'
                      initial={{ opacity: 0, x: 100}}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{
                          once: true,
                          }}
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
              Toutes les formules comprennent la prise de vue, le déplacement et le montage vidéo.
            </p>
            <p className='font-semibold'>
              Voici les différentes formules vidéo:
            </p>
          </motion.div>          

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
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
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
            >
                <div className=" text-white flex flex-col gap-2">
                  <span className='text-base'>Demi-Journée de prise de vue</span>
                  <span className='text-base'>Montage Max 10 min avec musique sur clé USB</span>
                  <span className='text-sm'>couple, mairie, cérémonie, groupes, vin d'honneur, déco.</span>
                  <span>
                    Prix: 1100€
                  </span>
                </div>
            </motion.div>

          <motion.div className="flex items-center mt-10"
                        initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
            >
                <span className="text-6xl relative text-gray-900">02</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Préstige</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-4'
            >
                <div className=" text-white flex flex-col gap-2">
                  <span className='text-base'>Journée complète de prise de vue</span>
                  <span className='text-base'>Montage Max 15 min avec musique sur clé USB</span>
                  <span className='text-sm'>préparatif, couple, mairie, cérémonie, groupes, vin d'honneur, déco, soirée</span>
                  <span>
                    Prix: 1790€
                  </span>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 100}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{
                            once: true,
                            }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className='flex flex-col gap-8 pt-10'
            >
                <p className=" text-white">
                  Contactez moi pour plus de renseignements et voir les différentes options :
                  location vidéo projecteur, location écran géant gonflable, séance engagement, trash the dress...
                </p>
                <Link href="https://www.mariages.net/">
                  <Image src={MariageNet} alt='img' />
                </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoMariagePage;
