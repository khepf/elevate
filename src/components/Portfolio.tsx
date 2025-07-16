import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, secure payments, and admin dashboard.",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, SEO optimization, and responsive design for a Fortune 500 company.",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Corporate+Website",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for SaaS companies with real-time data visualization, user management, and billing integration.",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=SaaS+Dashboard",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Restaurant App",
      description: "Full-stack restaurant management app with online ordering, table reservations, and kitchen management system.",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Restaurant+App",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and integrated CRM for real estate agents.",
      image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Real+Estate+Platform",
      technologies: ["Angular", "Django", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with video streaming, progress tracking, and interactive quizzes for educational institutions.",
      image: "https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=Educational+Platform",
      technologies: ["React", "Express", "MongoDB", "WebRTC"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover some of our recent projects and see how we've helped businesses succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 transition duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.codeUrl}
                      className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
