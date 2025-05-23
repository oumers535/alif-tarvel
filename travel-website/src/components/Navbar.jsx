import React, { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick =()=> {
    setMobileMenuOpen(false);
  }
        return (
          <nav className="fixed top-0 left-0 w-full z-30 bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-3xl font-bold text-teal-400 cursor-pointer select-none">
                <a href="#home">Alif Tour</a>
              </div>
              <ul className="hidden md:flex space-x-8 text-white font-semibold">
                <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
                <li><a href="#destinations" className="hover:text-teal-400 transition">Destinations</a></li>
                <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                  className="focus:outline-none"
                >
                    <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {mobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
              </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <ul className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm p-6 space-y-6  font-semibold ">
                <li onClick={handleClick} ><a href="#home" className="block hover:bg-gray-900 py-3 px-3 hover:text-teal-400 transition">Home</a></li>
                <li onClick={handleClick} ><a href="#destinations" className="block hover:bg-gray-900 py-3 px-3 hover:text-teal-400 transition">Destinations</a></li>
                <li onClick={handleClick} ><a href="#about" className="block hover:bg-gray-900 py-3 px-3 hover:text-teal-400 transition">About</a></li>
                <li onClick={handleClick} ><a href="#contact" className="block hover:bg-gray-900 py-3 px-3 hover:text-teal-400 transition">Contact</a></li>
              </ul>
            )}
          </nav>
        );
      }

export default Navbar