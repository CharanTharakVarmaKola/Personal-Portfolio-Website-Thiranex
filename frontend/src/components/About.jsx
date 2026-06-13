import { GraduationCap, Code, Zap, Target } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a third-year student at SRM University Ramapuram with a passion for building 
              innovative software solutions. My journey in technology has led me to develop 
              production-ready systems that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I specialize in full-stack development, with experience in creating real-time 
              interactive agents and operational systems. My projects focus on scalability, 
              user experience, and cutting-edge technology.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, I'm exploring new technologies, contributing to open-source 
              projects, and continuously learning to stay ahead in the fast-paced tech industry.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card text-center">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-400">SRM University Ramapuram</p>
              <p className="text-gray-500 text-sm">3rd Year Student</p>
            </div>
            
            <div className="card text-center">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-400">Full-Stack</p>
              <p className="text-gray-500 text-sm">Frontend & Backend</p>
            </div>
            
            <div className="card text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focus</h3>
              <p className="text-gray-400">Real-Time Systems</p>
              <p className="text-gray-500 text-sm">Interactive Agents</p>
            </div>
            
            <div className="card text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal</h3>
              <p className="text-gray-400">Production Ready</p>
              <p className="text-gray-500 text-sm">Scalable Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
