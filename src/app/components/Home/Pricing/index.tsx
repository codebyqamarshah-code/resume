'use client'

import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { getDataPath } from '@/app/utils/paths'
import Link from 'next/link'

interface TierData {
  price: string;
  features: string[];
}

interface Plan {
  type: string;
  desc: string;
  featured?: boolean;
  tiers: {
    Basic: TierData;
    Standard: TierData;
    Premium: TierData;
  };
}

const Pricing = () => {
  const [plans, setPlans] = useState<Plan[]>([])
  const [activeTier, setActiveTier] = useState<Record<number, 'Basic' | 'Standard' | 'Premium'>>({})

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => {
        setPlans(data.PlanData || [])
        const initialTiers: Record<number, 'Basic' | 'Standard' | 'Premium'> = {}
        data.PlanData?.forEach((_: any, i: number) => {
          initialTiers[i] = 'Basic'
        })
        setActiveTier(initialTiers)
      })
      .catch(err => console.error("Error fetching plans:", err))
  }, [])

  return (
    <section id='pricing' className='py-20 md:py-32 bg-darklight relative'>
      <div className='container px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-12 md:mb-20'>
          <p className="text-primary font-bold tracking-[4px] md:tracking-[6px] uppercase text-[10px] md:text-xs mb-4">Investment Plans</p>
          <h2 className='mb-6 md:mb-8 text-white text-3xl md:text-5xl'>Transparent <span className="text-primary">Pricing</span> for Your Success</h2>
          <p className="text-base md:text-lg text-gray-400 px-4">
            Professional packages designed to scale with your business goals and project requirements.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
          {plans.map((plan, i) => {
            const currentTier = activeTier[i] || 'Basic';
            const tierData = plan.tiers[currentTier];

            return (
              <div key={i} className={`group relative p-6 md:p-8 rounded-2xl bg-secondary border transition-all duration-500 hover:-translate-y-1 my-auto flex flex-col ${plan.featured ? 'border-primary shadow-xl shadow-primary/10' : 'border-white/5 hover:border-primary/30'}`}>
                
                <h3 className='text-lg md:text-xl font-bold mb-4 text-white leading-tight'>{plan.type}</h3>

                {/* Package Tiers Shift - Modern Toggle */}
                <div className="flex bg-black/40 p-1 rounded-xl mb-6">
                    {(['Basic', 'Standard', 'Premium'] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setActiveTier(prev => ({ ...prev, [i]: tier }))}
                        className={`flex-1 py-1.5 md:py-2 text-[10px] md:text-xs font-bold rounded-lg transition-all duration-300 ${activeTier[i] === tier ? 'bg-primary text-black shadow-sm' : 'text-gray-500 hover:text-white'}`}
                      >
                        {tier}
                      </button>
                    ))}
                </div>

                <div className="mb-4">
                  <div className='flex items-baseline gap-2'>
                    <span className='text-2xl md:text-3xl font-black text-primary tracking-tight'>{tierData.price}</span>
                    <span className='text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-wider'>per project</span>
                  </div>
                </div>

                {/* Features List - Two Columns on broad cards if needed, but let's just make it compact */}
                <ul className='space-y-2 md:space-y-3 flex-1 mb-8'>
                  {tierData.features.map((opt, idx) => (
                    <li key={idx} className='flex items-start gap-2 text-xs md:text-sm font-medium text-gray-400'>
                      <Icon icon="lucide:check" className="text-primary mt-1 shrink-0" width={14} />
                      <span className="leading-tight">{opt}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link 
                  href="/#contact"
                  className={`w-full py-3 rounded-xl font-bold text-xs md:text-sm text-center transition-all duration-500 border border-primary/20 text-white hover:bg-primary hover:text-black hover:border-primary`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
