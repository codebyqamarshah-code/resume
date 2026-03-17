import Image from 'next/image'
import { RecordType } from '@/app/types/record'
import { getImgPath } from '@/app/utils/paths'

interface RecordCardProps {
  item: RecordType
}

const RecordCard = ({ item }: RecordCardProps) => {
  return (
    <div>
      <div className='border border-darkblue/10 dark:border-white/10 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow dark:shadow-white/10'>
        <div className='p-2 bg-primary rounded-full w-fit'>
          <Image
            src={getImgPath(item.imgSrc)}
            alt={item.imgSrc}
            width={32}
            height={32}
          />
        </div>
        <h4 className='text-center'>
          {item.digit}
        </h4>
        <p className='text-center text-base font-normal'>
          {item.desc}
        </p>
      </div>
    </div>
  )
}

export default RecordCard
