"use client"
import type React from "react"
import { useRef } from "react"

interface TracingBeamProps {
  children: React.ReactNode
}

const TracingBeam: React.FC<TracingBeamProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="relative">
      {/* Sidebar completely removed */}

      {/* Content (no extra margin needed since sidebar is gone) */}
      <div>{children}</div>
    </div>
  )
}

export default TracingBeam
