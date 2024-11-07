// app/page.js
'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Experience from '@/app/components/sections/Experience'
import Skills from '@/app/components/sections/Skills'
import Projects from '@/app/components/sections/Projects'
import Contact from '@/app/components/sections/Contact'
import ProjectModal from '@/app/components/shared/ProjectModel'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-black dark:text-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onProjectSelect={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
