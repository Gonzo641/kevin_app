// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Kevin from "@/public/images/Kevin_about.jpg";

// const About = () => {
//   return (
//     <section className="grid grid-cols-2 mt-20 pb-20">
//         <div className="flex justify-center items-center">
//             <Image src={Kevin} alt="img" className=" rounded-lg" />
//         </div>
//         <div className=" mr-[17rem]">
//             <h2 className="text-4xl ">
//                 À propos
//             </h2>
//             <div className="w-[20px] h-[2px] bg-black" />


//             <div className="flex items-center mt-10">
//                 <span className="text-6xl relative text-white">01</span>
//                 <span className="mt-1 text-xl absolute font-bold font-sans">Parcours</span>
//             </div>
//             <div>
//                 <p className="">
//                     Titulaire d’un diplôme de photographe métier d’art. (depuis 2012)
//                     J'ai le privilège de vivre de ma passion depuis plusieurs années et de partager des moments forts
//                     de votre vie : mariage, grossesse, naissance, le développement de votre entreprise et tant d'autres projets …
//                 </p>
//             </div>


//             <div className="flex items-center mt-10">
//                 <span className="text-6xl relative text-white">02</span>
//                 <span className="mt-1 text-xl absolute font-bold font-sans">Localité</span>
//             </div>
//             <div>
//                 <p className="">
//                     Albigeois dès ma naissance. Mes années d'expérience m'ont permis d'exercer à travers l'Europe.
//                     Attentif à vos projets personnels et professionnels où qu'ils soient.
//                 </p>
//             </div>

//             <div className="flex items-center mt-10">
//                 <span className="text-6xl relative text-white">03</span>
//                 <span className="mt-1 text-xl absolute font-bold font-sans">Photographe et vidéaste, la double casquette.</span>
//             </div>
//             <div>
//                 <p className="">
//                     Je peux réaliser tous vos projets. Dynamique et attentif aux dernières tendances du moment, je saurai vous aiguiller.
//                 </p>
//             </div>

//             <div className="flex items-center mt-10">
//                 <span className="text-6xl relative text-white">04</span>
//                 <span className="mt-1 text-xl absolute font-bold font-sans">Made In France</span>
//             </div>
//             <p className="">
//                 Attaché à l'environnement et au savoir-faire français, tous les albums, tirages ou objets 
//                 commandés sont fabriqués et réalisés en France.
//             </p>
//         </div>
//     </section>
//   )
// }
// export default About



// -----------------------------------------------------Black version-------------------------------

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Kevin from "@/public/images/Kevin_about.jpg";

const About = () => {
  return (
    <section id="apropos" className="grid xl:grid-cols-2 grid-cols-1 mt-20 pb-20 scroll-mt-28 overflow-hidden">
        <motion.div className="flex justify-center items-center"
                    initial={{ opacity: 0, x: -100}}
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
            <Image src={Kevin} alt="img" className=" rounded-lg" />
        </motion.div>
        <div className="xl:mr-[17rem] pt-6 xl:pt-0 px-14 xl:px-0">
            <motion.div initial={{ opacity: 0, x: 100}}
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
                <h2 className="text-4xl text-white ">
                    À propos
                </h2>
                <div className="w-[20px] h-[2px] bg-white" />
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
                <span className="text-6xl relative text-gray-400">01</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Parcours</span>
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
            >
                <p className=" text-white">
                    Titulaire d’un diplôme de photographe métier d’art. (depuis 2012)
                    J'ai le privilège de vivre de ma passion depuis plusieurs années et de partager des moments forts
                    de votre vie : mariage, grossesse, naissance, le développement de votre entreprise et tant d'autres projets …
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
                <span className="text-6xl relative text-gray-400">02</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Localité</span>
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
            >
                <p className=" text-white">
                    Albigeois dès ma naissance. Mes années d'expérience m'ont permis d'exercer à travers l'Europe.
                    Attentif à vos projets personnels et professionnels où qu'ils soient.
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
                <span className="text-6xl relative text-gray-400">03</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Photographe et vidéaste, la double casquette.</span>
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
            >
                <p className=" text-white">
                    Je peux réaliser tous vos projets. Dynamique et attentif aux dernières tendances du moment, je saurai vous aiguiller.
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
                <span className="text-6xl relative text-gray-400">04</span>
                <span className="mt-1 text-xl absolute font-bold font-sans text-white">Made In France</span>
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
            >
                <p className=" text-white">
                    Attaché à l'environnement et au savoir-faire français, tous les albums, tirages ou objets 
                    commandés sont fabriqués et réalisés en France.
                </p>
            </motion.div>
        </div>
    </section>
  )
}
export default About