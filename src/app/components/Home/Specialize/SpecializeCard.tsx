import Image from 'next/image'
import { SpecializeType } from '@/app/types/specialize'
import { getImgPath } from '@/app/utils/paths'

interface SpecializeCardProps {
  item: SpecializeType
}

const SpecializeCard = ({ item }: SpecializeCardProps) => {
  return (
    <div>
      <div className='bg-secondary dark:bg-darklight rounded-lg p-8'>
        <div className='p-3 rounded-lg bg-primary w-fit mb-8 shadow-lg shadow-primary/30'>
          <Image
            src={getImgPath(item.imgSrc)}
            alt={item.title}
            width={24}
            height={24}
          />
        </div>
        <div>
          <h5 className='font-bold mb-2'>{item.title}</h5>
          <p className='text-base font-normal max-w-xs'>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecializeCard
