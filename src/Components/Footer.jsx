// import React from 'react'
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className=' container mx-8'>
//         <div className='w-full h-1 bg-red-500 rounded-md'>
//         </div>
//         <div>
//           <div className='flex justify-between gap-7  p-9'>
//           <ul className=' cursor-pointer flex flex-col gap-3'>
//             <h1 className='font-bold'>RESOURCES</h1>
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>About</li>
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Skill</li>
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Project</li>
            
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>contact</li>

            


//           </ul>
//           <ul className='flex flex-col cursor-pointer gap-3'>
//             <h1 className='font-bold'>FOLLOW ME</h1>
//             <div className='flex items-center gap-3'>
//             <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/"><CiLinkedin className='text-3xl'/></a> <p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Linkedin</p>
//             </div>
//             <div className='flex items-center gap-3'>
            
//             <a href="https://github.com/Khemrajsaud"><FaGithub className='text-3xl'/></a><p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Github</p>
//             </div>
//             <div className='flex items-center gap-3'>
//             <FaInstagram className='text-3xl'/><p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Instragram</p>
//             </div>



            
           

            


//           </ul>
//           <ul className='flex flex-col gap-3 cursor-pointer lg:mr-[200px] '>
//             <h1 className='font-bold'>LEGAL</h1>
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Privacy Policy</li>
//             <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Terms & Conditions</li>
          
           

            


//           </ul>
//           </div>

          
//         </div>
//         <div className='w-full h-1 bg-red-400'></div>
//         <div className='flex items-center justify-center  p-7'>
//           <div>
//           <h1>Copyright © 2024 Khemrajsaud.
//            All Rights Reserved</h1>
//            </div>
//            <div  className='flex items-center lg:ml-[450px] gap-7 cursor-pointer'>
          
//            <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/"><CiLinkedin className='text-3xl '/></a>
//             <a href="https://github.com/Khemrajsaud"><FaGithub className='text-3xl '/></a>
//             </div>
           

          
//         </div>
      
//     </div>
//   )
// }

// export default Footer



import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Top Divider */}
      <div className="w-full h-[2px] bg-gray-300 rounded-md"></div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {/* Resources Section */}
        <div>
          <h1 className="font-bold text-lg mb-4">RESOURCES</h1>
          <ul className="space-y-3  dark:text-gray-300">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Skill</li>
            <li className="hover:underline cursor-pointer">Project</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Follow Me Section */}
        <div>
          <h1 className="font-bold text-lg mb-4">FOLLOW ME</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin className="text-3xl hover:scale-110 transition" />
              </a>
              <p className="hover:underline cursor-pointer">LinkedIn</p>
            </li>
            <li className="flex items-center gap-3">
              <a href="https://github.com/Khemrajsaud" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl hover:scale-110 transition" />
              </a>
              <p className="hover:underline cursor-pointer">GitHub</p>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-3xl hover:scale-110 transition" />
              <p className="hover:underline cursor-pointer">Instagram</p>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h1 className="font-bold text-lg mb-4">LEGAL</h1>
          <ul className="space-y-3  dark:text-gray-300">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-[2px] bg-gray-300"></div>

      {/* Copyright & Social Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-6">
        <p className="text-center  dark:text-gray-300">
          © 2024 Khemraj Saud. All Rights Reserved.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="text-3xl hover:scale-110 transition" />
          </a>
          <a href="https://github.com/Khemrajsaud" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
