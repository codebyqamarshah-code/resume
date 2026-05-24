'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { getDataPath } from '@/app/utils/paths'

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Specialize = () => {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setSkills(data.SkillProgressData || []))
      .catch(err => console.error("Error fetching skills:", err))
  }, [])

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills]

  return (
    <section id='expertise' className='scroll-mt-12 py-32 bg-white dark:bg-darklight overflow-hidden'>
      <div className='container px-4'>
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <p className="text-primary font-bold tracking-[6px] uppercase text-xs mb-4">Technical Stack</p>
          <h2 className='mb-8'>My Professional <span className="gradient-text">Skillset</span></h2>
          <p className='text-lg font-normal text-lightgrey'>
            I specialize in the following technologies to build fast, scalable, and user-friendly digital products.
          </p>
        </div>

        {/* Scrolling Marquee Container */}
        <div className='relative flex overflow-hidden group py-10'>
          <div className='flex animate-scroll-infinite gap-10 whitespace-nowrap'>
            {duplicatedSkills.map((skill, i) => (
              <div 
                key={i} 
                className='flex flex-col items-center justify-center gap-6 p-8 min-w-[200px] rounded-[2.5rem] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 transition-all duration-500 hover:border-primary/40'
              >
                <div className='w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white dark:bg-darklight flex items-center justify-center p-5 shadow-sm group-hover:scale-110 transition-transform duration-500'>
                   <Icon icon={skill.icon} width="100%" height="100%" />
                </div>
                <h3 className='text-base md:text-lg font-bold text-center group-hover:text-primary transition-colors'>{skill.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Gradients for smooth fade out at edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white dark:from-darklight to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white dark:from-darklight to-transparent z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-infinite {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Specialize
