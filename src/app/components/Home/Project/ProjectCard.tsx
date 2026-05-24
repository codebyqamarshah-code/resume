import Image from 'next/image'
import { ProjectType } from '@/app/types/project'
import { getImgPath } from '@/app/utils/paths'
import { Icon } from '@iconify/react'

interface ProjectCardProps {
  item: ProjectType
}

const techIcons: Record<string, string> = {
  'React': 'logos:react',
  'Next.js': 'logos:nextjs-icon',
  'Tailwind CSS': 'logos:tailwindcss-icon',
  'TypeScript': 'logos:typescript-icon',
  'Node.js': 'logos:nodejs-icon',
  'MongoDB': 'logos:mongodb-icon',
  'Firebase': 'logos:firebase',
  'Framer Motion': 'logos:framer',
  'Prisma': 'logos:prisma',
  'Redux': 'logos:redux',
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className='group flex flex-col gap-4'>
      {/* Image Container with moderate rounding */}
      <div className='relative aspect-[4/5] w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(0,230,118,0.1)] bg-secondary'>
        <Image
          src={getImgPath(item.coverImg)}
          alt={item.name}
          fill
          style={{ objectFit: 'cover' }}
          className='transition-transform duration-700 group-hover:scale-110'
        />
        
        {/* Hover Overlay - Simplified */}
        <div className='absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
          <a
            href={item.live || '#'}
            target="_blank"
            className='w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 active:scale-95'
          >
            <Icon icon="lucide:external-link" width={20} />
          </a>
        </div>
      </div>

      {/* Project Info Below Image */}
      <div className='space-y-1.5 px-2 transition-transform duration-500 group-hover:translate-x-1'>
        <h3 className='text-lg md:text-xl font-bold text-white transition-colors group-hover:text-primary mb-0'>
          {item.name}
        </h3>
        <p className='text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest'>
          {item.category}
        </p>

        {/* Mini Tech Icons */}
        <div className='flex flex-wrap gap-2 pt-2 opacity-60 group-hover:opacity-100 transition-opacity'>
          {item.tech?.slice(0, 3).map((t, idx) => (
            <div key={idx} className='flex items-center gap-1 text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5'>
              {techIcons[t] && <Icon icon={techIcons[t]} width={10} />}
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
