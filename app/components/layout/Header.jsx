// app/components/layout/Header.jsx
'use client'
import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/app/providers/ThemeProviders'
import MobileMenu from './MobileMenu'
import { useScrollToSection } from '@/app/hooks/useScrollToSection'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, setIsDarkMode } = useTheme()
  useScrollToSection()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <>
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rahul kr+
          </motion.h1>
          <nav className="hidden md:flex space-x-1">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-md">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden rounded-md" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu onClose={toggleMenu} />}
    </>
  )
}