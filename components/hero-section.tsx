"use client"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FlipWords from "@/components/ui/flip-words"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const words = ["Excellence", "Innovation", "Leadership", "Success", "Future"]

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: -20,
          duration: 3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        })
      }

      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#6d9eee]"
    >
      {/* Background Grid */}
      <div
        className="hero-bg absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Welcome to <span className="text-[#194272] underline">NewMUN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-white"
            >
              Building{" "}
              <FlipWords words={words} className="text-[#194272] font-semibold" /> for Tomorrow
            </motion.p>

          </div>

          {/* Logo */}
          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <img src="/logo.png" alt="NewMUN" className="max-w-md" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
