"use client"
import { motion } from "motion/react"
import { Calendar, Award, Users, BookOpen, TrendingUp } from "lucide-react"

const ArchivesSection = () => {
  const achievements = [
    {
      year: "2024",
      title: "National Science Fair Champions",
      description:
        "Our students won first place in the National Science Fair with their innovative renewable energy project, showcasing excellence in STEM education.",
      icon: Award,
      image: "/placeholder.svg?height=300&width=400",
      stats: "1st Place",
    },
    {
      year: "2021",
      title: "Digital Learning Initiative",
      description:
        "Successfully implemented cutting-edge digital learning platforms across all grade levels, enhancing educational outcomes.",
      icon: BookOpen,
      image: "/placeholder.svg?height=300&width=400",
      stats: "100% Digital",
    },
    {
      year: "2023",
      title: "Community Outreach Program",
      description:
        "Launched comprehensive community service program engaging over 500 students in meaningful social impact projects.",
      icon: Users,
      image: "/placeholder.svg?height=300&width=400",
      stats: "500+ Students",
    },
    {
      year: "2022",
      title: "Academic Excellence Recognition",
      description:
        "Received state recognition for outstanding academic programs and consistently high student achievement rates.",
      icon: TrendingUp,
      image: "/placeholder.svg?height=300&width=400",
      stats: "State Award",
    },
  ]

  return (
    <section id="archives" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">Our Legacy of Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating milestones, achievements, and the continuous journey of excellence that defines NewMUN.
          </p>
        </motion.div>

        <div className="space-y-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`fade-in macbook-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#194272] rounded-2xl flex items-center justify-center shadow-md">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#194272] uppercase tracking-wider">{achievement.year}</div>
                    <div className="text-lg font-bold text-[#194272]">{achievement.stats}</div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-[#194272]">{achievement.title}</h3>

                <p className="text-gray-600 leading-relaxed text-lg">{achievement.description}</p>

                <button className="inline-flex items-center px-6 py-3 bg-[#194272] text-white rounded-full font-semibold hover:bg-[#15325a] transition-all duration-300 transform hover:scale-105 shadow-md">
                  Learn More
                  <Calendar className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#194272] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-10"></div>
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArchivesSection
