import React, { useState } from "react";

import project1 from "../Components/Image/project1.png";
import project2 from  "../Components/Image/project2.png";
import project3 from "../Components/Image/project3.png";
import { FaGithub } from "react-icons/fa";
const projects =[
  {
    imgs: project1,
    title: "Project #1",
    description: "UI for fronted development using React",
    links: {
      site: "https://www.netflix.com/np/",
      github: "https://github.com/Khemrajsaud"
    }
  }
  , {
    imgs: project2,
    title: "Project #2",
    description: "UI for fronted development using React",
    links: {
      site: "#",
      github: "#"
    }
  }
  , {
    imgs: project3,
    title: "Project #3",
    description: "UI for fronted development using React",
    links: {
      site: "#",
      github: "#"
    }
  }
  
  
]

const ProjectCard = () =>{

const [currentPfoject, setCurrentProject] = useState(0)
  
  return (
    <div className=" flex-col md:flex-row bg-red-80   " id="portfolio">
        <h1 className="text-3xl text-center font-bold underline decoration-4 decoration-pink-500  underline-offset-8
        pt-8  ">Latest Project</h1>
      <div className=" py-10">
      <div className="p-6 lg:ml-[350px] border-2 lg:w-1/2  bg-gray-700">
      
        <div className=" rounded-md ">
          <img src={projects[currentPfoject].imgs}  alt={projects[currentPfoject].title} className="w-full h-full object-cover rounded-lg mb-4" />
        </div>
        <p className="text-gray-200 my-4">
          {projects[currentPfoject].description}

        </p>
        <div className="flex space-x-4">
          <a href={projects[currentPfoject].links.site} className="px-4 py-2 bg-slate-500 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">view site</a>
          <a className="px-5 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-200" href={projects[currentPfoject].links.github}><FaGithub/></a>
        </div>

      </div>
      <ul className="grid grid-cols-1 gap-2 lg:ml-[350px] sm:w-[100px]  ">
        {projects.map((project,index) =>(
          <li key={index} onClick={()=> setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 text-center lg:max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentPfoject === index? "bg-slate-900" : "" }`}>
            {project.title}
          </li>
        ))}
       
      </ul>
      </div>

    </div>
    
   
  );
};

export default ProjectCard;
