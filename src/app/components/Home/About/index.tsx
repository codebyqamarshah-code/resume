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
    <section id='about' className='scroll-mt-12 py-24 bg-secondary dark:bg-darklight'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 items-center'>
          {/* Left Side: Stats Cards */}
          <div className='grid grid-cols-2 gap-6 relative'>
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full z-0" />
            
            {stats.length > 0 ? stats.map((stat, i) => (
              <div key={i} className={`z-10 p-8 rounded-3xl bg-white dark:bg-lightdarkblue border border-black/5 dark:border-white/5 shadow-xl transition-all duration-300 hover:border-primary/50 group ${i === 1 || i === 3 ? 'mt-8' : ''}`}>
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
              With over 5 years of professional experience, I help companies and startups build custom web applications that scale. My approach focuses on user experience, performance, and clean architecture.
            </p>

            <ul className="space-y-4 grid md:grid-cols-2 grid-cols-1 gap-2">
              {[
                "Pixel-Perfect Frontend Design",
                "Robust API Integrations",
                "Performance Optimization",
                "Advanced React & Next.js",
                "Modern UI/UX Implementation",
                "Scalable Backend Systems"
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
                download
                className='btn-primary inline-flex items-center gap-3'
              >
                <span>Download Resume</span>
                <Icon icon="lucide:download" width={20} />
              </a>
              <div className="flex items-center gap-4 py-2 px-6 rounded-full border border-black/10 dark:border-white/10 dark:bg-white/5">
                <span className="text-sm font-medium">Ready to Discuss?</span>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-darklight bg-gray-200 overflow-hidden">
                       <Image src={getImgPath(`/images/1.webp`)} alt="avatar" width={32} height={32} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
