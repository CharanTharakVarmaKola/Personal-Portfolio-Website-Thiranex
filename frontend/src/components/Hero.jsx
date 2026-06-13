import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hello, I'm
            </span>
            <br />
            <span className="text-white">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">
            Third Year Student at SRM University Ramapuram
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Full-Stack Developer | Building Production-Ready Systems
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Passionate about creating innovative solutions and building scalable applications. 
          Experienced in developing real-time interactive agents and operational systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View Projects
            <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a href="#" className="btn-primary flex items-center gap-2 bg-secondary hover:bg-primary">
            <Download size={20} />
            Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
            <Github size={32} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
