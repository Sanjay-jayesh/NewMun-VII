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
          viewport={{ once: false, amount: 0.3 }} // allow repeat
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">
            From the Desk of the Principal
          </h2>
        </motion.div>

        {/* Content */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} // repeatable
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-in"
          >
            {/* Principal’s Words */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 relative"
            >
              {/* Decorative Quote */}
              <span className="text-8xl text-white/80 font-serif absolute -top-12 -left-6 select-none">“</span>

              <p className="italic font-serif font-semibold text-lg leading-relaxed text-white">
                Dear Delegates, Faculty and Readers,
                <br /><br />
                It is with immense admiration that I extend my warmest greetings to all participants of this year’s 
                (2025) School Model United Nations. Watching our student’s step into the roles of diplomats, negotiators, 
                and changemakers fills me with hope for the future.
                <br />
                MUN is more than an academic exercise—it is a powerful platform where young minds engage with global challenges,
                practice empathy, and learn the art of respectful dialogue. In a world that often feels divided, your commitment 
                to collaboration and understanding is a beacon of possibility.
                <br />
                To every delegate who research tirelessly, debate passionately, and listen deeply: you are already shaping the world.
                May this experience ignite a lifelong passion for leadership, justice, and peace.
                <br /><br />
                Thanks
              </p>

              {/* Signature */}
              <div className="mt-8 text-right">
                <p className="font-extrabold text-2xl text-[#194272]">Mr. Kollath Gopinath Menon</p>
                <p className="font-extrabold text-xl text-[#194272]">Principal</p>
              </div>
            </motion.div>

            {/* Principal’s Photo */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group w-full max-w-md lg:max-w-lg">
                {/* Decorative Background Box */}
                <div className="absolute inset-0 bg-[#194272] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>

                {/* Principal Image */}
                <img
                  src="/Principal.jpg"
                  alt="Principal"
                  className="relative w-full h-auto object-contain rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalDesk
