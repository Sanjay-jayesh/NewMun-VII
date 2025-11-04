"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { X, Crown, Star } from "lucide-react"

// --- TYPES ---
type Person = {
  name: string
  position: string
  bio: string
  image: string // path to individual image
}

type Group = {
  id: string
  left: Person
  right?: Person 
  groupImage: string 
}

type TeamType = "oc" | "faculty"

// OC Team data
const ocGroups: Group[] = [
  {
    id: "directors",
    left: {
      name: "Ms.Soumi Mondal",
      position: "MUN Director",
      bio: "Without a doubt, she is the Soul of NewMUN since its very inception. A star in a world of endless possibilities. Her character echoes the acheivements of the past, the glory of the present and the opportunities of the future. Her constant efforts have always been fruitful in navigating and capitalizing in a 21st century world won by those who push the boundaries of the impossible. In short, the essence of NewMUN, poised and risen to the heights of a sky that never found its end. She is, the one and only; Soumi Mondal.",
      image: "/Soumi.jpg?height=600&width=600",
    },
    right: {
      name: "Fidel Marakar",
      position: "Student Director",
      bio: " ",
      image: "/Fidel.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/SoumiXFidel1.jpg",
  },
  {
    id: "secretariat",
    left: {
      name: "Nahreen Mariyam Shameer",
      position: "Secretary General",
      bio: " ",
      image: "/Nahreen.jpg?height=600&width=600",
    },
    right: {
      name: "Ahan Shailendra Kamble",
      position: "Deputy Secretary General",
      bio: " ",
      image: "/Ahan.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/AhanXNahreen.jpg",
  },
  {
    id: "research",
    right: {
      name: "Mohammed Aarib Ali Khan",
      position: "Member of Research",
      bio:
        "Mohammed Aarib, a student of class XI, is one of our dedicated members of the Department of Research and Development. With a strong specialization in data collection, Aarib plays a major role in identifying compelling and interesting topics to be debated upon, making the event all the more engaging.",
      image: "/Ali.jpg?height=600&width=600",
    },
    left: {
      name: "Neil Jose",
      position: "Member of Research",
      bio:
        "Neil Jose, a Class 11 student and member of the Research & Development team, is known for his curiosity, hardworking mentality and commitment to innovative problem-solving. With enormous contributions to the topics at hand, his department shall lead every council, involving fruitful debates and by maintaining a constant energy throughout.",
      image: "/Neil.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/NeilXAarib.jpg",
  },
  {
    id: "finance",
    left: {
      name: "Alfia Rejan Varghese",
      position: "Head of Finance & Logistics",
      bio: " ",
      image: "/Alfia.jpg?height=600&width=600",
    },
    right: {
      name: "Ansh Shetty",
      position: "Undersecretary of Finance & Logistics",
      bio:
        "Ansh Shetty serves as the Under-Secretary of Finance for this Model United Nations. Known for his diligence, organizational skills, and reliability, he is responsible for overseeing the financial planning and management of the conference to ensure that all operations are conducted with efficiency and transparency. He is deeply committed to professionalism and integrity, while also bringing strong leadership and problem-solving abilities to the Secretariat",
      image: "/Ansh.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/AlfiaXAnsh.jpg",
  },
  {
    id: "training",
    left: {
      name: "Faiza Chunawala",
      position: "Head of Delegate & Chair Training",
      bio:
        "Faiza Chunawala, a student of class XII, is our steadfast Head of Chair and Delegate Training. She combines strong leadership with patience and empathy, ensuring every delegate feels supported as they develop their skills and confidence which they need to thrive in NewMUN. She oversees the design and delivery of training sessions, ensuring that both chairs and delegates understand procedure, debate structure, and diplomacy techniques. Her role is central to fostering an environment where every participant feels prepared, empowered, and inspired to engage in meaningful dialogue.",
      image: "/Faiza.jpg?height=600&width=600",
    },
    right: {
      name: "S.Mridini",
      position: "Undersecretary of Delegate & Chair Training",
      bio:
        "Mridini Sabarinathan, is a class XII student, and takes the role of the Under-Secretary of the Department of Delegate and Chair Training this year. She thrives on turning chaos into order, sparking new ideas, and ensuring that every chair and delegate feels confident and prepared. Known for her energy and fresh perspective, she is committed to creating a smooth, engaging, and truly unforgettable MUN experience for all participants.",
      image: "/Mridini.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/FaizaXMridini.jpg",
  },
  {
    id: "pr",
    left: {
      name: "Hiba Imam",
      position: "Head of PR",
      bio:
        "Hiba Imam, from Class XII, is this year’s dynamic Head of PR. Known for her enthusiasm and adaptability, she takes pride in connecting with people and keeping the MUN spirit alive. With over 10 MUN experiences, she has gained perspective that helps her contribute both creatively and responsibly to her role. She looks forward to adding her own touch to make this year’s MUN welcoming and unforgettable for everyone.",
      image: "/Hiba.jpg?height=600&width=600",
    },
    right: {
      name: "Arnav Chakraborty",
      position: "Undersecretary of PR",
      bio: "Arnav is the Undersecretary of PR for NEWMUN VII. While being the fun, innovative and chaotic person he is, he has a vision to make NEWMUN VII distinctly different this year, aiming for something unconventional. Thinking outside the box is his standout quality, and he is committed to using all of it to make this year’s MUN a unique experience.",
      image: "/Arnav.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/ArnavXHiba.jpg",
  },
  {
    id: "crisis",
    left: {
      name: "Aadithya Menon",
      position: "Director of Crisis",
      bio:
        "Aadithya S Menon of Grade 11 is an avid aviation enthusiast and a passionate pianist. He takes up the role of our dedicated Crisis Director for NewMUN VII. Aadithya combines his creativity and experience to create a dynamic environment for our delegates to work and collaborate effectively.",
      image: "/Aadithya.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/AadithyaX.jpg",
  },
  {
    id: "hospitality",
    left: {
      name: "Vyga Shijoy",
      position: "Head of Hospitality",
      bio:
        "This is the face of your Head of Hospitality for NewMUN VII. Here is Vyga Shijoy, a grade 12 student of Commerce, popular for her skillful talent, dynamic personality and most valuable of all, compassion and meticulous perfection to work. Having the honour of serving under the same post for NewMUN VI, she aims to execute her duties with enthusiasm, and commitment to ensure that NewMUN is celebrated as astoundingly as every team member has dreamt of it to be.",
      image: "/Vyga.jpg?height=600&width=600",
    },
    right: {
      name: "Eslin Mary",
      position: "Undersecretary of Hospitality",
      bio:
        "Eslin Sosa Philip, is a student of class XI F. She aspires to ensure that every delegate experiences the right atmosphere every second, one that encourages open expression, thoughtful discussion, and meaningful engagement. Her aim is to make each moment of this MUN event a great success, from start to finish. The days of the event shall be upheld with her support and assistance and determined demeanor.",
      image: "/Eslin.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/EslinXVyga.jpg",
  },
  {
    id: "it",
    left: {
      name: "Sanjay Jayesh",
      position: "Head of IT",
      bio:
        "Sanjay from Class XII, is our Head of IT this year. Sanjay is a team player and known for his perfection for minute details. Sanjay leads all things tech: from website development to digital coordination. Thus ensuring a seamless and modern experience.",
      image: "/Sanjay.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/SanjayX4.jpg",
  },
  {
    id: "media",
    left: {
      name: "Arjun Vasudevan",
      position: "Head of Media",
      bio:
        "Arjun Vasudevan, a Class XII student, currently serves as the Head of Media for this year’s MUN. He brings a unique blend of creativity and organization to his role—whether it’s capturing the most impactful moments of an event or experimenting with innovative ways to present them. His involvement with the Organizing Committee has provided an opportunity to apply these strengths while collaborating with a dedicated team to enhance and enrich the overall MUN experience.",
      image: "/Arjun.jpg?height=600&width=600",
    },
    right: {
      name: "Thejas R Rajeev",
      position: "Undersecretary of Media",
      bio:
        "Thejas from Class XII serves as our Undersecretary of Media this year. A visionary with a passion for filmmaking. With his keen eye for cinematography, lighting, and angles, Thejas ensures that every frame he captures is not just a shot, but a memory to be cherished.",
      image: "/placeholder.svg?height=600&width=600",
    },
    groupImage: "/C7-OC/ThejasXArjun.jpg",
  },
  {
    id: "journalism",
    left: {
      name: "Daksha Pratheesh",
      position: "Head of Journalism",
      bio:
        "Daksha Pratheesh, of class XII is our Head of Journalism for this year. Known for being organized, approachable, and calm under pressure, Daksha values teamwork and open communication. With a knack for listening to ideas and encouraging participation, she brings a collaborative and positive leadership style that helps the team work smoothly and effectively.",
      image: "/Daksha.jpg?height=600&width=600",
    },
    right: {
      name: "Sreenavneeth",
      position: "Head of Photography",
      bio:
        "",
      image: "/Albi.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/DakshaXNav.jpg",
  },  
  {
    id: "security",
    left: {
      name: "Zurafa Mohamed Ashraf",
      position: "Head of Security & Runners",
      bio:
        "Zurafa Mohamed Ashraf, a student of Class XII, holds the position of the Head of Security for NEWMUN VII. She is a passionate individual in the field of public speaking and debating. As the Head Girl of the school, she is known for her leadership qualities and enthusiasm in maintaining the integrity of any event.",
      image: "/Zurafa.jpg?height=600&width=600",
    },
    right: {
      name: "Albi Sam",
      position: "Undersecretary of Security & Runners",
      bio:
        "Albi is the Under-Secretary of Security and Runners for NEWMUN VII. He strives to remain focused and disciplined when it matters most, presenting himself as both approachable and responsible. His passion for football highlights his emphasis on teamwork and strategy, values that shape his approach to leadership. Aalbi is dedicated to ensuring that this MUN will be an enjoyable and meaningful experience for all delegates and chairs. He also maintains a strong commitment to upholding appropriate conduct throughout the conference.",
      image: "/Albi.jpg?height=600&width=600",
    },
    groupImage: "/C7-OC/ZurafaXAlby.jpg",
  },
]

// Faculty Data 
const facultyMembers: Person[] = [
  {
    name: "Mrs. Kala Balachandran",
    position: "",
    bio: "",
    image: "/faculty/Kala.jpg",
  },
  {
    name: "Mrs. Ancy P. Joseph",
    position: "",
    bio: "The faculty section uses the old card design (grid of individual members) you provided, awaiting your actual faculty data.",
    image: "/faculty/Ancy.jpg",
  },
  {
    name: "Mrs. Roshni Radhakrishnan",
    position: "",
    bio: "",
    image: "/faculty/Roshni.jpg",
  },
  {
    name: "Mrs. Saritha Sethumadhavan",
    position: "",
    bio: "",
    image: "/faculty/Saritha.jpg",
  },
  {
    name: "Mrs. Sindhuja C B",
    position: "",
    bio: "",
    image: "/faculty/Sindhuja.jpg",
  },
  {
    name: "Mrs. Sarija Shijoy",
    position: "",
    bio: "",
    image: "/faculty/Sarija.jpg",
  },
  {
    name: "Vijitha Suraj Nair",
    position: "",
    bio: "",
    image: "/faculty/Vijitha.jpg",
  },
  {
    name: "Mrs. Bindu Reghu",
    position: "",
    bio: "",
    image: "/faculty/Bindu.jpg",
  },
  {
    name: "Mrs. Shanipriya Rajesh",
    position: "",
    bio: "",
    image: "/faculty/Shani.JPG",
  },
  {
    name: "Mr. Mohammed Shafi",
    position: "",
    bio: "",
    image: "/faculty/Shafi.jpg",
  },
  {
    name: "Mr. Likson Lazar",
    position: "",
    bio: "",
    image: "/faculty/Likson.JPG",
  },
  {
    name: "Mrs. Sreeja Nair",
    position: "",
    bio: "",
    image: "/faculty/Sreeja.jpg",
  },
  {
    name: "Mrs. Valen Pinto",
    position: "",
    bio: "",
    image: "/faculty/Valen.jpg",
  },
  {
    name: "Mrs. Ruby Paul",
    position: "",
    bio: "",
    image: "/faculty/Ruby.jpg",
  },
]

// COMPONENTS 

const TeamSelector: React.FC<{
  activeTeam: TeamType
  setActiveTeam: (team: TeamType) => void
}> = ({ activeTeam, setActiveTeam }) => {
  const isOCActive = activeTeam === "oc"
  const isFacultyActive = activeTeam === "faculty"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-12 fade-in"
    >
      <div className="bg-gray-100 rounded-full p-2 flex">
        <button
          onClick={() => setActiveTeam("oc")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
            isOCActive ? "bg-[#194272] text-white shadow-lg" : "text-[#194272] hover:bg-[#194272]/10"
          }`}
        >
          {/* <Crown className="w-5 h-5" /> */}
          <span>OC Team</span>
        </button>
        <button
          onClick={() => setActiveTeam("faculty")}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
            isFacultyActive ? "bg-[#194272] text-white shadow-lg" : "text-[#194272] hover:bg-[#194272]/10"
          }`}
        >
          {/* <Star className="w-5 h-5" /> */}
          <span>Faculty</span>
        </button>
      </div>
    </motion.div>
  )
}

//Faculty section 
const FacultyCard: React.FC<{ member: Person, index: number }> = ({ member, index }) => (
  <motion.div
    key={member.name}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.07}}
    className="fade-in macbook-scroll group"
  >
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          loading="eager"
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#194272]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#194272] mb-2">{member.name}</h3>
        <p className="text-[#194272] font-semibold mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        </p>
      </div>
    </div>
  </motion.div>
)

const TeamSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [activePerson, setActivePerson] = useState<Person | null>(null)
  const [activeTeam, setActiveTeam] = useState<TeamType>("oc") 

  const groupsToDisplay = ocGroups

  const openPersonModal = (person: Person) => {
    setActivePerson(person)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setActivePerson(null)
  }

  return (
    <section id="team" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-[#194272]">Meet Our Leadership Team</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Dedicated educators and leaders committed to nurturing the next generation of innovators, thinkers, and global citizens.
          </p>
        </motion.div>

        <TeamSelector activeTeam={activeTeam} setActiveTeam={setActiveTeam} />

        {/* OC Team Layout */}
        {activeTeam === "oc" && (
          <div className="space-y-20">
            {groupsToDisplay.map((g, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={g.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="w-full"
                >
                  <div className={`flex flex-col lg:flex-row items-center lg:items-stretch gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 max-w-md w-full">
                        <div className="relative overflow-hidden">
                          <img
                            src={g.groupImage}
                            alt={`${g.left.name}${g.right ? " & " + g.right.name : ""}`}
                            loading="eager"
                            className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Buttons */}
                        <div className="p-6 flex items-center justify-between gap-4">
                          <div className={g.right ? "w-1/2" : "w-full"}>
                            <button
                              onClick={() => openPersonModal(g.left)}
                              className="px-4 py-2 bg-white text-[#194272] border border-[#194272]/10 rounded-full shadow hover:shadow-md transition-all duration-200 w-full text-sm font-medium hover:bg-[#194272] hover:text-white"
                            >
                              About {g.left.name.split(" ")[0]}
                            </button>
                          </div>
                          {g.right && (
                            <div className="w-1/2">
                              <button
                                onClick={() => openPersonModal(g.right as Person)}
                                className="px-4 py-2 bg-white text-[#194272] border border-[#194272]/10 rounded-full shadow hover:shadow-md transition-all duration-200 w-full text-sm font-medium hover:bg-[#194272] hover:text-white"
                              >
                                About {g.right.name.split(" ")[0]}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center">
                      <div className="p-6 lg:p-12">
                        <div className="max-w-xl">
                          <h3 className="text-4xl lg:text-5xl font-bold text-[#194272] leading-tight">
                            <span className="block">{g.left.position}</span>
                            {g.right ? <span className="block mt-2 text-3xl font-bold text-[#9fbfe6]/80">|</span> : null}
                            {g.right ? <span className="block mt-2">{g.right.position}</span> : null}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Faculty Grid */}
        {activeTeam === "faculty" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <FacultyCard key={member.name} member={member} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && activePerson && activeTeam === "oc" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 id="modal-title" className="text-3xl font-bold text-[#194272]">{activePerson.name}</h3>
                  <p className="text-base text-gray-500 mt-1">{activePerson.position}</p>
                </div>
                <button aria-label="Close" onClick={closeModal} className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
                  <X />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 leading-relaxed text-base">{activePerson.bio || "No bio available yet."}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={closeModal} className="px-4 py-2 bg-[#194272] text-white rounded-full font-medium hover:bg-[#15325a] transition-all duration-200">Close</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default TeamSection