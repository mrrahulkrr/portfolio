// app/components/layout/MobileMenu.jsx
'use client'
import { motion } from 'framer-motion'

export default function MobileMenu({ onClose }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <motion.div
      className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 py-2 flex flex-col">
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="py-2 text-left text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-md px-3"
          >
            {item}
          </button>
        ))}
      </nav>
    </motion.div>
  )
}