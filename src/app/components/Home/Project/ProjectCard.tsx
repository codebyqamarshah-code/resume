import Image from 'next/image'
import { ProjectType } from '@/app/types/project'
import { getImgPath } from '@/app/utils/paths'
import { Icon } from '@iconify/react'

interface ProjectCardProps {
  item: ProjectType
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className='group relative p-6 bg-secondary dark:bg-lightdarkblue rounded-[3rem] border border-black/5 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden'>
      {/* Image Container with Overlay */}
      <div className='relative h-64 w-full rounded-[2.5rem] overflow-hidden mb-8 group'>
        <Image
          src={getImgPath(item.coverImg)}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
          className='transition-transform duration-700 group-hover:scale-110'
        />
        
        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6'>
          <a
            href={item.live || '#'}
            target="_blank"
            className='w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-xl hover:scale-110 transition-transform'
            title="Live Demo"
          >
            <Icon icon="lucide:external-link" width={24} />
          </a>
          <a
            href={item.github || '#'}
            target="_blank"
            className='w-14 h-14 rounded-full bg-darkmode text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform'
            title="GitHub Repository"
          >
            <Icon icon="tabler:brand-github" width={26} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className='space-y-4 px-2'>
        <div className="flex items-center justify-between gap-4">
          <h3 className='text-2xl font-bold truncate group-hover:text-primary transition-colors mb-0'>
            {item.name}
          </h3>
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10">
            {item.category}
          </span>
        </div>

        {/* Tech Stack Tags */}
        <div className='flex flex-wrap gap-2'>
          {item.tech?.map((t, idx) => (
            <span 
              key={idx} 
              className='text-xs font-medium px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-lightgrey'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
