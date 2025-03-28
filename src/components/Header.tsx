'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    if (titleRef.current) {
      tl.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
    }
    
    const glowLines = containerRef.current?.querySelectorAll('.glow-line')
    if (glowLines && glowLines.length > 0) {
      gsap.from(glowLines, {
        width: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power2.inOut',
        delay: 0.5
      })
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <header ref={containerRef} className="w-full pt-8 md:pt-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-6xl font-bold text-center retro-text mb-4"
          style={{ fontFamily: 'var(--font-krungthep)' }}
        >
          <span className="text-primary">Studyverse</span> Medicine
        </h1>
        <div className="flex justify-center">
          <div className="glow-line h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent w-3/4 max-w-2xl"></div>
        </div>
        <div className="flex justify-center mt-2">
          <div className="glow-line h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent w-1/2 max-w-xl"></div>
        </div>
      </div>
    </header>
  )
} 