import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('There was an error submitting your message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-primary-30/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-dark">your.email@srmuniv.edu.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-dark">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-lg">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-dark">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="bg-secondary/20 p-3 rounded-lg text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="bg-secondary/20 p-3 rounded-lg text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-secondary/20 p-3 rounded-lg text-secondary hover:bg-secondary hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-secondary transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-secondary transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-secondary transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
