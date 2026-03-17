import Image from 'next/image'
import { Icon } from '@iconify/react'
import { ReviewType } from '@/app/types/review'
import { getImgPath } from '@/app/utils/paths'

interface ReviewCardProps {
  item: ReviewType
}

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  return (
    <div className='flex items-center gap-0.5'>
      {[...Array(fullStars)].map((_, i) => (
        <Icon
          key={`full-${i}`}
          icon='tabler:star-filled'
          className='text-yellow-500 text-base'
        />
      ))}
      {halfStars > 0 && (
        <Icon
          key='half'
          icon='tabler:star-half-filled'
          className='text-yellow-500 text-base'
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          icon='tabler:star-filled'
          className='text-gray-400 text-base'
        />
      ))}
    </div>
  )
}

const ReviewCard = ({ item }: ReviewCardProps) => {
  return (
    <div>
      <div className='m-3 p-6 bg-white dark:bg-lightdarkblue rounded-lg'>
        <div className='flex items-center gap-4 mb-5'>
          <div className='relative'>
            <Image
              src={getImgPath(item.imgSrc)}
              alt={item.name}
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className='absolute bottom-0 right-0'>
              <Image
                src={getImgPath('/images/banner/greentick.svg')}
                alt='tick'
                width={15}
                height={15}
              />
            </div>
          </div>
          <div>
            <h6>{item.name}</h6>
            <div>
              {renderStars(item.rating)}
            </div>
          </div>
        </div>
        <div>
          <p className='text-base font-normal'>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
