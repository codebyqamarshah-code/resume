'use client'

import { useEffect, useState } from 'react'
import { ProjectType } from '@/app/types/project'
import { getDataPath } from '@/app/utils/paths'
import ProjectCard from './ProjectCard'
import Slider from 'react-slick'

const Project = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    fetch(getDataPath('/data.json'))
      .then(res => res.json())
      .then(data => {
        setProjects(data.ProjectData || [])
      })
      .catch(err => console.error("Error fetching projects:", err))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  return (
    <section id='project' className='scroll-mt-12 py-20 md:py-32 bg-darklight'>
      <div className='container'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <p className="text-primary font-bold tracking-[4px] uppercase text-xs mb-4">My Portfolio</p>
          <h2 className="mb-6 text-4xl md:text-5xl">Browse Recent <span className="gradient-text">Project</span> Showcase</h2>
          <p className="text-base md:text-lg text-lightgrey px-4">
            These selected projects demonstrate my expertise in frontend architecture, user experience design, and scalable web solutions.
          </p>
        </div>

        {/* Project Slider - Horizontal for all screens */}
        <div className='projects-slider'>
          <Slider {...settings}>
            {projects.map((item, i) => (
              <div key={i} className='pb-12'>
                <ProjectCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Project
