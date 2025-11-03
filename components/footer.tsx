"use client"
import { motion } from "motion/react"
import { Instagram, Youtube, GraduationCap } from "lucide-react"

const Footer = () => {
  

  

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/newmun.bh/", color: "#fff" },
    { icon: Youtube, href: "https://www.youtube.com/@thenewindianschoolwllkingd3517", color: "#FFf" },
  ]

  return (
    <footer className="bg-[#6d9eee] text-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fade-in"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#194272] rounded-xl flex items-center justify-center shadow-md">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#194272]">NewMUN</h3>
            </div>
            <p className="text-white md:text-xl leading-relaxed mb-6">
              Empowering the next generation of leaders through debate, diplomacy, and collaboration.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="fade-in flex justify-end mt-8 md:mt-0"
          >
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#194272]/10 text-[#194272] hover:bg-[#194272] hover:text-white transition-all duration-300"
                  aria-label={social.icon.name}
                  style={{ color: social.color }}
                >
                  <social.icon size={22} />
                </a>

              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-200 pt-8 pb-6 fade-in" // added pb-6
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-base md:text- font-medium">
              <p>&copy; 2025 NewMUN. All rights reserved.</p>
            </div>
            <div className="text-white text-base md:text-xl font-medium">
              <p>Created by Sanjay Jayesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
