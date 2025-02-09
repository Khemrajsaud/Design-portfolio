// import React from 'react'
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { RiReactjsFill } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaWordpress } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Skill = () => {
//   return (
//     <div className=''>
     
//       <h1 className=' text-center text-5xl'>Skill</h1>
//       <p className=' text-center py-4'>These are the technologies I have learned </p>
    
      
//         <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-6 ml-20  '>
//             <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-teal-400'>
            
            
//             < RiReactjsFill className='text-center text-9xl ml-[90px] mt-3'/>
//             <p className='text-2xl text-center'>ReactJs</p>
//             </div>
            

//             <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-orange-500 '>
//             <FaHtml5 className='text-center text-9xl ml-[90px] mt-3' />
//             <p className='text-2xl text-center'>HTML</p>
//             </div>

//             <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-600'>
           
//             < FaCss3Alt className='text-center text-9xl ml-[90px] mt-3'/>
//             <p className='text-2xl text-center'>Css</p>
//             </div>
          
//                 <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-yellow-600'>
//              < IoLogoJavascript className='text-center text-9xl ml-[90px] mt-3'/>
//              <p className='text-2xl text-center'>Javascript</p>
//                          </div>
//                          <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-600'>
//                           <RiTailwindCssFill className='text-center text-9xl ml-[90px] mt-3'/>
//                           <p className='text-2xl text-center'>TailwindCss</p>
//                           </div>
//                       <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-500'>        
//                      <FaWordpress className='text-center text-9xl ml-[90px] mt-3'/>
//                      <p className='text-2xl text-center'>Wordpres</p>
//                        </div>
//                       <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-gray-950'>
//                      <FaGithub className='text-center text-9xl ml-[90px] mt-3' />
//                      <p className='text-2xl text-center'>Github</p>
//                     </div>
//     </div>
//     </div>
      
   
//   )
// }

// export default Skill

import React from 'react';
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
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800' },
];

const Skill = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h1>
        <p className="text-gray-600 mt-2 dark:text-gray-400">
          These are the technologies I have learned
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col items-center transform transition duration-300 hover:scale-105`}
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

