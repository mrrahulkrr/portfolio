
// app/components/sections/Projects.jsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/app/components/ui/button"
import { projects } from '@/app/data/projects'
import { fadeIn } from '@/app/animations/animations'
import { Card, CardContent } from '@/app/components/ui/card'


export default function Projects({ onProjectSelect }) {
  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20, opacitay: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-2 left-4 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <CardContent className="p-4">
                    <p className="mb-4 line-clamp-2 text-muted-foreground">{project.description}</p>
                    <Button variant="link" onClick={() => onProjectSelect(project)} className="text-primary hover:text-primary/80 transition-colors duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}