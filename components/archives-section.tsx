"use client"
import { motion } from "motion/react"
import { Calendar, Award, Users, BookOpen, TrendingUp } from "lucide-react"

const ArchivesSection = () => {
  const achievements = [
    {
      year: "2024",
      title: "Smile Foundation",
      description:
        "In a collective effort to support a noble cause, our students contributed a proportion of funds, which were pooled together and donated to The Smile Foundation. This initiative reflects the values of compassion and social responsibility that our school community upholds.",
      // icon: Award,
      image: "/grppic.jpg?height=300&width=400",
      stats: "",
      link: "https://drive.google.com/drive/folders/13E62BnK0KSN0KAMmu_nP8uw_SJE2nbQV?fbclid=PAZXh0bgNhZW0CMTEAAaf6zcQK1wgrn8nNrxlGXCWb6hMdN04XJuQSZSisiDPKN9n0-9b9mgmZTTyb-A_aem_3K1LFMVE5Il7dUkxvBt9NA",
    },
    // {
    //   year: "2023",
    //   title: "Meet the Ex-OC Team",
    //   description:
    //     "Take a step into the past, and meet our Organising Committee who sailed you through NewMUN",
    //   // icon: BookOpen,
    //   image: "/placeholder.svg?height=300&width=400",
    //   stats: "",
    // },
    // {
    //   year: "2022",
    //   title: "Community Outreach Program",
    //   description:
    //     "Launched comprehensive community service program engaging over 500 students in meaningful social impact projects.",
    //   // icon: Users,
    //   image: "/placeholder.svg?height=300&width=400",
    //   stats: "",
    // },
    // {
    //   year: "2021",
    //   title: "Academic Excellence Recognition",
    //   description:
    //     "Received state recognition for outstanding academic programs and consistently high student achievement rates.",
    //   // icon: TrendingUp,
    //   image: "/placeholder.svg?height=300&width=400",
    //   stats: "",
    // },
  ]

  return (
    <section id="archives" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">Our Legacy of Excellence</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
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
                  {/* <div className="w-16 h-16 bg-[#194272] rounded-2xl flex items-center justify-center shadow-md">
                    {/* <achievement.icon className="w-8 h-8 text-white" /> */}
                  {/* </div> */}
                  <div>
                    {/* <div className="text-sm font-bold text-[#194272] uppercase tracking-wider">{achievement.year}</div> */}
                    <div className="text-lg font-bold text-[#194272]">{achievement.stats}</div>
                  </div>
                </div>

                <h3 className="text-4xl font-bold text-[#194272]">{achievement.title}</h3>

                <p className="text-white leading-relaxed text-lg">{achievement.description}</p>

                {achievement.link ? (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#194272] text-white rounded-full font-semibold hover:bg-[#15325a] transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    2024 pics
                    <Calendar className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <button className="inline-flex items-center px-6 py-3 bg-[#194272] text-white rounded-full font-semibold hover:bg-[#15325a] transition-all duration-300 transform hover:scale-105 shadow-md">
                    See More 
                    {/* <Calendar className="w-4 h-4 ml-2" /> */}
                  </button>
                )}
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#194272] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-10"></div>
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="relative w-full h-auto object-contain rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
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
