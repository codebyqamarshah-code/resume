'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { getDataPath, getImgPath } from '@/app/utils/paths'

interface Review {
  imgSrc: string;
  name: string;
  rating: number;
  desc: string;
}

const Review = () => {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => setReviews(data.ReviewData || []))
      .catch(err => console.error("Error fetching reviews:", err))
  }, [])

  return (
    <section id='review' className='py-24 bg-secondary dark:bg-darklight'>
      <div className='container overflow-hidden'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">Client Feedback</p>
          <h2 className='mb-6'>What Clients Say About My <span className="gradient-text">Work</span> Excellence</h2>
          <p className="text-lg text-lightgrey">
            Read how my professional expertise has helped businesses achieve their digital goals and vision.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {reviews.map((review, i) => (
            <div key={i} className='group p-10 rounded-[3rem] bg-white dark:bg-lightdarkblue border border-black/5 dark:border-white/5 card-shadow transition-all duration-300 hover:border-primary/50 flex flex-col'>
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Icon 
                    key={idx} 
                    icon={idx < review.rating ? "lucide:star" : "lucide:star-off"} 
                    className={idx < review.rating ? "text-yellow-400" : "text-gray-300"}
                    width={22}
                  />
                ))}
              </div>

              {/* Review Description */}
              <div className="flex-1">
                <p className='text-lg italic leading-relaxed text-lightgrey group-hover:text-darkblue dark:group-hover:text-white/80 transition-colors'>
                  "{review.desc}"
                </p>
              </div>

              {/* Client Info */}
              <div className='flex items-center gap-5 mt-10 p-2 rounded-2xl bg-secondary dark:bg-darkmode/50'>
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md">
                   <Image src={getImgPath(review.imgSrc)} alt={review.name} width={64} height={64} style={{ objectFit: 'cover' }} />
                </div>
                <div className="space-y-1">
                  <h4 className='text-lg font-bold truncate transition-colors mb-0'>{review.name}</h4>
                  <p className="text-sm font-medium text-primary">Happy Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review
