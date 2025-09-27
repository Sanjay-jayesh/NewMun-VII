"use client"
import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

interface TracingBeamProps {
  children: React.ReactNode
}

const TracingBeam: React.FC<TracingBeamProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className="relative overflow-y-hidden"> {/* <-- added overflow-y-hidden */}
      {/* Tracing Beam */}
      <div className="fixed left-8 top-0 bottom-0 w-px z-40 hidden lg:block">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1 100" preserveAspectRatio="none">
          {/* Background line */}
          <line x1="0.5" y1="0" x2="0.5" y2="100" stroke="#e5e7eb" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          {/* Animated line */}
          <motion.line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            stroke="#000000"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength }}
            strokeDasharray="0 1"
          />
        </svg>

        {/* Animated dot */}
        <motion.div
          className="absolute w-4 h-4 bg-white rounded-full -left-2 shadow-lg"
          style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Content with left margin for the beam */}
      <div className="lg:ml-16">{children}</div>
    </div>
  )
}

export default TracingBeam
