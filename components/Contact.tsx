"use client";

import { motion } from 'framer-motion'
import { toast } from "react-hot-toast";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

import SubmitBtn from './SubmitBtn';
import { sendEmail } from '@/actions/sendEmail';


export default function Contact() {
  return (
    <section id='contact' className='py-12 w[min(100%,38rem)] scroll-mt-20'>
        <div className='xl:w-full max-w-[1400px] mx-auto px-8'>
          <div className='flex justify-center pb-2'>
              <motion.h3 className='text-4xl text-white'
                         initial={{ opacity: 0, y: 100}}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{
                            once: true,
                            }}
                         transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                         }}
              >
                Me contacter
              </motion.h3>
          </div>
          <div className='flex justify-center pb-8'>
            <motion.div className="md:w-[50px] w-[20px] h-[2px] bg-white" 
                          initial={{ opacity: 0, y: 100}}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
              />
          </div>
          <motion.div className='flex justify-center gap-4 pb-4'
                      initial={{ opacity: 0, y: 100}}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: true,
                        }}
                      transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
          >
            <a href="https://www.facebook.com/kevinabelardpro"
               target='_blank'
               className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/kevinabelardpro/"
               target='_blank'
               className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'>
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCsfw_ib5v3X-v-3FhgAADaQ"
               target='_blank'
               className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'>
              <FaYoutube />
            </a>
            <a href="https://vimeo.com/kevinabelard"
               target='_blank'
               className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'>
              <FaVimeoV />
            </a>
            <a href="https://www.pinterest.fr/kevinabelardpro/_saved/"
               target='_blank'
               className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'>
              <FaPinterestP />
            </a>
          </motion.div>
          <div className='flex justify-center'>
              <motion.span className=' text-white'
                         initial={{ opacity: 0, y: 100}}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{
                            once: true,
                            }}
                         transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                         }}
              >
                Tel: 06.05.04.03.02
              </motion.span>
          </div>
            <div className="flex justify-center">
              <motion.p 
              className='max-w-lg pb-4 text-center text-white'
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                  once: true,
                  }}
              transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0, 0.71, 0.2, 1.01]
              }}
              >
                  Par e-mail à{" "} 
                  <a className="underline" href="mailto:test@gmail.com">
                  test@gmail.com
                  </a>{" "}
                  ou via ce formulaire :
              </motion.p>
            </div>
            <form 
              className="mt-10 flex flex-col dark:text-black lg:px-56 xl:px-96 gap-2"
              action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                      toast.error(error);
                      return;
                  }

                  toast.success("Email envoyé !")
              }}    
          >
              <input 
                  className="h-14 px-4 rounded-lg border border-gray-500
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="senderName" 
                  type="name"
                  required
                  maxLength={500}
                  placeholder="Prénom" 
              />
              <input 
                  className="h-14 px-4 rounded-lg border border-gray-500
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="senderEmail" 
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Votre email" 
              />
              <input 
                  className="h-14 px-4 rounded-lg border border-gray-500
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="senderObject" 
                  type="object"
                  required
                  maxLength={500}
                  placeholder="Objet" 
              />
              <textarea 
                  className="h-52 my-3 rounded-lg border border-gray-500 p-4
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="message"
                  placeholder="Votre message"
                  required
                  maxLength={5000} 
          />
          <SubmitBtn />
          </form>
          {/* <motion.h3 
            className='max-w-lg text-3xl mt-12 text-white'
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                }}
            transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
         >
          Actualité et liens :
        </motion.h3>
        <div>
          <motion.p 
            className='max-w-lg mt-4 mb-2 text-white'
            initial={{ opacity: 0, y: 100}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Suivez moi sur Instagram et Facebook
          </motion.p>

          <motion.div 
              className='flex gap-2'
              initial={{ opacity: 0, y: 100}}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
            <a 
              href="https://www.instagram.com" 
              target="_blank"
              className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'
            >
            <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank"
              className='text-xl hover:scale-[1.15] transition text-white hover:text-gray-400'
            >
            <FaFacebook />
            </a>
          </motion.div>

        </div> */}
        </div>
    </section>
  )
}