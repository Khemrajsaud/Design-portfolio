import { useState } from "react";
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
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between 
      ${
        isDarkMode
          ? "bg-gray-800 text-white shadow-md"
          : "bg-white text-black shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <h1>Khem</h1>
        <span>Raj</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right-side Buttons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
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
          className={`hidden md:block border border-gray-500 rounded-full px-6 py-2 ${
            isDarkMode ? "text-white bg-gray-700" : "text-black bg-white"
          } hover:opacity-80`}
        >
          Download CV
        </a>

        {/* Contact Button */}
        <a
          href="#contacts"
          className={`hidden md:block border border-gray-500 rounded-full px-6 py-2 ${
            isDarkMode ? "text-white bg-gray-700" : "text-black bg-white"
          } hover:opacity-80`}
        >
          Contact ➡️
        </a>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden ml-3" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`absolute top-16 left-[100px] w-full md:hidden flex h-screen flex-col gap-4 pt-5 pl-[30px] shadow-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <li>
            <a
              href="#home"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaUser /> About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaCode /> Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaProjectDiagram /> Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={toggleMenu}
              className="flex items-center gap-2 hover:text-gray-400"
            >
              <FaEnvelope /> Contacts
            </a>
          </li>
          <a href="/resume.pdf" download>
            <button className="border border-gray-500 rounded-full px-2 py-1 hover:opacity-80 mt-2">
              Download CV
            </button>
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
