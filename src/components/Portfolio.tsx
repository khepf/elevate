import React from 'react'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and MongoDB. Features include real-time inventory, secure payments, and admin dashboard.",
      image: "/ecommerce-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, SEO optimization, and responsive design for a Fortune 500 company.",
      image: "/corporate-website.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for SaaS companies with real-time data visualization, user management, and billing integration.",
      image: "/saas-dashboard.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Restaurant App",
      description: "Full-stack restaurant management app with online ordering, table reservations, and kitchen management system.",
      image: "/restaurant-app.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and integrated CRM for real estate agents.",
      image: "/realestate-platform.jpg",
      technologies: ["Angular", "Django", "PostgreSQL", "AWS"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with video streaming, progress tracking, and interactive quizzes for educational institutions.",
      image: "/educational-platform.jpg",
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group h-96"
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
