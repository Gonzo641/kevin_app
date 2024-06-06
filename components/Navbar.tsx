// "use client";

// import { motion } from "framer-motion";


// export default function Navbar() {
//   return (
//     <header className="z-[999] relative">
//       <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full 
//         rounded-none border border-white border-opacity-40 
//         bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] 
//         backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
//         sm:rounded-full">

//       </div>
//     </header>
//   )
// }

"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] 
      w-full rounded-none sm:h-[3.25rem]">
      </div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <motion.ul className="flex w-[21rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ ease: 'linear', duration: 0.8 }}
        >
          {
            links.map(link => (
              <li className="h-3/4 flex items-center justify-center relative"
                         key={link.hash}
              >
                <Link className="flex w-full items-center justify-center px-3 py-3 text-[#8c705a] font-sans hover:text-gray-500 transition text-sm xl:text-base"
                      href={`/${link.hash}`}
                >
                  {
                    link.name
                  }
                </Link>
              </li>
            ))
          }

          <Link className="flex items-center justify-center px-3 py-3 text-[#8c705a] font-sans hover:text-gray-500 transition text-sm xl:text-base"
                href="https://www.jingoo.com/infos/acces.php/4842833">
            Albums Clients
          </Link>
          <Link className="flex items-center justify-center px-3 py-3 text-[#8c705a] font-sans hover:text-gray-500 transition text-sm xl:text-base"
                href="/online-store">
            Boutique
          </Link>
        </motion.ul>
      </nav>

    </header>
  )
}