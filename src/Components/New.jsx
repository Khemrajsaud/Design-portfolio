
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Components/Image/logo3.png"

const New = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 w-full text-black p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img className="w-[100px]" src={logo} alt="" />
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Hire Me Button */}
        <a href="http://localhost:5173/#contacts"><button className="hidden md:block mr-12 bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition">
          Hire me
        </button></a>

        {/* Mobile Menu Toggle Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-700 text-center space-y-4 p-4">
          <li>
            <a
              href="#home"
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <button
              className="bg-blue-600 p-2 rounded-md w-full hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Hire me
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default New;