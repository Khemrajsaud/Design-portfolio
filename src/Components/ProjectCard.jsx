import  "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { workData } from "./Assets";

const ProjectCard = () => {
  return (
    <div id="work" className="w-full px-[10%] lg:pt-1 pt-[80px]  ">
      {/* Section Heading */}
  
      <h2 className="text-center text-3xl lg:text-4xl font-bold">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-4 font-semibold">
       Welcome to my web dev portfolio — a showcase of my best projects and skills in action!
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map(({ title, description, bgImage, links }, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            {/* Project Image */}
            <img src={bgImage} alt={title} className="w-full h-48 object-cover" />

            {/* Project Details */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>

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
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
