'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { getImgPath, getDataPath } from '@/app/utils/paths'
import { Icon } from '@iconify/react'

interface Stat {
  label: string;
  value: string;
  icon: string;
}

const About = () => {
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setStats(data.StatsData || []))
      .catch(err => console.error("Error fetching stats:", err))
  }, [])

  return (
    <section id='about' className='scroll-mt-12 py-32 bg-darklight'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 items-center'>
          {/* Left Side: Stats Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 relative'>
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full z-0" />
            
            {stats.length > 0 ? stats.map((stat, i) => (
              <div key={i} className={`z-10 p-8 rounded-3xl bg-secondary border border-white/5 shadow-xl transition-all duration-300 hover:border-primary/50 group ${i % 2 !== 0 ? 'sm:mt-8' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                   <Icon icon={stat.icon} width={30} height={30} />
                </div>
                <h2 className="text-4xl font-bold mb-2">{stat.value}</h2>
                <p className="text-lightgrey text-base font-medium">{stat.label}</p>
              </div>
            )) : (
               <div className="text-center col-span-2">Loading Stats...</div>
            )}
          </div>

          {/* Right Side: Content */}
          <div className='flex flex-col gap-8'>
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-[4px] text-sm">Know More About Me</p>
              <h2>I Deliver Quality <br /> Solutions with <span className="gradient-text">Efficiency</span></h2>
            </div>
            
            <p className='text-lg leading-relaxed text-lightgrey'>
              My web development journey began in early 2024 with a deep passion for creating digital experiences. Since then, I've been dedicated to mastering the modern stack, including React and Next.js. I'm constantly building projects, refining my skills, and staying up-to-date with industry trends to deliver the best results.
            </p>

            <ul className="space-y-4 grid md:grid-cols-2 grid-cols-1 gap-2">
              {[
                "Pixel-Perfect Frontend Design",
                "Robust API Integrations",
                "Performance Optimization",
                "Advanced React & Next.js",
                "Modern UI/UX Implementation",
                "Interactive User Experiences"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-lightgrey">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Icon icon="lucide:check" width={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className='flex flex-wrap items-center gap-6 mt-6'>
              <a
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download='Syed-Qamar-Abbas-Resume.pdf'
                className='btn-primary inline-flex items-center gap-3'
              >
                <span>Download Resume</span>
                <Icon icon="lucide:download" width={20} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
