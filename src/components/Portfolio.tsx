import React from 'react'
import { trackEvent } from '../utils/analytics'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Complete e-commerce solution with React, Node.js, payment processing, inventory management, and Google Analytics integration for comprehensive business insights.",
      image: "/ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Google Analytics"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Business Website with Analytics",
      description: "Professional business website with custom CMS, SEO optimization, Google Analytics setup, and conversion tracking for data-driven growth.",
      image: "/corporate-website.jpg",
      technologies: ["Next.js", "TypeScript", "Google Analytics", "SEO"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Custom Software Solution",
      description: "Tailored inventory management software with automated reporting, real-time tracking, and integration with existing business systems.",
      image: "/saas-dashboard.jpg",
      technologies: ["React", "Python", "PostgreSQL", "API Integration"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Restaurant Digital Presence",
      description: "Complete digital package including website, online ordering system, social media setup, and Google Analytics for customer behavior tracking.",
      image: "/restaurant-app.jpg",
      technologies: ["React", "Firebase", "Google Analytics", "Social Media"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing website with advanced search, lead tracking, Google Analytics conversion goals, and automated email marketing integration.",
      image: "/realestate-platform.jpg",
      technologies: ["Vue.js", "Node.js", "Google Analytics", "Email Marketing"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with student progress tracking, payment processing, and comprehensive analytics dashboard for course performance insights.",
      image: "/educational-platform.jpg",
      technologies: ["React", "Express", "Analytics Dashboard", "Payment Gateway"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent web development, software solutions, and digital presence projects that helped businesses grow online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group h-[450px] cursor-pointer"
              onClick={() => trackEvent('click', 'portfolio_view', project.title)}
            >
              <div className="relative overflow-hidden h-48 group-hover:h-full transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-3 text-gray-200">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 group-hover:opacity-0 group-hover:h-0 transition-all duration-300 overflow-hidden">
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
      </div>
    </section>
  )
}

export default Portfolio
