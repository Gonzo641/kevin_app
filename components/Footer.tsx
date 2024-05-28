import { Separator } from "./ui/separator"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="pb-10">
        <Separator className='w-full bg-white' />
        <div className="mx-auto pt-10 flex flex-col sm:flex-row justify-center items-center gap-2">
            <p className=" text-base pb-4 sm:pb-2 text-white">
                &copy; 2024 Abélard Kévin. All rights reserved.
            </p>
        </div>
        <div className="flex justify-center items-center mt-2 sm:mt-0">
          <p className=" text-base pb-4 sm:pb-2 text-white">
              Website by <Link href="https://jonathan-portfolio-sage.vercel.app/" className="hover:text-[#0a98a7]">Jonathan Gonzales</Link>
          </p>
        </div>
    </footer>
  )
}
export default Footer