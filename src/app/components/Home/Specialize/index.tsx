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

  return (
    <section id='expertise' className='scroll-mt-12 py-24 bg-white dark:bg-darklight'>
      <div className='container'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Technical Proficiecy</p>
          <h2 className='mb-6'>My Modern Tooling & <span className="gradient-text">Skills</span></h2>
          <p className='text-lg font-normal text-lightgrey'>
            I work with the latest and most efficient tools to deliver high-quality digital solutions. 
            From modern frameworks to robust backend systems, here is my core stack.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-12'>
          {skills.map((skill, i) => (
            <div key={i} className='group space-y-4 p-8 rounded-3xl bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 transition-all duration-300 hover:border-primary/50'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-white dark:bg-darkmode flex items-center justify-center p-2 shadow-sm'>
                    <Icon icon={skill.icon} width={30} />
                  </div>
                  <h3 className='text-xl font-bold group-hover:text-primary transition-colors'>{skill.name}</h3>
                </div>
                <span className='text-lg font-bold text-primary'>{skill.level}%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className='h-3 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden'>
                <div 
                  className='h-full bg-linear-to-r from-primary to-blue-400 rounded-full progress-fill'
                  style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialize
