'use client'

import { CategoryType } from '@/app/types/category'
import { useEffect, useState } from 'react'
import CategorySkeleton from '../../Skeleton/Category'
import CategoryCard from './CategoryCard'
import { getDataPath } from '@/app/utils/paths'

const Category = () => {
  const [category, setCategory] = useState<CategoryType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setCategory(data.CategoryData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='expertise' className='scroll-mt-12'>
      <div className='container'>
        <div className='text-center'>
          <h2>My Technology Stack</h2>
          <p className='text-lg font-normal max-w-2xl mx-auto my-6'>
            I work with the latest and most efficient tools to deliver high-quality digital solutions. 
            From modern frameworks to robust backend systems, here is my core stack.
          </p>
        </div>
        {/* grid layout */}
        <div>
          <div className='grid lg:grid-cols-4 grid-cols-2 gap-6'>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <CategorySkeleton key={i} />
                ))
              : category.map((item, i) => (
                  <CategoryCard key={i} item={item} index={i} />
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category

