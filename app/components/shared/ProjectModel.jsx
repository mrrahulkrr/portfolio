'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X, Github, ExternalLink } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function'

export default function ProjectModal({ project, onClose }) {
  const liveLinkNavigation = () => {
    window.open(project.liveDemoLink, "_blank")
  }

  const githubNavigation = () => {
    window.open(project.github, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <img src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover rounded-lg mb-4" />
        <div className="flex space-x-4 mb-4">
          <Button onClick={githubNavigation} variant="outline" className="flex items-center">
            <Github  className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button onClick={liveLinkNavigation}  variant="outline" className="flex items-center">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p>{project.description}</p>
      </motion.div>
    </motion.div>
  )
}