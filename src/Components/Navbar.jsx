import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Components/Image/logo2.png";
import { assets } from "./Assets";



const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between 
        ${isDarkMode ? "bg-gray-800 text-white shadow-md" : "bg-white text-black shadow-md"}`}>
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img className="w-[60px] lg:[100px]" src={logo} alt="Logo" />
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

    
      <div className="flex items-center gap-4">
      
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          <img src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Toggle" className="w-6" />
        </button>

    
        <a className={` hidden md:block  border border-gray-500 text-black rounded-full px-8 py-2 items-center gap-5" ${isDarkMode ? "bg-gray-800 text-white shadow-md" : "bg-white text-black shadow-md"}`}
          href="#contacts">
          Contact ➡️
        
        </a>

        <button className="block md:hidden ml-3" onClick={toggleMenu}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-64 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"} 
          rounded-md transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Close Button */}
        <button className="absolute right-6 top-6" onClick={toggleMenu}>
          <FaTimes className="text-2xl" />
        </button>

        {/* Menu Links */}
        <ul className="flex flex-col gap-4 py-20 px-10">
          {["Home", "About", "Skills", "Projects", "Contacts"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-400" onClick={toggleMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
