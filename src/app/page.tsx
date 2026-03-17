'use client'

import Hero from './components/Home/Hero'
import About from './components/Home/About'
import Services from './components/Home/Services'
import Project from './components/Home/Project'
import ExperienceTimeline from './components/Home/Experience'
import Specialize from './components/Home/Specialize'
import Review from './components/Home/Review'
import Pricing from './components/Home/Pricing'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Project />
      <ExperienceTimeline />
      <Specialize />
      <Review />
      <Pricing />
      <ContactForm />
    </main>
  )
}
