"use client"
import { motion } from "motion/react"
import { Mail, Linkedin, Twitter, MapPin } from "lucide-react"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      bio: "Leading educational innovation with 20+ years of experience in academic excellence and student development.",
      image: "/placeholder.svg?height=400&width=400",
      location: "Main Campus",
      social: {
        email: "sarah.johnson@excellence.edu",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Prof. Michael Chen",
      position: "Head of STEM",
      bio: "Pioneering STEM education with cutting-edge research and hands-on learning approaches that inspire innovation.",
      image: "/placeholder.svg?height=400&width=400",
      location: "Science Wing",
      social: {
        email: "michael.chen@excellence.edu",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Director of Arts",
      bio: "Fostering creativity and artistic expression through comprehensive arts education programs and cultural initiatives.",
      image: "/placeholder.svg?height=400&width=400",
      location: "Arts Center",
      social: {
        email: "emily.rodriguez@excellence.edu",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "James Thompson",
      position: "Athletic Director",
      bio: "Building character and teamwork through comprehensive sports and wellness programs that develop well-rounded students.",
      image: "/placeholder.svg?height=400&width=400",
      location: "Sports Complex",
      social: {
        email: "james.thompson@excellence.edu",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated educators and leaders committed to nurturing the next generation of innovators, thinkers, and global citizens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="fade-in macbook-scroll group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194272]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`mailto:${member.social.email.replace('excellence.edu', 'newmun.org')}`}
                      className="w-10 h-10 bg-[#194272]/90 rounded-full flex items-center justify-center hover:bg-[#194272] transition-colors duration-300"
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-[#194272]/90 rounded-full flex items-center justify-center hover:bg-[#194272] transition-colors duration-300"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-[#194272]/90 rounded-full flex items-center justify-center hover:bg-[#194272] transition-colors duration-300"
                    >
                      <Twitter size={18} className="text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 text-[#194272] mr-2" />
                    <span className="text-sm text-gray-500">{member.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#194272] mb-2">{member.name}</h3>
                  <p className="text-[#194272] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio.replace('Excellence Academy', 'NewMUN')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-[#194272] rounded-3xl p-8 text-white fade-in"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Years Combined Experience" },
              { number: "25+", label: "Advanced Degrees" },
              { number: "50+", label: "Awards & Recognition" },
              { number: "100%", label: "Commitment to Excellence" },
            ].map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
