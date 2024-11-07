'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Button } from "@/app/components/ui/button"

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Contact Me</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <Button size="lg" className="text-lg">
            <Mail className="mr-2 h-5 w-5" /> Get in Touch
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}