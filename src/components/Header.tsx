import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center py-2 px-4 relative z-10">
            <img 
              src="/elevate-logo.jpg" 
              alt="Queen City Technical Services" 
              className="h-28 w-auto relative top-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
