import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Queen City Technical Services
            </h3>
            <p className="text-gray-400 mb-6">
              Web development, software solutions, and digital presence services 
              for businesses ready to grow online.
            </p>
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
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Google Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  Digital Presence
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>7850 Five Mile Rd, Cincinnati, OH 45244</li>
              <li>Phone: +1 (513) 494-6777</li>
              <li>Email: info@queencitytechnicalservices.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Queen City Technical Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
