import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 py-8 border-t border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Portfolio. Built with
              <span className="text-secondary mx-1">React</span>
              and
              <span className="text-accent mx-1">Node.js</span>
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-secondary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/one-man-tharak/" className="text-gray-600 hover:text-secondary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-secondary transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="text-accent" size={16} /> by SRM University Student
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
