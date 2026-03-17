import Image from 'next/image'
import { HeroType } from '@/app/types/hero'
import { getImgPath } from '@/app/utils/paths'

interface HeroSliderItemProps {
  item: HeroType
}

const HeroSliderItem = ({ item }: HeroSliderItemProps) => {
  return (
    <div>
      <Image
        src={getImgPath(item.imgSrc)}
        alt={item.imgSrc}
        width={600}
        height={420}
        className='rounded-lg w-full'
      />
    </div>
  )
}

export default HeroSliderItem
