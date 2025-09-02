"use client"
import { motion } from "motion/react"
import { Users, Target, Lightbulb, Heart, ArrowRight, Crown, Star } from "lucide-react"
import { useState } from "react"

const CouncilsSection = () => {
  const [activeTab, setActiveTab] = useState<"senior" | "junior">("senior")

  const seniorCouncils = [
    {
      name: "United Nations Security Councils",
      description:
        (
        <>
        ● South China Sea Issue <br />
        ● Myanmar Issue
        </>
      ),
      icon: ArrowRight,
      members: 15,
      projects: 8,
      image: "/UNSC.png?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "United Nations Development Program",
      description:
        (
        <>
        ● Advancing gender equality through economic empowerment <br />
        ● Youth employment and skill development in the digital economy
        </>
      ),
      icon: ArrowRight,
      members: 12,
      projects: 6,
      image: "/UNDP.png?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "European Union",
      description:
        (
        <>
        ● Freedom of the Press and Civil Society in the EU <br />
        ● Extension of EU into the Balkaans
        </>
      ),
      icon: ArrowRight,
      members: 18,
      projects: 10,
      image: "/European Union.png?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "Lok Sabha",
      description:
        (
        <>
        ● Narcotics Among Youth and the Involvement of Pharmaceuticals <br />
        ● Border Security and Prevention of Attacks
        </>
      ),
      icon: ArrowRight,
      members: 20,
      projects: 12,
      image: "/Lok_Sabha.svg?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "United Nations Office for Outer Space Affairs",
      description:
        (
        <>
        ● Columbia Space Shuttle Disaster 2003 <br />
        ● Ethical Concerns on Space Law and Governance
        </>
      ),
      icon: ArrowRight,
      members: 20,
      projects: 12,
      image: "/UNOOSA.png?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "International Monetary Fund",
      description:
        (
        <>
        ● The COVID-19 Economic Crisis (2020-2021)<br />
        ● Crime in the world of Cryptocurrency
        </>
      ),
      icon: ArrowRight,
      members: 20,
      projects: 12,
      image: "/IMF.png?height=300&width=400",
      requirements: "Grades 9-12",
    },
    {
      name: "Fédération Internationale de l'Automobile",
      description:
        (
        <>
        ● Standardization VS Innovation: Freedom of Team in Car Design <br />
        ● San Marino Grand Prix 1994
        </>
      ),
      icon: Crown,
      members: 20,
      projects: 12,
      image: "/FIA.png?height=300&width=400",
      requirements: "Grades 9-12",
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
      icon: ArrowRight,
      members: 25,
      projects: 6,
      image: "/UNESCO.png?height=300&width=400",
      requirements: "Grades 6-8",
    },
    {
      name: "United Nations Environment Programme",
      description: (
        <>
        ● Air Quality and Public Health<br />
        ● Sustainable Ocean Management
        </>
      ),
      icon: ArrowRight,
      members: 20,
      projects: 4,
      image: "/UNEP.jpg?height=300&width=400",
      requirements: "Grades 6-8",
    },
    {
      name: "World Health Organization",
      description: (
        <>
        ● Universal Health Coverage <br />
        ● Tackling Non-Communicable Diseases
        </>
      ),
      icon: ArrowRight,
      members: 22,
      projects: 8,
      image: "/WHO.png?height=300&width=400",
      requirements: "Grades 6-8",
    },
  ]

  const activeCouncils = activeTab === "senior" ? seniorCouncils : juniorCouncils

  return (
    <section id="councils" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">Our Councils</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={council.image || "/placeholder.svg"}
                    alt={council.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#194272]/10 group-hover:bg-[#194272]/5 transition-colors duration-300" />

                  {/* Icon Overlay */}
                  {/* <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-[#194272]/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <council.icon className="w-8 h-8 text-white" />
                    </div>
                  </div> */}

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

                {/* Content Section */}
                <div className="p-8">
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

                  {/* Stats 
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#194272]">{council.members}</div>
                      <div className="text-sm text-gray-500">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#194272]">{council.projects}</div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#194272]">100%</div>
                      <div className="text-sm text-gray-500">Engagement</div>
                    </div>
                  </div> */}

                  <button className="w-full py-3 bg-[#194272] text-white font-semibold rounded-full hover:bg-[#15325a] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center fade-in"
        >
          <div className="bg-[#194272] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Council Impact Across All Levels</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Total Active Members" },
                { number: "64", label: "Projects Completed" },
                { number: "15", label: "Community Partners" },
                { number: "100%", label: "Student Satisfaction" },
              ].map((stat, index) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div> 
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default CouncilsSection
