"use client"

import { motion } from "motion/react"
import { ArrowRight, Crown, Star } from "lucide-react"
import { useState } from "react"

const CouncilsSection = () => {
  const [activeTab, setActiveTab] = useState<"senior" | "junior">("senior")

  const seniorCouncils = [
    {
      name: "United Nations Security Council",
      description: (
        <>
          ● The Impact of Climate Change on International Peace and Security <br />
          ● Protecting Children in Armed Conflict
        </>
      ),
      image: "/UNSC.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "European Union",
      description: (
        <>
          ● Modernising the GDPR: Safeguarding Data Privacy in the Age of AI and Emerging Technologies <br />
          ● Promoting Green Technology and Sustainable Innovation in the European Union
        </>
      ),
      image: "/EU.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "United Nations Office for Outer Space Affairs",
      description: (
        <>
          ● Ethical Concerns of Human Settlement on Other Planets <br />
          ● Ethical Concerns on Space Law and Governance
        </>
      ),
      image: "/UNOOSA.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "United Nations Development Program",
      description: (
        <>
          ● Advancing gender equality through economic empowerment <br />
          ● Youth employment and skill development in the digital economy
        </>
      ),
      image: "/UNDP.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "International Monetary Fund",
      description: (
        <>
          ● The COVID-19 Economic Crisis (2020–2021) <br />
          ● Crime in the world of Cryptocurrency
        </>
      ),
      image: "/IMF.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "Lok Sabha",
      description: (
        <>
          ● Discussion on the Framework for Promotion and Regulation of Online Gaming in India <br />
          ● Deliberation on Implementing the National Education Policy to Enhance Quality and Accessibility of Education
        </>
      ),
      image: "/Lok_Sabha.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "Fictional Crisis Committee",
      description: (
        <>
          ● The COVID-19 Economic Crisis (2020–2021) <br />
          ● Crime in the world of Cryptocurrency
        </>
      ),
      image: "/IMF.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
    {
      name: "Fédération Internationale de l'Automobile",
      description: (
        <>
          ● Standardization VS Innovation: Freedom of Teams in Car Design <br />
          ● San Marino Grand Prix 1994
        </>
      ),
      image: "/FIA.png?height=300&width=400",
      requirements: "Grades 8-12",
    },
  ]

  const juniorCouncils = [
    {
      name: "United National Educational, Scientific Cultural Organisation",
      description: (
        <>
          ● World Heritage Sites in Danger due to Earthquakes and Natural Disasters <br />
          ● Use of Technology in Education
        </>
      ),
      image: "/UNESCO.png?height=300&width=400",
      requirements: "Grades 5-7",
    },
    {
      name: "United Nations Environment Programme",
      description: (
        <>
          ● Air Quality and Public Health<br />
          ● Sustainable Ocean Management
        </>
      ),
      image: "/UNEP.png?height=300&width=400",
      requirements: "Grades 5-7",
    },
    {
      name: "World Health Organization",
      description: (
        <>
          ● Universal Health Coverage <br />
          ● Tackling Non-Communicable Diseases
        </>
      ),
      image: "/WHO.png?height=300&width=400",
      requirements: "Grades 5-7",
    },
  ]

  const activeCouncils = activeTab === "senior" ? seniorCouncils : juniorCouncils

  return (
    <section id="councils" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-7xl font-bold mb-6 text-[#194272]">Councils</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Empowering students to lead, innovate, and make a positive impact through structured leadership opportunities at every level.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12 fade-in"
        >
          <div className="bg-gray-100 rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab("senior")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === "senior" ? "bg-[#194272] text-white shadow-lg" : "text-[#194272] hover:bg-[#194272]/10"
              }`}
            >
              <Crown className="w-5 h-5" />
              <span>Senior Council</span>
            </button>
            <button
              onClick={() => setActiveTab("junior")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === "junior" ? "bg-[#194272] text-white shadow-lg" : "text-[#194272] hover:bg-[#194272]/10"
              }`}
            >
              <Star className="w-5 h-5" />
              <span>Junior Council</span>
            </button>
          </div>
        </motion.div>

        {/* Councils Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeCouncils.map((council, index) => (
            <motion.div
              key={`${activeTab}-${council.name}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="fade-in macbook-scroll group"
            >
              <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={council.image || "/placeholder.svg"}
                    alt={council.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#194272]/10 group-hover:bg-[#194272]/5 transition-colors duration-300" />

                  {/* Level Badge */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        activeTab === "senior" ? "bg-[#194272] text-white" : "bg-white text-[#194272] border border-[#194272]"
                      }`}
                    >
                      {activeTab === "senior" ? "Senior" : "Junior"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#194272]">{council.name}</h3>
                    <ArrowRight className="w-6 h-6 text-[#194272] group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{council.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Requirements:</div>
                    <div className="text-sm text-gray-700">{council.requirements}</div>
                  </div>

                  <button className="mt-auto w-full py-3 bg-[#194272] text-white font-semibold rounded-full hover:bg-[#15325a] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CouncilsSection
