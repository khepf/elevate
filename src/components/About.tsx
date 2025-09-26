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

  // const teamMembers = [
  //   {
  //     name: "Michael Healy",
  //     role: "Lead Web Developer",
  //     image: "/lead-developer.jpg",
  //     bio: "Senior web developer with 10+ years of experience in React, Node.js, and modern web technologies. Specializes in scalable web applications."
  //   },
  //   {
  //     name: "Jennifer Whitmore",
  //     role: "Analytics & SEO Specialist",
  //     image: "/ui-ux-designer.jpg",
  //     bio: "Expert in Google Analytics implementation, SEO optimization, and digital marketing strategies to maximize online visibility and conversions."
  //   },
  //   {
  //     name: "Robert Thompson",
  //     role: "Software Solutions Manager",
  //     image: "/project-manager.jpg",
  //     bio: "Dedicated to delivering custom software solutions and managing digital presence projects from conception to successful implementation."
  //   }
  // ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Queen City Technical Services
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We're a dedicated team of developers and IT specialists focused on helping people and businesses 
              establish and grow their online presence through custom software, analytics, comprehensive digital solutions, 
              and professional in-home technology setup services.
            </p>
            <p className="text-gray-600 mb-8">
              Since our founding, we've been committed to helping businesses and individuals leverage technology 
              to achieve their goals. Our expertise spans web development, custom software development, 
              Google Analytics implementation, SEO, complete digital presence packages, and professional 
              in-home computer and printer installation services - everything you need to succeed online and at home.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Custom Web & Software Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Google Analytics & Performance Tracking</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">SEO & Online Visibility Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">In-Home Computer & Printer Setup</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Complete Digital Presence Packages</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To provide comprehensive web development, software solutions, and digital presence services 
                  that empower businesses to establish, grow, and optimize their online success through 
                  data-driven strategies and cutting-edge technology.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality First</h4>
                    <p className="text-sm text-gray-600">Every solution meets professional standards</p>
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
        {/* <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional experts dedicated to your technical success
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
        </div> */}
      </div>
    </section>
  )
}

export default About
