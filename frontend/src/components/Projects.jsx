import { useState, useEffect } from 'react'
import { ExternalLink, Github, Calendar, Chip } from 'lucide-react'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        } else {
          // Fallback to static data if API fails
          const staticProjects = [
            {
              _id: 1,
              title: 'Robin',
              description: 'A real-time interactive agent that can take any type of call. Built with advanced AI capabilities to handle voice and text interactions seamlessly.',
              technologies: ['React', 'Node.js', 'WebSocket', 'AI/ML', 'WebRTC'],
              liveUrl: '#',
              githubUrl: '#',
              image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
              featured: true
            },
            {
              _id: 2,
              title: 'Outreach OS',
              description: 'A comprehensive outreach automation platform similar to Instantly and Smartlead. Features email campaigns, lead management, and analytics dashboard.',
              technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Nodemailer'],
              liveUrl: '#',
              githubUrl: '#',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
              featured: true
            },
            {
              _id: 3,
              title: 'E-Commerce Platform',
              description: 'A full-featured e-commerce solution with payment integration, inventory management, and real-time order tracking.',
              technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
              liveUrl: '#',
              githubUrl: '#',
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
              featured: false
            },
            {
              _id: 4,
              title: 'Task Management System',
              description: 'A collaborative task management tool with real-time updates, team collaboration features, and advanced reporting.',
              technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
              liveUrl: '#',
              githubUrl: '#',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
              featured: false
            }
          ]
          setProjects(staticProjects)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Fallback to static data
        const staticProjects = [
          {
            _id: 1,
            title: 'Robin',
            description: 'A real-time interactive agent that can take any type of call. Built with advanced AI capabilities to handle voice and text interactions seamlessly.',
            technologies: ['React', 'Node.js', 'WebSocket', 'AI/ML', 'WebRTC'],
            liveUrl: '#',
            githubUrl: '#',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
            featured: true
          },
          {
            _id: 2,
            title: 'Outreach OS',
            description: 'A comprehensive outreach automation platform similar to Instantly and Smartlead. Features email campaigns, lead management, and analytics dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Nodemailer'],
            liveUrl: '#',
            githubUrl: '#',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            featured: true
          }
        ]
        setProjects(staticProjects)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project._id || project.id} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <Github size={18} />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
