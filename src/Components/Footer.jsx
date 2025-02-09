import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' container mx-8'>
        <div className='w-full h-1 bg-red-500 rounded-md'>
        </div>
        <div>
          <div className='flex justify-between gap-7  p-9'>
          <ul className=' cursor-pointer flex flex-col gap-3'>
            <h1 className='font-bold'>RESOURCES</h1>
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>About</li>
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Skill</li>
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Project</li>
            
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>contact</li>

            


          </ul>
          <ul className='flex flex-col cursor-pointer gap-3'>
            <h1 className='font-bold'>FOLLOW ME</h1>
            <div className='flex items-center gap-3'>
            <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/"><CiLinkedin className='text-3xl'/></a> <p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Linkedin</p>
            </div>
            <div className='flex items-center gap-3'>
            
            <a href="https://github.com/Khemrajsaud"><FaGithub className='text-3xl'/></a><p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Github</p>
            </div>
            <div className='flex items-center gap-3'>
            <FaInstagram className='text-3xl'/><p className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Instragram</p>
            </div>



            
           

            


          </ul>
          <ul className='flex flex-col gap-3 cursor-pointer lg:mr-[200px] '>
            <h1 className='font-bold'>LEGAL</h1>
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Privacy Policy</li>
            <li className=' hover:underline decoratoin-4 decoration-gray-600 underline-offset-4'>Terms & Conditions</li>
          
           

            


          </ul>
          </div>

          
        </div>
        <div className='w-full h-1 bg-red-400'></div>
        <div className='flex items-center justify-center  p-7'>
          <div>
          <h1>Copyright © 2024 Khemrajsaud.
           All Rights Reserved</h1>
           </div>
           <div  className='flex items-center lg:ml-[450px] gap-7 cursor-pointer'>
          
           <a href="https://www.linkedin.com/in/khemraj-saud-76777822a/"><CiLinkedin className='text-3xl '/></a>
            <a href="https://github.com/Khemrajsaud"><FaGithub className='text-3xl '/></a>
            </div>
           

          
        </div>
      
    </div>
  )
}

export default Footer
