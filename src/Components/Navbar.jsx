import { useState } from "react";
import PropTypes from 'prop-types';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { assets } from "./Assets"; // Make sure you have this file and assets

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300"
    >
      {/* This inner div gets the rounded, floating style */}
     

     <div
  className={`w-full max-w-6xl rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300
    ${isDarkMode
      ? "bg-gray-800 text-white shadow-lg shadow-black/30"
      : "bg-white text-black custom-gradient-shadow"
    }`}
>
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <h1>Khem</h1>
          <span className=" text-purple-600">Raj</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400 transition-colors duration-200 text-sm lg:text-base">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="transition-transform duration-200 hover:scale-110">
            <img
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-5"
            />
          </button>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download
            className={`hidden md:block border border-gray-500 rounded-full px-6 py-2 transition-all duration-200 ${
              isDarkMode ? "text-white bg-gray-700 hover:bg-gray-600" : "text-black bg-white hover:bg-gray-100"
            }`}
          >
            Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contacts"
            className={`hidden md:block border border-gray-500 rounded-full px-6 py-2 transition-all duration-200 ${
              isDarkMode ? "text-white bg-gray-700 hover:bg-gray-600" : "text-black bg-white hover:bg-gray-100"
            }`}
          >
            Contact ➡️
          </a>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden ml-3 transition-transform duration-200 hover:scale-110" onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`absolute top-full left-0 w-full md:hidden flex flex-col gap-4 py-5 px-6 shadow-lg transition-all duration-300 z-40 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
            >
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
            >
              <FaUser /> About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
            >
              <FaCode /> Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
            >
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400 transition-colors duration-200"
            >
              <FaEnvelope /> Contacts
            </a>
          </li>
          <a href="/resume.pdf" download>
            <button className="border border-gray-500 rounded-full px-2 py-1 hover:opacity-80 mt-2 transition-opacity duration-200">
              Download CV
            </button>
          </a>
        </ul>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
