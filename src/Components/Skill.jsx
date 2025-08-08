

import  'react';
import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaWordpress, FaGithub, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si'; // Added more icons for MERN stack

const skills = [
  { name: 'ReactJs', icon: <RiReactjsFill />, color: 'text-blue-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' }, // Next.js icon
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' }, // Node.js icon
  { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' }, // Express.js icon
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' }, // MongoDB icon
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-600' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'text-cyan-500' }, // Changed color for better contrast
  { name: 'WordPress', icon: <FaWordpress />, color: 'text-blue-400' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-500' }, // Adjusted color for better visibility
];

const Skill = ({ isDarkMode }) => {
  return (
    <div id="skills" className={`w-full px-[10%] pt-[120px] lg:pt-[100px] transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {/* Section Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'
        }`}>
          My Skills
        </h2>
        <p className={`text-center max-w-2xl mx-auto text-lg leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          These are the technologies and tools I have learned and actively use in my web development journey.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 px-4 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`group shadow-lg hover:shadow-2xl rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-2 border-2 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                : 'bg-white border-gray-200 hover:border-blue-300'
            } animate-fade-in-up`}
            style={{ animationDelay: `${0.2 + index * 0.08}s` }}
          >
            <div className={`${skill.color} text-6xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
              {skill.icon}
            </div>
            <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

Skill.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Skill;


