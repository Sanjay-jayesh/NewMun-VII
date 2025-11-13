"use client"

import { motion } from "motion/react"
import { ArrowDown, FileText, Image } from "lucide-react"

type Resource = {
  name: string
  file: string
  type: "pdf" | "image"
}

const Resources = () => {
  const resources: Resource[] = [
    // { name: "Chair's Handbook", file: "/pdfs/Chair_Handbook.pdf", type: "pdf" },
    // { name: "Delegate's Handbook", file: "/pdfs/Chair_Handbook.pdf", type: "pdf" },
    { name: "Senior Delegate Allocation", file: "/pdfs/SeniorDelegateAllocations.pdf", type: "pdf" },
    { name: "Junior Delegate Allocation", file: "/pdfs/JuniorDelegateAllocations.pdf", type: "pdf" },
    // { name: "Rules of Procedures", file: "/pdfs/RulesOfProcedure.pdf", type: "pdf" },
    { name: "Itinerary", file: "/pdfs/Itinerary.pdf", type: "pdf" },
    { name: "Download NewMUN Logo", file: "NewMUN.png", type: "image" },
  ]

  return (
    <section id="resources" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl font-bold mb-6 text-[#194272]">Resources</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Download and refer our handbooks, logo, and other important documents.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, index) => (
            <motion.div
              key={res.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <a
                href={res.file}
                {...(res.type === "image" ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                className="w-full py-4 px-6 bg-[#194272] text-white font-semibold rounded-full hover:bg-[#15325a] 
                          transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-md"
              >
                {res.type === "pdf" ? (
                  <FileText className="w-5 h-5" />
                ) : (
                  <Image className="w-5 h-5" />
                )}
                <span>{res.name}</span>
                <ArrowDown className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
