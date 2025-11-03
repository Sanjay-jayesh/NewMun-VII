"use client"
import { motion } from "motion/react"
import { Star, Quote, GraduationCap, Heart } from "lucide-react"

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Faiha Mariyam Shameer",
      role: "Class of 2022",
      content:
        "Imagine a mere classroom with a few discerning minds driving world transformation. What began as a scary event of trial and error in my life turned out to be the best moments I’ve ever experienced, NewMUN is where I found out about the unfathomable nature of world suffering and its craving for eternal peace. Through the most robust of debates, for the first time, it instilled in me the exhilarating belief that I required no ordnance higher than my voice to shape change.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    {
      name: "Ryan Joseph Abraham",
      role: "Class of 2024",
      content:
        "NewMUN gave me the chance to merge creativity with strategy. As the Head of Media and Marketing, I learnt to lead a team under pressure, build a strong online presence for the conference, and communicate ideas in ways that captured attention and engagement. It wasn’t just about designing or taking photos, it was about telling a story that made people want to be part of the event. NewMUN taught me the value of clear communication and proved that teamwork really DOES make the dream work.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    {
      name: "Alina Regy ",
      role: "Class of 2021",
      content:
        "The Model United Nations conference conducted by the New Indian School is an excellent program, distinguished by impeccable organizing committee's. The committee's always bring enthusiasm and dedication, all expertly guided by a knowledgeable and professional Executive Board. Overall, the event is a superb platform for developing crucial diplomatic and critical thinking skills in a truly stimulating and well-managed environment.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    // {
    //   name: "name1",
    //   role: "Alumni, Class of 2021",
    //   content:
    //     "content 1",
    //   rating: 5,
    //   image: "/placeholder.svg?height=100&width=100",
    //   category: "Alumni",
    // },
    // {
    //   name: "name2",
    //   role: "Parent & School Board Member",
    //   content:
    //     "content 2",
    //   rating: 5,
    //   image: "/placeholder.svg?height=100&width=100",
    //   category: "Parent",
    // },
    // {
    //   name: "name3",
    //   role: "Class of 2024, Stanford University",
    //   content:
    //     "content 3",
    //   rating: 5,
    //   image: "/placeholder.svg?height=100&width=100",
    //   category: "Alumni",
    // },
  ]

  return (
    <section id="testimonials" className="py-20 bg-[#6d9eee]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">What Our Community Says</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Hear from our alumni about their transformative experiences and the lasting impact of NewMUN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="fade-in macbook-scroll group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full flex flex-col border border-gray-100">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    {testimonial.category === "Alumni" ? (
                      <GraduationCap className="w-5 h-5 text-[#194272]" />
                    ) : (
                      <Heart className="w-5 h-5 text-[#194272]" />
                    )}
                    <span className="text-sm font-semibold text-[#194272] uppercase tracking-wider">
                      {testimonial.category}
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-gray-300" />
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-lg">"{testimonial.content.replace('Excellence Academy', 'NewMUN')}"</p>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#194272] fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  {/* <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200"
                  /> */}
                  <div>
                    <h4 className="text-[#194272] font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role.replace('Excellence Academy', 'NewMUN')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center fade-in"
        >
        </motion.div> */}
      </div>
    </section>
  )
}

export default TestimonialSection
