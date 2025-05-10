

import 'react';
import { FaHtml5, FaCss3Alt, FaWordpress, FaGithub } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';

const skills = [
  { name: 'ReactJs', icon: <RiReactjsFill />, color: 'text-teal-400' },
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-600' },
  { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, color: 'text-blue-500' },
  { name: 'WordPress', icon: <FaWordpress />, color: 'text-blue-400' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-200' },
];

const Skill = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:pt-1 pt-8">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold ">Skills</h1>
        <p className="">
          These are the technologies I have learned
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`lg:bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col items-center  transition duration-300 hover:scale-105`}
          >
            <div className={`${skill.color} text-6xl`}>{skill.icon}</div>
            <p className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

