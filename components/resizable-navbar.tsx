"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
      setIsCompact(scrollPosition > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Archives", href: "#archives" },
    { name: "Team", href: "#team" },
    { name: "Councils", href: "#councils" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      try {
        const element = document.querySelector(href)
        if (element) {
          const navbarHeight = isCompact ? 60 : scrolled ? 70 : 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight - 20
          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        } else {
          console.warn(`Element with selector "${href}" not found`)
          window.location.hash = href
        }
      } catch (error) {
        console.error("Error navigating to section:", error)
        window.location.hash = href
      }
    }, 100)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0, height: isCompact ? 60 : scrolled ? 70 : 80 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#6d9eee] backdrop-blur-md shadow-lg border-b border-[#6d9eee]"
          : "bg-[#6d9eee]"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo & Name */}
        <motion.div
          animate={{ scale: isCompact ? 0.9 : 1 }}
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavClick("#home")}
        >
          <img src="/logo.png" alt="NewMUN" className="w-10 h-8" />
          <motion.div
            animate={{ fontSize: isCompact ? "1.25rem" : "1.5rem" }}
            className="font-semibold text-white"
          >
            NewMUN
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:!flex space-x-8 z-50">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-white hover:text-gray-200 relative group font-medium cursor-pointer transition-colors duration-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#6d9eee] border-t border-[#6d9eee]"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                  className="block w-full text-left py-3 px-4 text-white hover:text-gray-200 hover:bg-[#5b8dd9] transition-all duration-300 rounded-lg font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default ResizableNavbar
