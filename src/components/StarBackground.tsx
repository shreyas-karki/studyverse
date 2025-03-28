'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Setup
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    // Stars
    class Star {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      brightness: number
      maxBrightness: number
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5
        this.speedX = (Math.random() - 0.5) * 0.1
        this.speedY = (Math.random() - 0.5) * 0.1
        this.brightness = 0
        this.maxBrightness = Math.random() * 0.5 + 0.5
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        // Twinkle effect
        this.brightness = this.brightness + (Math.random() * 0.01) * (this.brightness < this.maxBrightness ? 1 : -1)
        this.brightness = Math.max(0, Math.min(this.maxBrightness, this.brightness))
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }
      
      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness})`
        ctx.fill()
      }
    }
    
    // Create stars
    const stars: Star[] = []
    const starCount = Math.min(150, Math.floor(window.innerWidth * window.innerHeight / 8000))
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        star.update()
        star.draw()
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  )
} 