"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ResizableNavbar from "@/components/resizable-navbar"
import TracingBeam from "@/components/ui/tracing-beam"
import PrincipalDesk from "@/components/PrincipalDesk"

const HeroSection = dynamic(() => import("@/components/hero-section"), { ssr: false })
const ArchivesSection = dynamic(() => import("@/components/archives-section"), { ssr: false })
const TeamSection = dynamic(() => import("@/components/team-section"), { ssr: false })
const CouncilsSection = dynamic(() => import("@/components/councils-section"), { ssr: false })
const TestimonialSection = dynamic(() => import("@/components/testimonial-section"), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false) // when true, show archives / principal / rest

  // 1) Ensure hero occupies viewport and reveal the rest AFTER first paint(s)
  useEffect(() => {
    // Force initial scroll to top (avoid any previous scroll position)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })

    // Wait for two animation frames — ensures browser had a paint opportunity for the hero wrapper
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setRevealed(true)
      })
    })
  }, [])

  // 2) Initialize GSAP AFTER we've revealed the rest (so elements exist & measurements are stable)
  useEffect(() => {
    if (!revealed) return

    // enable smooth nav scroll while GSAP is active
    document.documentElement.style.scrollBehavior = "smooth"

    const ctx = gsap.context(() => {
      // Fade-in animations
      gsap.utils.toArray(".fade-in").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })

      // Parallax
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      })

      // MacBook scroll effect
      gsap.utils.toArray(".macbook-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { scale: 0.85, opacity: 0, rotateX: 15 },
          {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.2,
            },
          }
        )
      })

      // Staggered grid animations
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          }
        )
      })
    }, mainRef)

    return () => {
      ctx.revert()
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [revealed])

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#6d9eee] text-black overflow-x-hidden"
      style={{ scrollPaddingTop: "80px" }}
    >
      <ResizableNavbar />

      <TracingBeam>
        <div className="relative w-full">
          {/* HERO: force it to occupy full viewport so nothing below can peek up */}
          <div id="hero" className="min-h-screen bg-[#6d9eee]">
            <HeroSection />
          </div>

          {/* OTHER SECTIONS: kept in DOM but hidden until `revealed` is true.
              Using opacity + pointer-events avoids layout shifts and avoids blank page. */}
          <div
            className={`w-full transition-opacity duration-300 ${
              revealed ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            } bg-[#6d9eee]`}
          >
            <div className="lg:ml-16 px-6">
              <ArchivesSection />
              <PrincipalDesk />
              <TeamSection />
              <CouncilsSection />
              <TestimonialSection />
            </div>
          </div>
        </div>
      </TracingBeam>
    </div>
  )
}
