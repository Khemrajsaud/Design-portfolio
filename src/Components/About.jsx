import { useState } from "react";
import PropTypes from "prop-types";
import { assets, infoList, toolsData, educationData } from "./Assets";
import EducationModal from "./EducationModal";

const About = ({ isDarkMode }) => {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  return (
    <div
      id="about"
      className={`w-full px-[10%] pt-[120px] lg:pt-[100px] transition-colors duration-300 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Section Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode
              ? "text-white"
              : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
          }`}
        >
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center lg:gap-20 gap-12 my-4">
        {/* About Image Section */}
        <div
          className="w-64 sm:w-80 rounded-3xl max-w-none relative group animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src={assets.about_me}
            alt="About Me"
            className="w-full h-auto rounded-3xl shadow-xl transform group-hover:scale-105 transition-transform duration-500 border-4 border-blue-500 dark:border-purple-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p
            className={`mb-10 max-w-2xl text-base md:text-lg leading-relaxed animate-fade-in-up ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            MERN stack developer with experience in building user-friendly and
            responsive websites and web apps using ReactJS, NodeJS, ExpressJS,
            NextJS, and MongoDB. I enjoy learning new things, solving problems,
            and creating clean, functional designs for users.
          </p>

          {/* Info List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-lg animate-fade-in-up ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-800 hover:border-blue-600"
                    : "border-gray-300 bg-white hover:border-blue-200"
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <img src={icon} alt={title} className="w-8 h-8 mb-3" />
                <h3
                  className={`font-semibold text-lg mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools I use */}
          <h4
            className={`pt-5 font-semibold text-xl mb-4 animate-fade-in-up ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            style={{ animationDelay: "1.0s" }}
          >
            Tools I use
          </h4>
          <ul className="flex items-center flex-wrap gap-3 sm:gap-5 pt-2">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square transform hover:-translate-y-1 duration-500 border cursor-pointer rounded-lg shadow-sm hover:shadow-md animate-fade-in-up ${
                  isDarkMode
                    ? "border-gray-700 bg-gray-800 hover:bg-gray-700"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                }`}
                style={{ animationDelay: `${1.2 + index * 0.05}s` }}
              >
                <img src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>

          {/* Education Button */}
          <div
            className="mt-10 text-center lg:text-left animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            <button
              onClick={() => setIsEducationModalOpen(true)}
              className={`relative group overflow-hidden px-8 py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md ${
                isDarkMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              View My Education
              <span className="ml-2">🎓</span>
            </button>
          </div>
        </div>
      </div>

      {/* Education Modal */}
      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
        isDarkMode={isDarkMode}
        educationData={educationData}
      />
    </div>
  );
};

About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
