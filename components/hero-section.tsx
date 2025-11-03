"use client"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FlipWords from "@/components/ui/flip-words"

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const words = ["Excellence", "Innovation", "Leadership", "Success", "Future"]

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date("2025-11-14T08:00:00").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: -40,
          duration: 2.5,
          ease: "power1.inOut",
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
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#6d9eee] px-6 py-20 overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="hero-bg absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Text + Logo */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-12 z-10">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col">
          {/* Welcome + NewMUN */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Welcome to
              <br />
              <span className="text-6xl md:text-7xl font-bold text-[#194272]">NewMUN</span>
            </h1>
          </motion.div>

          {/* Flipping Words */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-white mb-20" // <-- mb-16 pushes countdown further down
          >
            Building <FlipWords words={words} className="font-semibold text-[#194272]" /> for Tomorrow
          </motion.div>

          {/* Countdown */}
          <div className="w-full flex flex-col items-center">
            <p className="text-[#194272] font-bold text-lg mb-2 text-center">Time until Conference</p>
            <div className="w-full max-w-5xl bg-white/20 backdrop-blur-md rounded-3xl flex justify-between px-6 py-4">
              <div className="flex-1 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{timeLeft.days}</p>
                <p className="text-sm font-semibold text-[#194272]">Days</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours}</p>
                <p className="text-sm font-semibold text-[#194272]">Hours</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes}</p>
                <p className="text-sm font-semibold text-[#194272]">Minutes</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds}</p>
                <p className="text-sm font-semibold text-[#194272]">Seconds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
        >
          <img
            src="/New logo.png"
            alt="NewMUN"
            className="w-[550px] max-w-full"
            loading="eager" // <-- forces instant loading
          />
        </motion.div>
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
