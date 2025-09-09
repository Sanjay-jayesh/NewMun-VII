"use client"
import { useEffect, useRef } from "react"
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

  useEffect(() => {
    // Force scroll to top after hydration
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }, 0)

    // Smooth scroll for nav clicks
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
  }, [])

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#6d9eee] text-black overflow-x-hidden"
      style={{ scrollPaddingTop: "80px" }}
    >
      <ResizableNavbar />
      <TracingBeam>
        <div className="relative w-full">
          <HeroSection />
          {/* Full-width blue background with content margin */}
          <div className="w-full">
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
