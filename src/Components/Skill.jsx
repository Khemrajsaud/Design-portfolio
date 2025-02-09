import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skill = () => {
  return (
    <div className=''>
     
      <h1 className=' text-center text-5xl'>Skill</h1>
      <p className=' text-center py-4'>These are the technologies I have learned </p>
    
      
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-6 ml-20  '>
            <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-teal-400'>
            
            
            < RiReactjsFill className='text-center text-9xl ml-[90px] mt-3'/>
            <p className='text-2xl text-center'>ReactJs</p>
            </div>
            

            <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-orange-500 '>
            <FaHtml5 className='text-center text-9xl ml-[90px] mt-3' />
            <p className='text-2xl text-center'>HTML</p>
            </div>

            <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-600'>
           
            < FaCss3Alt className='text-center text-9xl ml-[90px] mt-3'/>
            <p className='text-2xl text-center'>Css</p>
            </div>
          
                <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-yellow-600'>
             < IoLogoJavascript className='text-center text-9xl ml-[90px] mt-3'/>
             <p className='text-2xl text-center'>Javascript</p>
                         </div>
                         <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-600'>
                          <RiTailwindCssFill className='text-center text-9xl ml-[90px] mt-3'/>
                          <p className='text-2xl text-center'>TailwindCss</p>
                          </div>
                      <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-blue-500'>        
                     <FaWordpress className='text-center text-9xl ml-[90px] mt-3'/>
                     <p className='text-2xl text-center'>Wordpres</p>
                       </div>
                      <div className='bg-white shadow-md shadow-gray-400  w-[300px] h-[200px] rounded-md pl-19 text-gray-950'>
                     <FaGithub className='text-center text-9xl ml-[90px] mt-3' />
                     <p className='text-2xl text-center'>Github</p>
                    </div>
    </div>
    </div>
      
   
  )
}

export default Skill
