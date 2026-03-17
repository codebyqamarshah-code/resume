'use client'

import { useEffect, useState } from 'react'
import { ProjectType } from '@/app/types/project'
import { getDataPath } from '@/app/utils/paths'
import ProjectCard from './ProjectCard'

const categories = ['All', 'React', 'Next.js', 'UI/UX']

const Project = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => {
        setProjects(data.ProjectData || [])
        setFilteredProjects(data.ProjectData || [])
      })
      .catch(err => console.error("Error fetching projects:", err))
  }, [])

  const handleFilter = (category: string) => {
    setActiveCategory(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.category === category))
    }
  }

  return (
    <section id='project' className='scroll-mt-12 py-24 bg-white dark:bg-darklight overflow-hidden'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-sm mb-4">My Portfolio</p>
          <h2 className="mb-6">Browse Recent <span className="gradient-text">Project</span> Showcase</h2>
          <p className="text-lg text-lightgrey">
            These selected projects demonstrate my expertise in frontend architecture, user experience design, and scalable web solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleFilter(cat)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === cat 
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' 
                : 'border-black/5 dark:border-white/5 bg-secondary dark:bg-lightdarkblue text-lightgrey hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
          {filteredProjects.map((item, i) => (
            <ProjectCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
