'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { getDataPath } from '@/app/utils/paths'

interface Service {
  title: string;
  desc: string;
  icon: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setServices(data.ServicesData || []))
      .catch(err => console.error("Error fetching services:", err))
  }, [])

  return (
    <section id='services' className='py-24 bg-white dark:bg-darklight'>
      <div className='container'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">What I Offer</p>
          <h2 className="mb-6">Professional <span className="gradient-text">Services</span> Tailored to Your Business</h2>
          <p className="text-lg text-lightgrey">
            I provide comprehensive digital solutions from design to deployment, ensuring your project meets the highest industry standards.
          </p>
        </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8'>
          {services.map((service, i) => (
            <div key={i} className='group p-10 rounded-[40px] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 card-shadow transition-all duration-500 hover:-translate-y-2'>
              <div className='w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                <Icon icon={service.icon} width={40} height={40} />
              </div>
              <h3 className='text-2xl font-bold mb-4 group-hover:text-primary transition-colors'>{service.title}</h3>
              <p className='text-base leading-relaxed text-lightgrey group-hover:text-darkblue dark:group-hover:text-white/80 transition-colors'>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
