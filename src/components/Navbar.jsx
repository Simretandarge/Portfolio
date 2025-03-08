import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Simret</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Buttons */}
        <div className='hidden md:flex space-x-4'>
          {/* Contact Button */}
          <a href="#contact">
            <button className='bg-gradient-to-r from-purple-400 to-blue-500 text-white 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Contact  Me
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
        <div className='flex flex-col items-center py-4 space-y-4'>
          <a href="#home" className='hover:text-gray-400' onClick={toggleMenu}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={toggleMenu}>About Me</a>
          <a href="#service" className='hover:text-gray-400' onClick={toggleMenu}>Services</a>
          <a href="#project" className='hover:text-gray-400' onClick={toggleMenu}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={toggleMenu}>Contact</a>

          {/* Mobile Buttons */}
          <a href="#contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>
              Contact me
            </button>
          </a>
          <a href="my-react-vite-app/src/assets/Science_CV (1).pdf" download>
            <button className='bg-gray-700 text-white px-4 py-2 rounded-full'>
              Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
