"use client"
import { motion } from "motion/react"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ms. Soumi Mondal",
      position: "MUN Director",
      bio: "She is the Soul of NewMUN since its very inception. Her character echoes the achievements of the past, the glory of the present and the opportunities of the future.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Fidel Marakar",
      position: "Student Director",
      bio: "Fidel leads this year's MUN Team alongside Ms. Soumi with a profound passion for international affairs and politics.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Nahreen Mariyam Shameer",
      position: "Secretary General",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ahan Shailendra Kamble",
      position: "Deputy Secretary General",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Mohammed Aarib Ali Khan",
      position: "Member of Research",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Neil Jose",
      position: "Member of Research",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Alfia Rejan Varghese",
      position: "Head of Finance & Logistics",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Anush Shetty",
      position: "Undersecretary of Finance & Logistics",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Faiza Chunawala",
      position: "Head of Delegate & Chair Training",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "S. Mridini",
      position: "Undersecretary of Delegate & Chair Training",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Hiba Imam",
      position: "Head of PR",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Arnav Chakraborty",
      position: "Undersecretary of PR",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Aadithya Menon",
      position: "Director of Crisis",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Vyga Shijoy",
      position: "Head of Hospitality",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Eslin Mary",
      position: "Undersecretary of Hospitality",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sanjay Jayesh",
      position: "Head of IT",
      bio: "Sanjay from Class XII, is our Head of IT this year. Sanjay is a team player and known for his perfection for minute details. Sanjay leads all things tech: from website development to digital coordination. Thus ensuring a seamless and modern experience.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Arjun Vasudevan",
      position: "Head of Media",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Thejas R Rajeev",
      position: "Undersecretary of Media",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Daksha Pratheesh",
      position: "Head of Journalism",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Zarafa Mohammed Ashraf",
      position: "Head of Security & Runners",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Albi Sam",
      position: "Undersecretary of Security & Runners",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="team" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">Meet Our Leadership Team</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Dedicated educators and leaders committed to nurturing the next generation of innovators, thinkers, and global citizens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="fade-in macbook-scroll group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#194272]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#194272] mb-2">{member.name}</h3>
                  <p className="text-[#194272] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
