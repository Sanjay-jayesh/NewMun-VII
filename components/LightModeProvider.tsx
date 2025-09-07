"use client"
import { useEffect } from "react"

export default function LightModeProvider() {
  useEffect(() => {
    // Remove dark mode if present
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  }, [])

  return null
}
