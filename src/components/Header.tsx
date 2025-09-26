import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { trackNavigation } from '../utils/analytics'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (sectionName: string) => {
    trackNavigation(sectionName);
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center px-4 relative z-10">
            <Link to="/" onClick={() => handleNavClick('Home')}>
              <img 
                src="/qcts-logo.png" 
                alt="Queen City Technical Services" 
                className="h-16 w-auto relative top-6 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <Link 
              to="/" 
              onClick={() => handleNavClick('Home')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => handleNavClick('Services')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Services
            </Link>
            <Link 
              to="/installs" 
              onClick={() => handleNavClick('Installs')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Installs
            </Link>
            <Link 
              to="/portfolio" 
              onClick={() => handleNavClick('Portfolio')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              onClick={() => handleNavClick('About')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => handleNavClick('Contact')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Contact
            </Link>
            <Link 
              to="/purchase" 
              onClick={() => handleNavClick('Purchase')}
              className="text-gray-700 hover:text-blue-600 transition duration-300 px-3 py-2 rounded-md hover:bg-blue-50"
            >
              Purchase
            </Link>
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
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Home');
                  toggleMenu();
                }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Services');
                  toggleMenu();
                }}
              >
                Services
              </Link>
              <Link
                to="/installs"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Installs');
                  toggleMenu();
                }}
              >
                Installs
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Portfolio');
                  toggleMenu();
                }}
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('About');
                  toggleMenu();
                }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Contact');
                  toggleMenu();
                }}
              >
                Contact
              </Link>
              <Link
                to="/purchase"
                className="text-gray-700 hover:text-blue-600 transition duration-300 py-2"
                onClick={() => {
                  handleNavClick('Purchase');
                  toggleMenu();
                }}
              >
                Purchase
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
