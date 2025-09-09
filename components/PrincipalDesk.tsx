"use client"
import { motion } from "motion/react"

const PrincipalDesk = () => {
  return (
    <section id="principal" className="py-20 bg-[#6D9EEE]">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">
            From the Desk of the Principal
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-in macbook-scroll"
        >
          {/* Principal’s Words */}
          <div className="space-y-6 relative">
            {/* Decorative Quote */}
            <span className="text-8xl text-white/80 font-serif absolute -top-12 -left-6 select-none">“</span>

            <p className="italic font-serif font-semibold text-lg leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>

            {/* Signature */}
            <div className="mt-8 text-right">
            <p className="font-extrabold text-1xl text-[#194272]">Mr. K Gopinath Menon</p>
            <p className="text-sm text-2xl text-[#ffffff]">Principal</p>
            <p className="text-sm text-2xl text-[#ffffff]">New Indian School Bahrain</p>
            </div>
          </div>

          {/* Principal’s Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#194272] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
              <img
                src="/K GOPI.jpg"
                alt="Principal"
                className="relative w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 max-w-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PrincipalDesk
