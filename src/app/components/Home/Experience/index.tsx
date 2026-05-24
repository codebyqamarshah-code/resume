'use client'

import React, { useEffect, useState } from 'react'
import { getDataPath } from '@/app/utils/paths'

interface Experience {
  year: string;
  title: string;
  company: string;
  desc: string;
}

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setExperiences(data.ExperienceData || []))
      .catch(err => console.error("Error fetching experience:", err))
  }, [])

  return (
    <section id='experience' className='py-32 bg-white dark:bg-darklight relative overflow-hidden'>
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className='container px-4'>
        <div className='text-center max-w-3xl mx-auto mb-24'>
          <p className="text-primary font-bold tracking-[6px] uppercase text-xs mb-4">My Journey</p>
          <h2 className="mb-8">Experience & <span className="gradient-text">Learning</span> Timeline</h2>
          <p className="text-lg text-lightgrey">
            A transparent look at my growth as a developer since I started my journey in early 2024. 
            Focused on consistent learning and practical project building.
          </p>
        </div>

        <div className='max-w-5xl mx-auto relative'>
          {/* Main Vertical Line - Centered on Desktop, Left on Mobile */}
          <div className='absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-linear-to-b from-primary/50 via-primary/20 to-transparent rounded-full' />

          <div className='space-y-20'>
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex items-center justify-between gap-8 w-full group ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* 1. Content Card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className='p-8 md:p-10 rounded-[2.5rem] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5 group-hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 relative'>
                     {/* Floating Year Tag */}
                     <span className={`absolute top-0 -translate-y-1/2 px-5 py-1.5 rounded-full bg-primary text-white text-xs font-bold shadow-lg shadow-primary/30 ${i % 2 === 0 ? 'right-10' : 'left-10'}`}>
                        {exp.year}
                     </span>
                     
                     <h3 className='text-2xl font-bold mb-2 text-darkblue dark:text-white'>{exp.title}</h3>
                     <h4 className='text-primary text-lg font-bold mb-4 tracking-tight'>{exp.company}</h4>
                     <p className='text-lightgrey text-base leading-relaxed'>
                       {exp.desc}
                     </p>
                  </div>
                </div>

                {/* 2. Center Node (The Circle) */}
                <div className='absolute left-4 md:left-1/2 -translate-x-1/2 z-20'>
                   <div className='w-5 h-5 md:w-8 md:h-8 rounded-full bg-white dark:bg-darklight border-4 border-primary shadow-xl group-hover:scale-125 transition-transform duration-300 relative'>
                      <div className="absolute inset-0 bg-primary/40 blur-md rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>

                {/* 3. Empty spacer for Desktop symmetry */}
                <div className='hidden md:block w-[45%]' />

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
