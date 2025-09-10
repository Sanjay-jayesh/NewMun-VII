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
      image: "/Ali.jpg?height=400&width=400",
    },
    {
      name: "Neil Jose",
      position: "Member of Research",
      bio: "Neil Jose, a Class 11 student and member of the Research & Development team, is known for his curiosity, hardworking mentality and commitment to innovative problem-solving. With enormous contributions to the topics at hand, his department shall lead every council, involving fruitful debates and by maintaining a constant energy throughout.",
      image: "/Neil.jpg?height=400&width=400",
    },
    {
      name: "Alfia Rejan Varghese",
      position: "Head of Finance & Logistics",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ansh Shetty",
      position: "Undersecretary of Finance & Logistics",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Faiza Chunawala",
      position: "Head of Delegate & Chair Training",
      bio: "Faiza Chunawala, a student of class XII, is our steadfast Head of Chair and Delegate Training. She combines strong leadership with patience and empathy,  ensuring every delegate feels supported as they develop their skills and confidence which they need to thrive in NewMUN. She oversees the design and delivery of training sessions, ensuring that both chairs and delegates understand procedure, debate structure, and diplomacy techniques. Her role is central to fostering an environment where every participant feels prepared, empowered, and inspired to engage in meaningful dialogue.",
      image: "/Faiza.jpg?height=400&width=400",
    },
    {
      name: "S. Mridini",
      position: "Undersecretary of Delegate & Chair Training",
      bio: "Mridini Sabarinathan, is a class XII student, and takes the role of the Under-Secretary of the Department of Delegate and Chair Training this year. She thrives on turning chaos into order, sparking new ideas, and ensuring that every chair and delegate feels confident and prepared. Known for her energy and fresh perspective, she is committed to creating a smooth, engaging, and truly unforgettable MUN experience for all participants.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Hiba Imam",
      position: "Head of PR",
      bio: "Hiba Imam, from Class XII, is this year’s dynamic Head of PR. Known for her enthusiasm and adaptability, she takes pride in connecting with people and keeping the MUN spirit alive. With over 10 MUN experiences, she has gained perspective that helps her contribute both creatively and responsibly to her role. She looks forward to adding her own touch to make this year’s MUN welcoming and unforgettable for everyone.",
      image: "/Hiba.jpg?height=400&width=400",
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
      bio: "Aadithya S Menon of Grade 11 is an avid aviation enthusiast and a passionate pianist. He takes up the role of our dedicated Crisis Director for NewMUN VII. Aadithya combines his creativity and experience to create a dynamic environment for our delegates to work and collaborate effectively.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Vyga Shijoy",
      position: "Head of Hospitality",
      bio: "This is the face of your Head of Hospitality for NewMUN VII. Here is Vyga Shijoy, a grade 12 student of Commerce, popular for her skillful talent, dynamic personality and most valuable of all, compassion and meticulous perfection to work. Having the honour of serving under the same post for NewMUN VI, she aims to execute her duties with enthusiasm, and commitment to ensure that NewMUN is celebrated as astoundingly as every team member has dreamt of it to be.",
      image: "/Vyga.jpg?height=400&width=400",
    },
    {
      name: "Eslin Mary",
      position: "Undersecretary of Hospitality",
      bio: "Eslin Sosa Philip, is a student of class XI F. She aspires to ensure that every delegate experiences the right atmosphere every second, one that encourages open expression, thoughtful discussion, and meaningful engagement. Her aim is to make each moment of this MUN event a great success, from start to finish. The days of the event shall be upheld with her support and assistance and determined demeanor.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sanjay Jayesh",
      position: "Head of IT",
      bio: "Sanjay from Class XII, is our Head of IT this year. Sanjay is a team player and known for his perfection for minute details. Sanjay leads all things tech: from website development to digital coordination. Thus ensuring a seamless and modern experience.",
      image: "/Sanjay.jpg?height=400&width=400",
    },
    {
      name: "Arjun Vasudevan",
      position: "Head of Media",
      bio: "Arjun Vasudevan, a Class XII student, currently serves as the Head of Media for this year’s MUN. He brings a unique blend of creativity and organization to his role—whether it’s capturing the most impactful moments of an event or experimenting with innovative ways to present them. His involvement with the Organizing Committee has provided an opportunity to apply these strengths while collaborating with a dedicated team to enhance and enrich the overall MUN experience.",
      image: "/Arjun.jpg?height=400&width=400",
    },
    {
      name: "Thejas R Rajeev",
      position: "Undersecretary of Media",
      bio: "Thejas from Class XII serves as our Undersecretary of Media this year. A visionary with a passion for filmmaking. With his keen eye for cinematography, lighting, and angles, Thejas ensures that every frame he captures is not just a shot, but a memory to be cherished.",
      image: "/Thejas.jpg?height=400&width=400",
    },
    {
      name: "Daksha Pratheesh",
      position: "Head of Journalism",
      bio: "",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Zurafa Mohamed Ashraf",
      position: "Head of Security & Runners",
      bio: "Zurafa Mohamed Ashraf, a student of Class XII, holds the position of the Head of Security for NEWMUN VII. She is a passionate individual in the field of public speaking and debating. As the Head Girl of the school, she is known for her leadership qualities and enthusiasm in maintaining the integrity of any event.",
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
        {/* Section Heading */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Group Picture FIRST */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3 flex flex-col items-center"
            >
              <div className="overflow-hidden relative group w-full">
                <div className="relative w-full h-[500px] md:h-[600px] bg-[#6d9eee] flex items-center justify-center rounded-3xl">
                  <img
                    src="/smile.jpg"
                    alt="Our Team"
                    className="max-h-full max-w-full object-contain transition-transform duration-500 rounded-3xl border-8 border-white group"
                  />
                </div>
              </div>
              {/* Caption */}
              <p className="mt-4 text-xl md:text-2xl font-semibold text-[#194272] text-center">
                Team NEWMun VII 2025
              </p>
            </motion.div>

          {/* Individual Cards */}
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
