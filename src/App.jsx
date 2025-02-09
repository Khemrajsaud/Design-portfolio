import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";
import ProjectCard from "./Components/ProjectCard";
import Footer from "./Components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]); 

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <section id="home">
        <Home isDarkMode={isDarkMode} />
      </section>

      <section id="about">
        <About isDarkMode={isDarkMode} />
      </section>

      <section id="skills">
        <Skill isDarkMode={isDarkMode} />
      </section>

      <section id="projects">
        <ProjectCard isDarkMode={isDarkMode} />
      </section>

      <section id="contacts">
        <Contact isDarkMode={isDarkMode} />
      </section>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
