'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/paths'

interface ContactInfoItem {
  icon: string
  label: string
  value: string
  href: string
  color: string
}

const contactInfoData: ContactInfoItem[] = [
  {
    icon: 'tabler:phone',
    label: 'Call Me Directly',
    value: '+92 335 4907776',
    href: 'tel:03354907776',
    color: 'bg-blue-500'
  },
  {
    icon: 'ic:baseline-whatsapp',
    label: 'WhatApp Chat',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/923354907776',
    color: 'bg-green-500'
  },
  {
    icon: 'tabler:mail',
    label: 'Email Me Now',
    value: 'codebyqamarshah@gmail.com',
    href: 'mailto:codebyqamarshah@gmail.com',
    color: 'bg-primary'
  },
]

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 bg-white dark:bg-darklight relative overflow-hidden'>
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16 px-4'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Let's Connect</p>
          <h2 className='mb-6'>Get in Touch <span className="gradient-text">Directly</span></h2>
          <p className="text-lg text-lightgrey">
            I'm available for new projects and collaborations.
            Connecting is just a click away!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {contactInfoData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              className="flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 transition-all duration-300 hover:border-primary/50 hover:translate-x-2 group card-shadow"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon icon={item.icon} width={32} height={32} />
              </div>
              <div className="flex-1 space-y-1">
                <p className='text-xs font-bold text-lightgrey uppercase tracking-widest'>{item.label}</p>
                <p className='text-xl md:text-2xl font-bold text-darkblue dark:text-white group-hover:text-primary transition-colors'>{item.value}</p>
              </div>
              <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Icon icon="lucide:chevron-right" width={24} />
              </div>
            </a>
          ))}

          {/* Centered Portfolio Profile Card */}
          <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image src={getImgPath('/images/1.webp')} alt="Syed Qamar Abbas" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white dark:border-darklight" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold mb-0">Syed Qamar Abbas</h3>
              <p className="text-lightgrey font-medium">Full Stack Developer | Lahore, Pakistan</p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Ready for New Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
