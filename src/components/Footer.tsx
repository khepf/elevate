import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Elevate Web Solutions
            </h3>
            <p className="text-gray-400 mb-6">
              Creating exceptional web experiences that drive business growth. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Web Street</li>
              <li>Digital City, DC 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: contact@webdevpro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Elevate Web Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
