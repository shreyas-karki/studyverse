'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function VideoHero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const socialIconsRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (videoContainerRef.current && descriptionRef.current && socialIconsRef.current && missionRef.current) {
      gsap.from(videoContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
      })

      gsap.from(socialIconsRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1
      })

      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        delay: 0.8
      })

      gsap.from(missionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        delay: 1.2
      })
    }
  }, [])

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Social Icons */}
        <div ref={socialIconsRef} className="flex justify-center gap-6 mb-10">
          <Link 
            href="https://www.youtube.com" 
            target="_blank" 
            className="social-icon text-foreground hover:text-accent p-2"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
          <Link 
            href="https://www.linkedin.com" 
            target="_blank" 
            className="social-icon text-foreground hover:text-accent p-2"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
            </svg>
          </Link>
          <Link 
            href="https://www.instagram.com" 
            target="_blank" 
            className="social-icon text-foreground hover:text-accent p-2"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
            </svg>
          </Link>
        </div>
        
        {/* Video and Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video Container */}
          <div 
            ref={videoContainerRef}
            className="relative aspect-video overflow-hidden rounded-lg border border-primary glow-effect"
          >
            {/* Placeholder for actual video - in production replace with <video> element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/30 flex items-center justify-center border border-accent">
                <div className="h-12 w-12 rounded-full bg-primary/50 flex items-center justify-center">
                  <div className="ml-1 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div ref={descriptionRef} className="text-foreground">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 grid-line pb-2" style={{ fontFamily: 'var(--font-krungthep)' }}>
              For Schools & Premed Organizations
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Studyverse Medicine partners with schools and premed organizations to provide comprehensive resources that prepare the next generation of medical professionals. Our platform connects students with the tools, community, and guidance they need to excel.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Through innovative technology and expert-driven content, we're creating accessible, engaging learning experiences for all students, regardless of background or resources.
            </p>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div ref={missionRef} className="mt-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 grid-line pb-3 inline-block" style={{ fontFamily: 'var(--font-krungthep)' }}>
            Our Mission
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Founded by medical students who faced the challenges of preparation firsthand, Studyverse was born from a vision to democratize medical education. We recognized that success in medicine shouldn't be determined by access to expensive resources or connections, but by passion, dedication, and proper guidance.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            We're building a community where knowledge is shared freely, where students support each other, and where everyone has access to the mentorship they need. Our platforms are designed to break down barriers and create opportunities for all aspiring medical professionals.
          </p>
          <blockquote className="text-2xl md:text-3xl font-bold text-accent mt-10 mb-10 retro-text">
            "One day, every student, in every classroom, will have a tutor that cares."
          </blockquote>
          <button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full transition-all glow-effect mt-4">
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  )
} 