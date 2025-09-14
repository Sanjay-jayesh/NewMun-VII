"use client"
import { motion } from "motion/react"
import { Star, Quote, GraduationCap, Heart } from "lucide-react"

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Class of 2023, Harvard University",
      content:
        "NewMUN didn't just prepare me for college; it prepared me for life. The innovative teaching methods and supportive environment helped me discover my passion for computer science.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    {
      name: "Maria Rodriguez",
      role: "Parent of Current Student",
      content:
        "As a parent, I couldn't be happier with the education my daughter receives here. The teachers genuinely care about each student's success and go above and beyond to help them achieve their goals.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Parent",
    },
    {
      name: "David Kim",
      role: "Class of 2022, MIT",
      content:
        "The STEM programs at NewMUN are world-class. The hands-on approach and access to cutting-edge technology gave me a significant advantage in my engineering studies.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    {
      name: "Sarah Johnson",
      role: "Alumni, Class of 2021",
      content:
        "The arts program here is incredible. My teachers encouraged my creativity and helped me develop skills that I use every day in my career as a graphic designer.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
    {
      name: "Robert Chen",
      role: "Parent & School Board Member",
      content:
        "NewMUN sets the gold standard for education. The commitment to both academic excellence and character development is evident in every aspect of the school.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Parent",
    },
    {
      name: "Emma Williams",
      role: "Class of 2024, Stanford University",
      content:
        "The college counseling program here is exceptional. They helped me navigate the application process and find the perfect fit for my academic and personal goals.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      category: "Alumni",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-[#6D9EEE]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 fade-in"
        >
          <h2 className="text-5xl font-bold mb-6 text-[#194272]">What Our Community Says</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their transformative experiences and the lasting impact of NewMUN.
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
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-lg">"{testimonial.content}"</p>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#194272] fill-current" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="text-[#194272] font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-[#194272]/80 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default TestimonialSection