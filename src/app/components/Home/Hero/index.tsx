'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getImgPath } from '@/app/utils/paths'

const roles = [
  'Full Stack Developer',
  'React & Next.js Specialist',
  'UI/UX Enthusiast',
  'Performance-Driven Coder',
]

const Hero = () => {
  // Typewriter state
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-start gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for New Projects
            </div>

            <div className="space-y-4">
              <h1 className="leading-tight">
                I Build <span className="gradient-text">Modern Web</span> <br />
                Experiences & Apps
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-darkblue dark:text-white/80 h-10" suppressHydrationWarning>
                {displayText}
                <span className="animate-pulse text-primary ml-1">|</span>
              </div>
            </div>

            <p className="text-lg md:text-xl max-w-xl text-lightgrey">
              Specializing in React, Next.js, and Full-Stack development. 
              I transform complex ideas into high-performance, pixel-perfect digital solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <Link href="/#contact" className="btn-primary group flex items-center gap-2">
                Hire Me Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"/></svg>
              </Link>
              <Link href="/#project" className="btn-secondary">
                View My Projects
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl rotate-6 scale-105 animate-pulse-slow" />
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-3xl -rotate-3 scale-110" />
              
              {/* Profile Wrapper */}
              <div className="relative h-full w-full bg-darkmode rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl overflow-hidden group">
                <Image
                  src={getImgPath('/images/1.webp')}
                  alt="Syed Qamar Abbas"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zM7 13a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-lightgrey">Completed</p>
                    <p className="text-sm font-bold">50+ Projects</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 -right-12 glass p-4 rounded-2xl shadow-xl animate-float delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-lightgrey">Professional</p>
                    <p className="text-sm font-bold">5+ Years Exp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes Patterns */}
      <div className="absolute bottom-4 left-4 dark:opacity-20 animate-pulse-slow">
        <Image src={getImgPath('/images/banner/pattern1.svg')} alt="ptrn" width={100} height={100} />
      </div>
    </section>
  )
}

export default Hero
