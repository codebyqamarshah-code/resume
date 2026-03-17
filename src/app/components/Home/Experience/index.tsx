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
    <section id='experience' className='py-24 bg-secondary dark:bg-darklight'>
      <div className='container'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Career Path</p>
          <h2 className="mb-6">Project & Work <span className="gradient-text">Journey</span></h2>
          <p className="text-lg text-lightgrey">
            A timeline of my professional growth, technical skill acquisition, and project delivery and achievements.
          </p>
        </div>

        <div className='max-w-4xl mx-auto relative px-4'>
          {/* Vertical Line */}
          <div className='hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-primary/20 rounded-full' />

          <div className='space-y-12'>
            {experiences.map((exp, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`flex-1 w-full bg-white dark:bg-lightdarkblue p-8 rounded-[3rem] border border-black/5 dark:border-white/5 card-shadow transition-all duration-300 hover:border-primary/50 relative ${i % 2 === 0 ? 'text-start lg:text-end' : 'text-start'}`}>
                  <span className='inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4'>{exp.year}</span>
                  <h3 className='text-2xl font-bold mb-2'>{exp.title}</h3>
                  <h4 className='text-primary text-lg font-semibold mb-4'>{exp.company}</h4>
                  <p className='text-lightgrey text-base leading-relaxed'>{exp.desc}</p>
                </div>

                {/* Center Circle */}
                <div className='z-10 w-12 h-12 rounded-full bg-primary border-4 border-white dark:border-darklight shadow-xl shadow-primary/40' />

                {/* Empty Space for alignment */}
                <div className='flex-1 hidden md:block' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
