import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Portfolio. Built with 
              <span className="text-primary mx-1">React</span>
              and
              <span className="text-secondary mx-1">Node.js</span>
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by SRM University Student
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
