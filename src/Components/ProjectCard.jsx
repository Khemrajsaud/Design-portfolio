import  { useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
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
    <div id="work" className="w-full px-[10%] lg:pt-1 pt-[80px]">
      {/* Section Heading */}
      <h2 className="text-center text-3xl lg:text-4xl font-bold">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-4 font-semibold">
        Welcome to my web dev portfolio — a showcase of my best projects and skills in action!
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map(({ title, description, bgImage, links }, index) => {
          const isExpanded = expandedDescriptions.includes(index);
          const shortDesc = description.length > 100
            ? description.slice(0, 100) + "..."
            : description;

          return (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <img src={bgImage} alt={title} className="w-full h-48 object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500">
                  {isExpanded ? description : shortDesc}
                  {description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-blue-600 ml-1 underline hover:text-blue-800"
                    >
                      {isExpanded ? "See Less" : "See More"}
                    </button>
                  )}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex items-center justify-between">
                  {links?.site && (
                    <a
                      href={links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium"
                    >
                      View Project <FaArrowRight />
                    </a>
                  )}
                  {links?.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
                    >
                      <FaGithub />
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
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
          >
            {showAllProjects ? "See Less Projects" : "See More Projects"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
