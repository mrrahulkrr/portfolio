'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/app/components/ui/button"
import {useRouter} from "next/navigation";


export default function Hero() {
  const router = useRouter();

  return (
    <motion.section
      className="min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center justify-center py-12 md:py-20 bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 mt-8 md:mt-0 px-4 md:px-8 lg:px-12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Hi, I’m Rahul Kumar
        </h2>
        <p className="text-xl mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
          I'm a Full Stack Developer Specializing in Building Intuitive Web Solutions.
        </p>
        <p className="text-sm mb-6 leading-relaxed text-gray-600 dark:text-gray-200">
          When I'm not coding, I'm exploring new tech trends, working on side projects, or diving into open-source contributions. Let’s collaborate to turn your ideas into reality!
        </p>
        <Button 
          // onClick={} 
          className="text-lg px-6 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300">
          +Discover My Projects
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-md blur-lg opacity-20 animate-pulse"></div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Rahul Kumar"
            width={400}
            height={400}
            className="rounded-md border-2 border-gray-300 dark:border-gray-700 shadow-lg relative z-10"
          />
        </div>
      </div>
    </motion.section>
  )
}
