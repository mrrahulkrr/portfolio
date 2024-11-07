// app/components/sections/Experience.jsx
'use client'
import { motion } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'
import { experiences } from '@/app/data/experiences'
import { fadeIn } from '@/app/animations/animations'
import { Card } from '@/app/components/ui/card'

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 mr-2 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ChevronRight 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" 
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}