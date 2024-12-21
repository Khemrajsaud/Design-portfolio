import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import Footer from './Components/Footer';





const App = () => {
  const [theme, setTheme] = useState('light');

  // Apply theme class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white ' : 'bg-white text-black '}`}>
      {/* Theme Toggle Button */}
      

      {/* Navbar */}
       <Navbar />
       <button onClick={toggleTheme} className="  right-9 mt-5 z-20 absolute bottom-2 ">
        {theme === 'light' ? (
          <MdOutlineLightMode className="text-2xl text-gray-900" />
        ) : (
          <MdOutlineDarkMode className="text-2xl text-gray-300" />
        )}
      </button>
       <section id='home'>
        <Home/>
       </section>

       <section id='about'>
        <About/>
       </section>
       <section id='skills'>
        <Skill/>
       </section>
       <section id='projects'>
        <ProjectCard/>
       </section>


       <section id='contacts'>
        <Contact/>
        
       </section>
       <Footer/>
     
      
    </div> 
  );
};

export default App;
