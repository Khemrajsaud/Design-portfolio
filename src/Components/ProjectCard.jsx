import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { workData } from "./Assets";

const ProjectCard = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const visibleProjects = showAllProjects ? workData : workData.slice(0, 3);

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div id="work" className="w-full px-[10%] lg:pt-1 pt-[80px] transition-all duration-500">
      {/* Section Heading */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          My Latest Work
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Welcome to my web dev portfolio — a showcase of my best projects and skills in action!
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {visibleProjects.map(({ title, description, bgImage, links }, index) => {
          const isExpanded = expandedDescriptions.includes(index);
          const shortDesc = description.length > 100
            ? description.slice(0, 100) + "..."
            : description;

          return (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={bgImage || "/placeholder.svg"} 
                  alt={title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {isExpanded ? description : shortDesc}
                  {description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-600 dark:text-blue-400 ml-2 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-4">
                  {links?.site && (
                    <button
                      onClick={() => window.open(links.site, '_blank')}
                      className="relative flex-1 group/btn overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        View Project
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover/btn:opacity-70 transition-opacity duration-300"></div>
                    </button>
                  )}
                  
                  {links?.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 group/github"
                    >
                      <FaGithub className="text-xl text-gray-700 dark:text-gray-300 group-hover/github:text-black dark:group-hover/github:text-white transition-colors duration-200" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* See More / See Less Projects Button */}
      {workData.length > 3 && (
        <div className="text-center pb-16">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="relative group/more overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {showAllProjects ? "See Less Projects" : "See More Projects"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover/more:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-40 group-hover/more:opacity-70 transition-opacity duration-500"></div>
          </button>
        </div>
      )}

      
    </div>
  );
};

export default ProjectCard;
