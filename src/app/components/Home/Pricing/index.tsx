'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { getDataPath } from '@/app/utils/paths'

interface Plan {
  type: string;
  price: { monthly: number; yearly: number };
  desc: string;
  option: string[];
  featured?: boolean;
}

const Pricing = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [isYearly, setIsYearly] = useState(false)

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setPlans(data.PlanData || []))
      .catch(err => console.error("Error fetching plans:", err))
  }, [])

  return (
    <section id='pricing' className='py-24 bg-white dark:bg-darklight'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Investment Plans</p>
          <h2 className='mb-6'>Transparent <span className="gradient-text">Pricing</span> for Your Success</h2>
          <p className="text-lg text-lightgrey">
            Choose the investment plan that scales with your business goals and vision. Professional delivery guaranteed.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-6 mt-12 mb-8">
            <span className={`text-lg font-bold transition-colors ${!isYearly ? 'text-primary' : 'text-lightgrey'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-20 h-10 rounded-full bg-primary/20 p-1.5 transition-all duration-300"
            >
              <div className={`w-7 h-7 bg-primary rounded-full shadow-lg transition-transform duration-500 ${isYearly ? 'translate-x-10' : 'translate-x-0'}`} />
            </button>
            <span className={`text-lg font-bold transition-colors ${isYearly ? 'text-primary' : 'text-lightgrey'}`}>Yearly <span className="text-xs px-2 py-0.5 rounded-md bg-green-500/20 text-green-500 ml-1">Save 35%</span></span>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 max-w-5xl mx-auto'>
          {plans.map((plan, i) => (
            <div key={i} className={`group relative p-12 rounded-[3.5rem] border-2 transition-all duration-500 hover:-translate-y-2 card-shadow flex flex-col ${plan.featured ? 'border-primary bg-primary/5' : 'border-black/5 dark:border-white/5 bg-secondary dark:bg-lightdarkblue'}`}>
              
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-xl shadow-primary/30 uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-10 text-center lg:text-start lg:mb-14">
                <h3 className='text-2xl font-bold mb-3'>{plan.type}</h3>
                <p className='text-lightgrey text-base mb-8'>{plan.desc}</p>
                <div className='flex items-baseline justify-center lg:justify-start gap-1'>
                  <span className='text-5xl font-black text-darkblue dark:text-white'>${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                  <span className='text-lg font-bold text-lightgrey'>/{isYearly ? 'year' : 'month'}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className='space-y-6 flex-1 mb-12'>
                {plan.option.map((opt, idx) => (
                  <li key={idx} className='flex items-center gap-4 text-base font-medium text-lightgrey'>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon icon="lucide:check" width={16} />
                    </div>
                    {opt}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-5 rounded-[2rem] font-bold text-lg transition-all duration-500 ${plan.featured ? 'bg-primary text-white hover:bg-blue-600 shadow-xl shadow-primary/20' : 'bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-white'}`}>
                Get Started Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
