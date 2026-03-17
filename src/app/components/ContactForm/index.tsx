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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phnumber: '',
    Message: '',
  })
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ''
    )
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoader(true)
    // Simulating form submission
    setTimeout(() => {
        setShowThanks(true)
        setLoader(false)
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phnumber: '',
            Message: '',
        })
        setTimeout(() => setShowThanks(false), 5000)
    }, 1500)
  }

  return (
    <section id='contact' className='py-24 bg-white dark:bg-darklight relative overflow-hidden'>
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16 px-4'>
           <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Contact Me</p>
           <h2 className='mb-6'>Ready to <span className="gradient-text">Collaborate</span>? Let's Talk!</h2>
           <p className="text-lg text-lightgrey">
             Whether you have a project in mind or just want to say hello, my inbox is always open.
           </p>
        </div>

        <div className="grid lg:grid-cols-12 grid-cols-1 gap-16 items-start">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
             <div className="p-10 rounded-[4rem] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 space-y-10">
               {contactInfoData.map((item, index) => (
                 <a 
                   key={index} 
                   href={item.href} 
                   target={item.href.startsWith('http') ? '_blank' : '_self'}
                   className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
                 >
                   <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-transform`}>
                     <Icon icon={item.icon} width={30} height={30} />
                   </div>
                   <div className="space-y-1">
                     <p className='text-xs font-bold text-lightgrey uppercase tracking-widest'>{item.label}</p>
                     <p className='text-xl font-bold text-darkblue dark:text-white group-hover:text-primary transition-colors'>{item.value}</p>
                   </div>
                 </a>
               ))}
               
               <div className="pt-8 border-t border-black/5 dark:border-white/5 flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image src={getImgPath('/images/1.webp')} alt="Qamar" width={64} height={64} />
                 </div>
                 <div className="space-y-1">
                   <p className="text-sm font-bold">Syed Qamar Abbas</p>
                   <p className="text-xs text-lightgrey">Lahore, Pakistan (GMT +5)</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="p-10 md:p-14 rounded-[4rem] bg-secondary dark:bg-lightdarkblue border border-black/5 dark:border-white/5 card-shadow">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-lightgrey px-4">FIRST NAME</label>
                    <input
                      type='text' name='firstname' value={formData.firstname} onChange={handleChange}
                      placeholder='John'
                      className='w-full px-6 py-4 rounded-2xl bg-white dark:bg-darkmode border border-black/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-0 transition-all text-base'
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-lightgrey px-4">LAST NAME</label>
                    <input
                      type='text' name='lastname' value={formData.lastname} onChange={handleChange}
                      placeholder='Doe'
                      className='w-full px-6 py-4 rounded-2xl bg-white dark:bg-darkmode border border-black/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-0 transition-all text-base'
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-lightgrey px-4">EMAIL ADDRESS</label>
                    <input
                      type='email' name='email' value={formData.email} onChange={handleChange}
                      placeholder='john@example.com'
                      className='w-full px-6 py-4 rounded-2xl bg-white dark:bg-darkmode border border-black/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-0 transition-all text-base'
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-lightgrey px-4">PHONE NUMBER</label>
                    <input
                      type='tel' name='phnumber' value={formData.phnumber} onChange={handleChange}
                      placeholder='+1 234 567 89'
                      className='w-full px-6 py-4 rounded-2xl bg-white dark:bg-darkmode border border-black/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-0 transition-all text-base'
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-lightgrey px-4">YOUR MESSAGE</label>
                  <textarea
                    name='Message' value={formData.Message} onChange={handleChange}
                    rows={4}
                    placeholder='Describe your project or just say hi...'
                    className='w-full px-6 py-4 rounded-3xl bg-white dark:bg-darkmode border border-black/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-0 transition-all text-base resize-none'
                  />
                </div>

                <button
                  type='submit'
                  disabled={!isFormValid || loader}
                  className={`btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 ${
                    !isFormValid || loader ? 'opacity-50 cursor-not-allowed shadow-none' : ''
                  }`}
                >
                  {loader ? (
                    <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : 'Send Message Now'}
                  <Icon icon="lucide:send" width={24} />
                </button>
              </form>

              {showThanks && (
                <div className="mt-8 p-6 rounded-3xl bg-primary text-white text-center font-bold animate-pulse">
                  Thank you! I will get back to you shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
