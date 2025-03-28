'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface SiteLinkProps {
  url: string
  title: string
  description: string
  index: number
}

const SiteLink = ({ url, title, description, index }: SiteLinkProps) => {
  const linkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (linkRef.current) {
      gsap.from(linkRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.3 + (index * 0.2),
        ease: 'power2.out'
      })
    }
  }, [index])
  
  return (
    <div
      ref={linkRef} 
      className="site-link bg-background/50 backdrop-blur-sm border border-primary/30 p-6 rounded-lg hover:border-accent/60 transition-all duration-300 flex flex-col glow-effect"
    >
      <h3 
        className="text-xl md:text-2xl font-bold mb-3 text-secondary"
        style={{ fontFamily: 'var(--font-orbitron)' }}
      >
        {title}
      </h3>
      <p className="mb-4 flex-grow">{description}</p>
      <Link 
        href={url} 
        target="_blank"
        className="inline-flex items-center justify-center bg-primary/20 hover:bg-primary/30 text-white py-2 px-4 rounded-full text-sm transition-all border border-primary/50 w-full"
      >
        <span>Visit {title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  )
}

export default function LinkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current && sectionRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      })
    }
  }, [])

  const sites = [
    {
      url: 'https://www.mymcat.ai',
      title: 'MyMCAT.ai',
      description: 'AI-powered MCAT preparation platform with personalized study plans and advanced analytics.'
    },
    {
      url: 'https://saraswati.studio',
      title: 'Saraswati Studio',
      description: 'Creative learning space for medical visualization and artistic approaches to medical education.'
    },
    {
      url: 'https://studyverse.social',
      title: 'Studyverse Social',
      description: 'Connect with fellow medical students and professionals in a collaborative learning community.'
    }
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block grid-line pb-3"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Our Platforms
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our suite of specialized platforms designed to enhance your medical education journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {sites.map((site, index) => (
            <SiteLink 
              key={site.url}
              url={site.url}
              title={site.title}
              description={site.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 