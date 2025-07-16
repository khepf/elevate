import React from 'react'
import { Code, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Vue.js", "Node.js & Express", "Database Integration", "API Development"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Responsive designs that look perfect on all devices, from mobile phones to desktops.",
      features: ["Responsive Design", "Touch-Friendly UI", "Fast Loading", "Cross-Platform"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-Commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Admin Dashboard"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience.",
      features: ["Speed Optimization", "SEO Ready", "Analytics Setup", "Performance Monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Maintenance",
      description: "Ongoing security updates, backups, and maintenance to keep your site secure.",
      features: ["Security Updates", "Regular Backups", "Monitoring", "Bug Fixes"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consulting & Support",
      description: "Expert guidance and 24/7 support to help your business succeed online.",
      features: ["Strategic Planning", "24/7 Support", "Training", "Growth Consulting"]
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
            We offer comprehensive web development services to help your business thrive online
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
