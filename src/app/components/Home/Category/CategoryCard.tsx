import Image from 'next/image'
import Link from 'next/link'
import { CategoryType } from '@/app/types/category'
import { getImgPath } from '@/app/utils/paths'

interface CategoryCardProps {
  item: CategoryType
  index: number
}

const CategoryCard = ({ item, index }: CategoryCardProps) => {
  return (
    <div
      className={`${
        index === 0
          ? 'col-span-2 row-span-2'
          : 'sm:col-span-1 col-span-2 row-span-1'
      }`}>
      <div className='relative group overflow-hidden w-full rounded-lg'>
        <Image
          src={getImgPath(item.imgSrc)}
          alt={item.title}
          width={570}
          height={394}
          className='w-full rounded-lg'
        />
        <Link href='/' target='_blank'>
          <div className='absolute inset-0 bg-gradient-to-b from-darklight/0 from-60% to-darklight/80 lg:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-lg flex items-end'>
            <div className={`${index === 0 ? 'p-10' : 'p-5'}`}>
              <div className='flex items-center gap-3'>
                <Image
                  src={getImgPath('/images/banner/greentick.svg')}
                  alt='tick'
                  width={16}
                  height={16}
                />
                <p className='text-2xl font-medium text-white'>
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CategoryCard
