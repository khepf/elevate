import React from 'react'
import { Award, Users, Clock } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "100+",
      label: "Happy Clients"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience"
    }
  ]

  const teamMembers = [
    {
      name: "Josh Miller",
      role: "Lead Developer",
      image: "/lead-developer.jpg",
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies."
    },
    {
      name: "Sarah Alderman",
      role: "UI/UX Designer",
      image: "/ui-ux-designer.jpg",
      bio: "Creative designer focused on user experience and modern design principles."
    },
    {
      name: "David Lacinek",
      role: "Project Manager",
      image: "/project-manager.jpg",
      bio: "Experienced project manager ensuring timely delivery and client satisfaction."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Elevate Web Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We're a passionate team of web developers and designers dedicated to creating 
              exceptional digital experiences that drive business growth.
            </p>
            <p className="text-gray-600 mb-8">
              Since 2019, we've been helping businesses of all sizes establish their online 
              presence with modern, scalable, and user-friendly websites. Our team combines 
              technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Modern Technologies & Best Practices</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Agile Development Process</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">24/7 Support & Maintenance</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Transparent Communication</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with cutting-edge web solutions that drive growth, 
                  enhance user experience, and deliver measurable results.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality First</h4>
                    <p className="text-sm text-gray-600">Every project meets the highest standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals who bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
