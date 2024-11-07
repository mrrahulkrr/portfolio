'use client'

import { motion } from 'framer-motion'
import { Code, Server, Database } from 'lucide-react'
import { Card } from "@/app/components/ui/card"

const skills = [
  { name: 'NextJs', icon: <Code className="h-6 w-6" /> },
  { name: 'TypeScript', icon: <Code className="h-6 w-6" /> },
  { name: 'ReactJs', icon: <Code className="h-6 w-6" /> },
  { name: 'Node.js', icon: <Server className="h-6 w-6" /> },
  { name: 'Python', icon: <Code className="h-6 w-6" /> },
  { name: 'SQL', icon: <Database className="h-6 w-6" /> },
  { name: 'MongoDB', icon: <Database className="h-6 w-6" /> },
  { name: 'Javascript', icon: <Code className="h-6 w-6" /> }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-16 md:py-24 bg-dark"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-4 flex flex-col items-center justify-center group hover:shadow-lg transition-all duration-300">
                  <div className="text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="mt-2 font-medium text-foreground">{skill.name}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}