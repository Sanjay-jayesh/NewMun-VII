"use client"
import { motion } from "motion/react"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, GraduationCap } from "lucide-react"

const Footer = () => {
  

  

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/newmun.bh/", color: "hover:text-pink-500" },
    { icon: Youtube, href: "https://www.youtube.com/@thenewindianschoolwllkingd3517", color: "hover:text-red-500" },
  ]

  return (
    <footer className="bg-white text-[#194272] py-16 border-t border-gray-100">
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
            <p className="text-gray-600 leading-relaxed mb-6">
              Empowering the next generation of leaders through debate, diplomacy, and collaboration.
            </p>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="fade-in"
          >
            {/* <h4 className="text-xl font-bold mb-6 text-[#194272]">Stay Connected</h4>
            <p className="text-gray-500 mb-4">Subscribe to our newsletter for the latest updates and news.</p>

            <div className="mb-6">
              <form className="flex rounded-xl shadow-md overflow-hidden bg-gray-50 border border-gray-200">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-transparent text-[#194272] focus:outline-none"
                />
                <button className="px-6 py-3 bg-[#194272] text-white font-semibold hover:bg-[#15325a] transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div> */}

            <div className="flex justify-end mt-8">
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 bg-[#194272] bg-opacity-10 rounded-lg flex items-center justify-center text-[#194272] hover:bg-[#194272] hover:text-white transition-all duration-300"
                    aria-label={social.icon.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-200 pt-8 fade-in"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 NewMUN. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <p className="transition-colors duration-300">
                Created by Sanjay Jayesh
              </p>
              {/* <a href="#" className="hover:text-[#194272] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#194272] transition-colors duration-300">
                Accessibility
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
