'use client'

import { useEffect, useState } from 'react'
import { RecordType } from '@/app/types/record'
import RecordSkeleton from '../../Skeleton/Record'
import RecordCard from './RecordCard'
import { getDataPath } from '@/app/utils/paths'

const Records = () => {
  const [record, setRecord] = useState<RecordType[]>([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRecord(data.RecordData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section>
      <div className='container'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-6'>
          {Loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <RecordSkeleton key={i} />
              ))
            : record.map((item, i) => (
                <RecordCard key={i} item={item} />
              ))}
        </div>
      </div>
    </section>
  )
}

export default Records

