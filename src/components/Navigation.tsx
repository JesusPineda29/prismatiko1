import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-neutral-900 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <img src="logoBlanco.png" alt="" className="w-60 h-auto" />
          </div>

          {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-6">
  {[
    { label: 'Inicio', section: 'inicio', },
    { label: 'Servicios', section: 'servicios' },
    { label: '¿Por qué nosotros?', section: 'nosotros' },
    { label: 'Testimonios', section: 'testimonios' },
    { label: 'Contacto', section: 'contacto', highlight: true  },
  ].map(({ label, section, highlight }) => (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className={`font-quicksand text-xl text-gray-200 relative transition-all duration-200 transform hover:-translate-y-1 
      ${highlight ? 'after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-[#ffa33a] after:rounded' : ''} 
      hover:text-[#ffa33a]`}
      style={{ textDecoration: 'none' }}
    >
      {label}
    </button>
  ))}
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                ¿Por qué nosotros?
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-700 to-teal-700 text-white rounded-lg mx-3 my-2 hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;