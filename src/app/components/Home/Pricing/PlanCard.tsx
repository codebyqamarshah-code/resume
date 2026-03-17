import { PlanType } from '@/app/types/plan'
import { Icon } from '@iconify/react'

interface PlanCardProps {
  item: PlanType
  selectedCategory: 'monthly' | 'yearly'
}

const PlanCard = ({ item, selectedCategory }: PlanCardProps) => {
  return (
    <div>
      <div className='bg-white dark:bg-darkmode rounded-lg shadow-lg dark:shadow-neutral-50/10 border border-black/10 dark:border-white/10 px-7 py-10 h-full'>
        <div className='flex flex-col gap-6 border-b border-black/10 dark:border-white/10 pb-6'>
          <p className='text-2xl font-bold'>{item.type}</p>
          <p className='text-5xl font-bold text-lightdarkblue dark:text-white'>
            $
            {selectedCategory === 'monthly'
              ? item.price.monthly
              : item.price.yearly}
            <span className='text-base font-normal text-lightgrey lowercase'>
              /{selectedCategory === 'monthly' ? 'month' : 'year'}
            </span>{' '}
          </p>
          <p className='text-base font-normal'>{item.desc}</p>
        </div>
        {/* options */}
        <div>
          <ul className='flex flex-col gap-6 my-6'>
            {item.option.map((feat, i) => (
              <li key={i}>
                <div className='flex items-center gap-3'>
                  <div className='p-1 rounded-full bg-primary/10 text-primary'>
                    <Icon
                      icon={'material-symbols:check-rounded'}
                      width={19}
                      height={19}
                    />
                  </div>
                  <p className='text-base font-normal'>{feat}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className='bg-primary border border-primary py-3 w-full rounded-lg text-white hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300'>
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default PlanCard
