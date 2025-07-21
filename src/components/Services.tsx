import React from 'react'
import { Code, Settings, BarChart } from 'lucide-react'
import { trackEvent } from '../utils/analytics'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Building (Web Development)",
      description: "Professional website design and development services to establish your online presence and grow your business.",
      features: ["Custom Website Design", "Responsive Mobile-First Development", "E-commerce & Online Stores", "Content Management Systems", "SEO Optimization", "Fast Loading & Secure Sites"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Custom Software Solutions",
      description: "Tailored software development to solve your unique business challenges and streamline operations.",
      features: ["Business Process Automation", "Custom Database Solutions", "API Development & Integration", "Desktop & Web Applications", "System Integration", "Ongoing Support & Maintenance"]
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Google Analytics Setup",
      description: "Complete Google Analytics configuration and training to track your website performance and understand your customers.",
      features: ["Google Analytics 4 Setup", "Conversion Tracking", "Custom Dashboard Creation", "Goal & Event Configuration", "Monthly Reporting", "Data Analysis Training"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in three core services: building professional websites, developing custom software solutions, and setting up Google Analytics to track your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300 group cursor-pointer"
              onClick={() => trackEvent('click', 'service_interest', service.title)}
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
