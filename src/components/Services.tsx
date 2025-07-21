import React from 'react'
import { Code, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and industry best practices.",
      features: ["React & Modern Frameworks", "Backend Development", "Database Integration", "API Development"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Solutions",
      description: "Responsive designs optimized for all devices, ensuring seamless user experiences across platforms.",
      features: ["Responsive Design", "Mobile Optimization", "Performance Tuning", "Cross-Platform"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-Commerce Solutions",
      description: "Complete online business solutions with secure payment processing and comprehensive management tools.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology decisions, system architecture, and digital transformation strategies.",
      features: ["Technology Assessment", "System Architecture", "Performance Analysis", "Strategic Planning"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support, security updates, and system maintenance to ensure optimal performance.",
      features: ["Security Updates", "System Monitoring", "Regular Maintenance", "Technical Support"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training & Support",
      description: "Comprehensive training and ongoing support to help your team maximize technology investments.",
      features: ["Staff Training", "Documentation", "Ongoing Support", "Best Practices"]
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
            We offer comprehensive technical services to help Cincinnati businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300 group"
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
