"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Lasso, LucideScanFace, Menu, X } from "lucide-react"
import { AlertDescription } from "./ui/alert"

const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
      setIsCompact(scrollPosition > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Archives", href: "#archives" },
    { name: "Principal", href: "#principal"},
    { name: "Resources", href: "#resources"},
    { name: "Councils", href: "#councils" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ]

  // FIXED handleNavClick
  const handleNavClick = (href: string) => {
    setIsOpen(false) // close menu first
    setTimeout(() => { // wait for menu close animation
      const element = document.querySelector(href) as HTMLElement | null
      if (element) {
        const navbarHeight = isCompact ? 60 : scrolled ? 70 : 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight - 20
        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    }, 150)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        height: isCompact ? "60px" : scrolled ? "70px" : "80px",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#6d9eee] backdrop-blur-md shadow-lg border-b border-gray" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 pt-3">
        <div className="flex items-center justify-between h-full">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <img src="/logo.png" alt="NewMUN" className="w-10 h-8" />
            <div className="font-semibold text-white text-xl">NewMUN</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-[#194272] transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#194272] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
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
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#6d9eee] border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 px-4 text-white hover:text-white hover:bg-[#194272] transition-all duration-300 rounded-lg font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  )
}

export default ResizableNavbar



