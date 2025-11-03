"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface TextRevealCardProps {
  text: string
  revealText: string
  className?: string
}

const TextRevealCard: React.FC<TextRevealCardProps> = ({ text, revealText, className }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative  w-full max-w-md mx-auto h-20 bg-black rounded-2xl overflow-hidden cursor-pointer shadow-2xl",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-xl font-bold">{text}</span>
      </div>

      {/* Reveal Overlay */}
      <motion.div
        className="absolute inset-0 bg-white flex items-center justify-center"
        initial={{ x: "100%" }}
        animate={{ x: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <span className="text-black text-xl font-bold">{revealText}</span>
      </motion.div>

      {/* Sliding Border Effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

export default TextRevealCard
