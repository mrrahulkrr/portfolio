import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <p className="mb-6 text-muted-foreground">&copy; 2023 John Doe. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}