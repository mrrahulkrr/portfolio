"use client";

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter();

  const handleGithubClick = () => {
    window.open('https://github.com/mrrahulkrr', '_blank');
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rahul-krr/', '_blank');
  }

  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-lg mb-8 leading-relaxed text-muted-foreground max-w-3xl">
            As a final-year graduate with relevant work experience and skills in full-stack development gained through internships and projects,
            I am eager to continue learning, grow professionally, and take on new challenges.
            I'm excited to apply my knowledge and explore new opportunities in the field.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" className="rounded-md" onClick={handleGithubClick}>
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
            <Button variant="outline" size="lg" className="rounded-md" onClick={handleLinkedInClick}>
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}